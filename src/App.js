import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals"; // Home Page or Meals page
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Footer from "./components/Layout/Footer";
import Menu from "./components/Layout/Menu"; // Menu Page
import Offer from "./components/Layout/Offer"; // Offer Page
import Reward from "./components/Layout/Reward"; // Reward Page

function App() {
  const [cartIsActive, setCartIsActive] = useState(false);

  const showCartHandler = () => {
    setCartIsActive(true);
  };
  const hideCartHandler = () => {
    setCartIsActive(false);
  };

  return (
    <CartProvider>
      <Router>
        {cartIsActive && <Cart hideCartHandler={hideCartHandler} />}
        <Header showCartHandler={showCartHandler} />
        <main>
          <Routes>
            <Route path="/" element={<Meals />} /> {/* Home or Meals Page */}
            <Route path="/menu" element={<Menu />} /> {/* Menu Page */}
            <Route path="/offer" element={<Offer />} /> {/* Offer Page */}
            <Route path="/reward" element={<Reward />} /> {/* Reward Page */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;  