import { useQuery } from '@tanstack/react-query';

import { getCompanies, getCountries, getJkkViolations } from '../api/serverApi';

const useGetDatatable = ({ countriesParams, companiesParams }) => {
  const {
    data: violations,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery(
    ['violations', 'jkk', countriesParams, companiesParams],
    () => getJkkViolations({ countries: countriesParams, companies: companiesParams }),
    {
      keepPreviousData: true,
    },
  );

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

  return {
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
  };
};

export default useGetDatatable;
