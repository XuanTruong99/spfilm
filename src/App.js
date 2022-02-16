import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routed from "./config/Routed";

function App() {
  return (
    <div className="App">
      {/* <Route
        render={(props) => {
          <>
            <Header {...props} />
            <Routed />
            <Footer />
          </>;
        }}
      ></Route> */}
      {/* <Routed /> */}
      <Header />
      <Routed />
      <Footer />
    </div>
  );
}

export default App;
