import { Button, Dropdown, Flex } from 'antd';
import qs from 'qs';
import { FaGripVertical } from 'react-icons/fa';

import ExportExcelButton from './ExportExcelButton';
import SkeletonSelect from './SkeletonSelect';
import { useState } from 'react';

const TableTitleRow = ({
  dropdownOptions,
  countries,
  companies,
  isCountriesLoading,
  isCompaniesLoading,
  onFilterCountries,
  onFilterCompanies,
  countriesParams,
  companiesParams,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const countriesOptions = countries?.map((c) => ({ label: c.name_am, value: c.id, key: c.id }));
  const companiesOptions = companies?.map((c) => ({
    label: c.company_title,
    value: c.companyId,
    key: c.companyId,
  }));

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setIsOpen(nextOpen);
    }
  };

  return (
    <Flex justify="space-between">
      <Flex style={{ width: '60%', gap: 10 }}>
        <SkeletonSelect
          selectedValues={countriesParams}
          isLoading={isCountriesLoading}
          onChange={onFilterCountries}
          options={countriesOptions}
        />
        <SkeletonSelect
          selectedValues={companiesParams}
          isLoading={isCompaniesLoading}
          onChange={onFilterCompanies}
          options={companiesOptions}
        />
      </Flex>
      <Flex>
        <Dropdown
          menu={{
            items: dropdownOptions,
          }}
          onOpenChange={handleOpenChange}
          placement="bottomRight"
          arrow
          // trigger={['click']}
          open={isOpen}
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
