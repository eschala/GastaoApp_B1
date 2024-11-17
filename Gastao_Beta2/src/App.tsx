import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import Borrador2 from './Components/Views/Borrador/Borrador2.tsx';
import { darkTheme } from './Components/Styles/ModeTheme.tsx';

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>

        <Borrador2 />
      </ThemeProvider>
    </>
  )
}

export default App
