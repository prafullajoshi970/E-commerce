import Login from './component/Login'
import Home from './component/Home'
import Product from './component/Product'
import Cart from './component/Cart'
import Contact from './component/Cantact'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={ <Login></Login>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route  path='/Product/:category' element={ <Product></Product>}></Route>
        <Route  path='/Cart' element={ <Cart></Cart>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
