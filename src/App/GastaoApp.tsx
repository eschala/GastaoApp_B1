/* GastaoApp.tsx  renderizada por App.tsx */
/*    <App>
        <BrowserRouter>
            <Layout></Layout>
        <BrowserRouter/>
      <App/>
 */
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter } from "react-router-dom";

import Layout from "./GastaoApp/2. Views/0. Layout/Layout";
import { darkTheme } from './GastaoApp/1. Models/Themes/Themes';

export function GastaoApp() {
  return (
    <>
      <BrowserRouter >
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Layout >
          </Layout>
        </ThemeProvider>
      </BrowserRouter>

    </>
  );
}
