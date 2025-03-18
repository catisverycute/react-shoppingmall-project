import "./App.css";
import Router from "./router/Router";
import Nav from "./components/layout.tsx/Nav";
import Footer from "./components/layout.tsx/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <section className="drawer-content ">
        <Nav />
        <section className="main pt-16">
          <Router />
        </section>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
