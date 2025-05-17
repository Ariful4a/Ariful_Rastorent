import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import { HelmetProvider } from "react-helmet-async";
import MenuPage from "./Components/Pages/Menu_Page/MenuPage.jsx";
import Order from "./Components/OrderPage/Order/Order.jsx";
import MainCrop from "./Components/Pages/CropDetails/MainCrop.jsx";
import MainPest from "./Components/Pages/PestControl/MainPest.jsx";
import ContactSection from "./Components/Pages/Contact/Contact.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <HelmetProvider>
      <Routes>
        <Route index element={<Home />} />

        <Route element={<MainLayout />}>
          <Route path="/menuPage" element={<MenuPage></MenuPage>} />
          <Route path="/orderPage" element={<Order></Order>} />
          <Route path="/MainCrop" element={<MainCrop></MainCrop>} />
          <Route path="/MainPestControl" element={<MainPest></MainPest>} />
          <Route path="/Contact" element={<ContactSection></ContactSection>} />
        </Route>
      </Routes>
    </HelmetProvider>
  </BrowserRouter>
);
