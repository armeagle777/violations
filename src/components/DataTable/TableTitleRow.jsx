import { Button, Dropdown, Flex } from 'antd';
import qs from 'qs';
import { FaGripVertical } from 'react-icons/fa';

import ExportExcelButton from './ExportExcelButton';
import SkeletonSelect from './SkeletonSelect';

const TableTitleRow = ({
  dropdownOptions,
  countries,
  companies,
  isCountriesLoading,
  isCompaniesLoading,
  onFilterCountries,
  onFilterCompanies,
}) => {
  const countriesOptions = countries?.map((c) => ({ label: c.name_am, value: c.id, key: c.id }));
  const companiesOptions = companies?.map((c) => ({
    label: c.company_title,
    value: c.company_id,
    key: c.company_id,
  }));

  return (
    <Flex justify="space-between">
      <Flex style={{ width: '60%', gap: 10 }}>
        <SkeletonSelect isLoading={isCountriesLoading} onChange={onFilterCountries} options={countriesOptions} />
        <SkeletonSelect isLoading={isCompaniesLoading} onChange={onFilterCompanies} options={companiesOptions} />
      </Flex>
      <Flex>
        <Dropdown
          menu={{
            items: dropdownOptions,
          }}
          placement="bottomRight"
          arrow
          trigger={['click']}
        >
          <Button
            type="link"
            icon={<FaGripVertical />}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 0,
              border: 0,
              color: 'purple',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            COLUMNS
          </Button>
        </Dropdown>
        <ExportExcelButton />
      </Flex>
    </Flex>
  );
};

export default TableTitleRow;
