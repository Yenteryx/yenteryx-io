import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import 'fontsource-roboto'

import '../styles/globals.css'
import '../styles/layout.css'

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#7fcd91'
    },
    secondary:{
      main:'#5b5656'
    }
  }
});


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp