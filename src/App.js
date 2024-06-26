import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authenticaton from "./routes/authentication/authentication.component";
import Shop from './routes/shop/shop.component.jsx';
import Checkout from "./routes/checkout/checkout.component.jsx";


 
const App = ()=> {
  return(
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={ <Home />}/> 
      <Route path="shop/*" element={<Shop />}/>
      <Route path="auth" element={<Authenticaton />}/>
      <Route path="checkout" element={<Checkout />}/>
     </Route>
  </Routes>
  );
}
 

export default App;
