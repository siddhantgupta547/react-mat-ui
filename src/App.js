import Pages from './components/pages';
import Notes from './components/notes';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
// import { green, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e676',
    },
    secondary: {
      main: '#eeeeee',
      light: '#757575',
      dark: '#9e9e9e',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Pages />}>
            <Route path="/:id" element={<Notes />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
