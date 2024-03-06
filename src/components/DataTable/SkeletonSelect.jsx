import { Select, Skeleton } from 'antd';
import { memo } from 'react';

const SkeletonSelect = ({ isLoading, onChange, options }) => {
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
    />
  );
};

export default memo(SkeletonSelect);
