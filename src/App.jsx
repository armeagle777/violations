import { ConfigProvider, theme } from 'antd';
import { AuthProvider } from 'react-auth-kit';

import { useTheme } from '@/store/ThemeContext';
import { AppRouter } from '@/components';
import { Loader } from './components';

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;

  const { isDarkMode } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <AuthProvider authType={'localstorage'} authName={'_auth'}>
        <AppRouter />
        {/* <Loader /> */}
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
