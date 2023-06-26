import React from "react";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import Lounge from "./Components/Lounge/Lounge";
import Travelers from "./Components/Travelers/Travelers";
import Subscribe from "./Components/Subscribers/Subscribers";
import Footer from "./Components/Footer/Footer";
// import "./main.scss";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Search></Search>
      <Support></Support>
      <Info></Info>
      <Lounge></Lounge>
      <Travelers></Travelers>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  )
}

export default App