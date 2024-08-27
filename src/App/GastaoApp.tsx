/* GastaoApp.tsx  renderizada por App.tsx */
/*    <App>
        <BrowserRouter>
            <Layout></Layout>
        <BrowserRouter/>
      <App/>
 */
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./GastaoApp/2. Views/0. Layout/Layout";

export function GastaoApp() {
  return (
    <>
      <BrowserRouter >
        <Layout >
        </Layout>
      </BrowserRouter>

    </>
  );
}
