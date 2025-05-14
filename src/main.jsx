import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import { HelmetProvider } from "react-helmet-async";
import MenuPage from "./Components/Pages/Menu_Page/MenuPage.jsx";
import Order from "./Components/OrderPage/Order/Order.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <HelmetProvider>
      <Routes>
        <Route index element={<Home />} />

        <Route element={<MainLayout />}>
          <Route path="/menuPage" element={<MenuPage></MenuPage>} />
          <Route path="/orderPage" element={<Order></Order>} />
        </Route>
      </Routes>
    </HelmetProvider>
  </BrowserRouter>
);
