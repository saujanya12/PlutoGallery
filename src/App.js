import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import './App.css';
import Content from './component/Content';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Monospace"', 'Lucida Console'].join(',')
  },
});

function App() {
  
  return (
    <div className="App">
      <Grid container  >

        <Grid item xs={12}>
        <ThemeProvider theme={theme}>
            <Content/>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
