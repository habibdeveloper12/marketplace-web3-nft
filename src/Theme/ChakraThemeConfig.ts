import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/oswald';
import '@fontsource/raleway';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/300.css';
import { buttonStyle as Button } from './componentStyles/buttonStyle';
import { containerStyle as Container } from './componentStyles/containerStyle';
import { linkStyle as Link } from './componentStyles/linkStyle';
import { tabStyle as Tabs } from './componentStyles/tabStyle';
import { textStyle as Text } from './componentStyles/textStyle';
import { headingStyle as Heading } from './componentStyles/headingStyle';

export const theme = extendTheme({
  colors: {
    appMainColor: '#091320',
    primary: '#258CEC',
    secondry: '#6943FF',
    primaryWhite: '#FFFFFF',
    colorPrimaryDark: '#112135',
    navbarColorPrimary: '#2C344434',
    navbarColorSecondary: '#0B1D34',
    'blue-50': '#1DB4F4',
    'blue-100': '#1386F0',
    'blue-150': '#1673FF',
    'orange-50': '#FF9900'
  },
  components: {
    Button,
    Container,
    Link,
    Tabs,
    Text,
    Heading
  },
  breakpoints: {
    xsm: '575px',
    sm: '480px',
    md: '768px',
    lg: '991px',
    xl: '1280px',
    xxl: '1440px',
    xxxl: '1660px'
  },
  fonts: {
    dinFonts: `"D-DIN", sans-serif`,
    body: `"Poppins", sans-serif;`,
    raleway: `"Raleway", sans-serif;`,
    rajdhaniFont: `"Rajdhani", sans-serif;`
  }
});
