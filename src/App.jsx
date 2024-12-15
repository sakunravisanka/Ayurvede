import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar"; // Import your NavigationBar
import Hero from "./components/Hero";
// import Service from "./components/Service";
import AboutProduct from "./components/AboutProduct";
import About from "./components/About";
// import Feature from "./components/Feature";
import Products from "./pages/Products";
import ProductSection from "./components/ProductSection";
import WhereProduct from "./components/WhereProduct";
import Footer from "./components/Footer";
import Ayurvedicproducts from "./components/Ayurvedicproducts";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <Service /> */}
              <About />
              <ProductSection />
              <AboutProduct />
              <Ayurvedicproducts />
              <WhereProduct />
              {/* <Feature /> */}
              <Footer />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// update now
