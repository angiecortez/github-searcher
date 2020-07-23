import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Global from '../../utils/global_style';
import theme from '../../utils/theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global />

      {children}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
