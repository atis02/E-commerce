import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Product from './Pages/Products/Product'
import Register from "./Pages/Register/Register";
import Contacts from "./Pages/Contacts/Contacts";
import Navbar from "./Components/Navbar";
import ShoppingCard from "./Components/ShoppingCard";
import { Container } from "@mui/material";
import NotFound from "./Components/NotFound";

function App() {

  return (
        
    <Container  >
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shopping-card" element={<ShoppingCard />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
