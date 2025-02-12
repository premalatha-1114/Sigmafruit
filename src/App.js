import './App.css';
import '@fontsource/manrope';

import HeaderTop from './Component/Headers/HeaderTop';
import Header from './Component/Headers/Header';
import Banner from './Component/HomeBanner/Banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import Aboutus from './Component/HomeBanner/Aboutus';
import Engage from './Component/HomeBanner/Engage';
import Connect from './Component/HomeBanner/Connect';
import Farmerscorner from './Component/Farmerscorner/Farmerscorner';
import Ourproduce from './Component/Ourproduce/Ourproduce';
import Farmvisit from './Component/Farmvisit/Farmvisit';
import Workshop from './Component/Workshop/Workshop';
import Farmcafe from './Component/Farmcafe/Farmcafe';
import Patnerwithus from './Component/Patnerwithus/Patnerwithus';
import Careers from './Component/Careers/Careers';
import Contactus from './Component/Contactus/Contactus';

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <Header /> 
      <Banner />
      <Routes>
        <Route path='/#' element={<Aboutus/>}></Route>
        <Route path='/#' element={<Engage/>}></Route>
        <Route path='/#' element={<Connect/>}></Route>
        <Route path='/blog' element={<Farmerscorner/>}></Route>
        <Route path='/our-produce' element={<Ourproduce/>}></Route>
        <Route path='/farm-visit' element={<Farmvisit/>}></Route>
        <Route path='/workshops' element={<Workshop/>}></Route>
        <Route path='/farm-cafe' element={<Farmcafe/>}></Route>
        <Route path='/partner-with-us' element={<Patnerwithus/>}></Route>
        <Route path='/careers' element={<Careers/>}></Route>
        <Route path='/contact-us' element={<Contactus/>}></Route>
      </Routes>
       </div>
  );
}

export default App;
