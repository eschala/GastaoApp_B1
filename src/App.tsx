
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css'
import { GastaoApp } from './App/GastaoApp';
import { BrowserRouter } from 'react-router-dom';

function App() {
  /*   const [count, setCount] = useState(0) */

  /*   const clickButton = () => {
      setCount(count + 1);
    }
   */
  return (
    <>
      <BrowserRouter>
        <GastaoApp />
      </BrowserRouter>
    </>
  )
}

export default App
