import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { BrowserView } from 'react-device-detect';
import { getShops } from '../../api/serverApi';
import Alert from '../../components/alert/Alert';

const Violations = () => {
  const { data, isLoading, isFetching, isError, error } = useQuery(['shops'], () => getShops(), {
    keepPreviousData: true,
  });

  if (isError) {
    return <Alert type="error" message={error.message} />;
  }

  return (
    <>
      <BrowserView>
        <Outlet />
      </BrowserView>
    </>
  );
};
export default Violations;
