import React from "react";
import { BookingQueryProvider } from "./components/context/BookingQueryContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.js";

// pages
import Booking from "./components/pages/Booking";
import Flights from "./components/pages/Flights";
import Packages from "./components/pages/Packages";

import ItemListContainer from "./components/item-list-container/ItemListContainer";
import ItemDetailContainer from "./components/item-detail-container/ItemDetailContainer";

import "./App.css";

function App() {
  // la logica del Cart con sus componentes CartWidgetProvider y Cart (y sus respectivas funciones) fueron removidas del proyecto por no ser funcionales para un ecommerce de turismo

  return (
    <BookingQueryProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/*<Route exact path="/login" element={<></>} />  Pending */}
          {/*<Route exact path="/*" element={<></>} />  Pending */}
          <Route exact path="/" element={<Booking />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/flights" element={<Flights />} />
          <Route exact path="/packages" element={<Packages />} />
          <Route exact path="/booking/items" element={<ItemListContainer />} />
          <Route exact path="/booking/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BookingQueryProvider>
  );
}

export default App;
