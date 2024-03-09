import { Table } from 'antd';

import TableTitleRow from './TableTitleRow';

const DataTable = ({
  isLoading,
  countries,
  companies,
  modifiedData,
  countriesParams,
  dropdownOptions,
  companiesParams,
  controlledColumns,
  isCompaniesLoading,
  isCountriesLoading,
  handleFilterCountries,
  handleFilterCompanies,
}) => {
  return (
    <>
      <TableTitleRow
        dropdownOptions={dropdownOptions}
        countries={countries}
        countriesParams={countriesParams}
        companiesParams={companiesParams}
        companies={companies}
        isCountriesLoading={isCountriesLoading}
        isCompaniesLoading={isCompaniesLoading}
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

export default DataTable;
