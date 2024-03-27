import React, { Component } from "react";
//COMPONENTS
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
// BOOTSTRAP AND CSS
import "../src/CommonResources/css/styles.css";
import "../src/CommonResources/css/bootstrap.css";
// //////////////////
import YouTube from "./Components/youtube/YouTube";
import MacPage from "./Components/pages/MacPage";
import Cart from "./Components/pages/Cart";
import Ipad from "./Components/pages/Ipad";
import Iphone from "./Components/pages/Iphone";
import Music from "./Components/pages/Music";
import Support from "./Components/pages/Support";
import Tv from "./Components/pages/Tv";
import Watch from "./Components/pages/Watch";
import Four04 from "./Components/pages/Four04";
// ////////
import { Route, Routes } from "react-router-dom";
//second pages ////
import ProductPage from "./Components/pages/SecondPages/ProductPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="mac" element={<MacPage />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<ProductPage />} />
          <Route path="Ipad" element={<Ipad />} />
          <Route path="Watch" element={<Watch />} />
          <Route path="Tv" element={<Tv />} />
          <Route path="Music" element={<Music />} />
          <Route path="Support" element={<Support />} />
          <Route path="*" element={<Four04 />} />
        </Routes>
        {/* <YouTube /> */}
        <Footer />
      </div>
    );
  }
}
export default App;
