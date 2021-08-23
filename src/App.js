import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Footer />
    </div>
  );
}

export default App;
