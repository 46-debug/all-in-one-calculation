import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Calculator from "./Calculator";
import Bmi from './Bmi';
import Counter from './Counter';
import Discount from './Discount';
import Emi from './Emi';
import Age from './Age';

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/bmi calculator" element={<Bmi />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/emi" element={<Emi />} />
          <Route path="/age calculator" element={<Age />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;