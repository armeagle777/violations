import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Alert from '../../components/alert/Alert';
import Loader from '../../components/loader/Loader';
// import DataTable from '../../components/DataTable/DataTable';
import { getCompanies, getCountries, getJkkViolations } from '../../api/serverApi';
import { useSearchParams } from 'react-router-dom';
import TableTitleRow from '../../components/DataTable/TableTitleRow';
import { jkkTableDefaultColumns } from '../../utils/constants';
import { Table, Switch } from 'antd';

const JkkViolations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const countriesParams = searchParams.getAll('countries');
  const companiesParams = searchParams.getAll('companies');

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

  const {
    data: violations,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery(
    ['violations', 'jkk', countriesParams, companiesParams],
    () => getJkkViolations({ countries: countriesParams, companies: companiesParams }),
    {
      keepPreviousData: true,
    },
  );

  // if (!violations) return null;

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
  const [controlledColumns, setControlledColumns] = useState(columns);

  const {
    data: countries,
    isLoading: isCountriesLoading,
    isFetching: isCountriesFetching,
  } = useQuery(['countries'], () => getCountries(), {
    keepPreviousData: true,
  });

  const {
    data: companies,
    isLoading: isCompaniesLoading,
    isFetching: isCompaniesFetching,
    isError: isCompaniesError,
  } = useQuery(['companies'], () => getCompanies(), { keepPreviousData: true });

  if (isError) {
    return <Alert message="Ինչ֊որ բան այնպես չէ" />;
  }

  if (isLoading || isFetching) {
    return <Loader />;
  }

  // const handleFilterCountries = (data) => {
  //   setSearchParams({ countries: data, companies: companiesParams });
  // };

  const dropdownOptions = controlledColumns.map((el) => ({
    key: el.key,
    label: (
      <>
        <Switch key={el.key} size="small" checked={!el.hidden} onChange={() => handleSwitchChange(el.key)} />
        <span>{el.title}</span>
      </>
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
      {/* <Divider>Columns displayed</Divider> */}
      {/*  onFilterCountries, onFilterCompanies */}
      <TableTitleRow
        dropdownOptions={dropdownOptions}
        countries={countries}
        countriesParams={countriesParams}
        companiesParams={companiesParams}
        companies={companies}
        isCountriesLoading={isCountriesLoading || isCountriesFetching}
        isCompaniesLoading={isCompaniesLoading || isCompaniesFetching}
        onFilterCountries={handleFilterCountries}
        onFilterCompanies={handleFilterCompanies}
      />
      <Table
        columns={controlledColumns}
        dataSource={modifiedData}
        loading={isLoading}
        scroll={{
          x: 1000,
        }}
        style={{
          marginTop: 8,
        }}
      />
    </>
  );
};

export default JkkViolations;
