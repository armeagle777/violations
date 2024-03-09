import { useCallback, useEffect, useState, memo } from 'react';
import { Divider } from 'antd';
import { useSearchParams } from 'react-router-dom';

import { Alert, DataTable, DropdownOption } from '@/components';
import { jkkTableDefaultColumns } from '../../utils/constants';
import useGetDatatable from '../../hooks/useGetDatatable';

const JkkViolations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const countriesParams = searchParams.getAll('countries');
  const companiesParams = searchParams.getAll('companies');

  const {
    error,
    isError,
    isLoading,
    countries,
    companies,
    violations,
    isFetching,
    isCompaniesError,
    isCompaniesLoading,
    isCountriesLoading,
    isCountriesFetching,
    isCompaniesFetching,
  } = useGetDatatable({ countriesParams, companiesParams });

  const handleFilterCountries = useCallback(
    (data) => {
      setSearchParams({ countries: data, companies: companiesParams });
    },
    [companiesParams],
  );

  const handleFilterCompanies = useCallback(
    (data) => {
      setSearchParams({
        companies: data,
        countries: countriesParams,
      });
    },
    [countriesParams],
  );

  const modifiedData = violations?.map((d) => ({ ...d, key: d.id }));

  const columns =
    modifiedData?.length > 0
      ? Object.keys(modifiedData[0])
          .filter((item) => item !== 'key')
          .map((item, index) => ({
            key: index,
            dataIndex: item,
            title: item.toUpperCase(),
            hidden: !jkkTableDefaultColumns.includes(item),
            ellipsis: true,
          }))
      : [];
  //handle this part to render data on first render
  const [controlledColumns, setControlledColumns] = useState([...columns]);

  useEffect(() => {
    setControlledColumns(columns);
  }, [modifiedData?.length]);

  if (isError) {
    return <Alert message="Ինչ֊որ բան այնպես չէ" />;
  }

  const dropdownOptions = controlledColumns.map((el) => ({
    key: el.key,
    label: (
      <DropdownOption
        key={el.key}
        title={el.title}
        isChecked={!el.hidden}
        onSwitchChange={() => handleSwitchChange(el.key)}
      />
    ),
  }));

  const handleSwitchChange = (id) => {
    setControlledColumns((prev) =>
      prev.map((el) => {
        if (el.key === id) {
          return { ...el, hidden: !el.hidden };
        }
        return el;
      }),
    );
  };

  return (
    <>
      {/* <Divider style={{ marginTop: 0 }}>Columns displayed</Divider> */}
      <DataTable
        isLoading={isLoading || isFetching}
        countries={countries}
        companies={companies}
        modifiedData={modifiedData}
        countriesParams={countriesParams}
        dropdownOptions={dropdownOptions}
        companiesParams={companiesParams}
        controlledColumns={controlledColumns}
        isCompaniesLoading={isCompaniesLoading || isCompaniesFetching}
        isCountriesLoading={isCountriesLoading || isCountriesFetching}
        handleFilterCountries={handleFilterCountries}
        handleFilterCompanies={handleFilterCompanies}
      />
    </>
  );
};

export default memo(JkkViolations);
