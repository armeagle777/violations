import { Switch, Table } from 'antd';
import React, { useState } from 'react';

import TableTitleRow from './TableTitleRow';

const DataTable = ({}) => {
  const columns =
    data?.length > 0
      ? Object.keys(data[0])
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

  return <></>;
};

export default DataTable;
