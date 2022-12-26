import './App.css';
import {ContextProvider} from "./context/context";
import {Routes, Route} from "react-router-dom";
import Register from './pages/register/register';
import Login from "./pages/login/login";
import Homepage from "./pages/homepage/homepage";
import Order_success_dialogbox from './components/order-success/order-success';
function App() {

  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route exact path='/' element={ <Login />}/>
          <Route path='/register' element={ <Register />}/>
          <Route path='/homepage' element={ <Homepage />}/>
        </Routes>
        </ContextProvider>
      </div>
   )
}

export default App
