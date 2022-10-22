import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListingPage from './Components/ProductListingPage';
import ProductDetailPage from './Components/Product';

function App() {
  return (
    <>
    <Router>
       <Routes>
        <Route  path='/' element={<ProductListingPage/>}/>
        <Route  path='/product/:id' element={<ProductDetailPage/>}/>
       </Routes>
    </Router>
    </>
  );
}

export default App;
