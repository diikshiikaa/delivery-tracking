import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Add this import
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DeliveriesProvider } from "./context/DeliveriesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DeliveriesProvider>
      <BrowserRouter>
        {" "}
        {/* Wrap your App component with BrowserRouter */}
        <App />
      </BrowserRouter>
    </DeliveriesProvider>
  </React.StrictMode>
);
