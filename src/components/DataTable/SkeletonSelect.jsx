import { Select, Skeleton } from 'antd';
import { memo } from 'react';

const SkeletonSelect = ({ isLoading, onChange, options, selectedValues }) => {
  return isLoading ? (
    <Skeleton.Input active block={true} />
  ) : (
    <Select
      mode="multiple"
      allowClear
      style={{
        flex: 1,
      }}
      placeholder="Ընտրեք երկիրը"
      onChange={onChange}
      options={options}
      value={selectedValues?.map((el) => +el) || []}
    />
  );
};

export default memo(SkeletonSelect);
