

import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductDetailsPage from "./components/product_page/ProductDetailsPage"
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/ProductDetails" element={<ProductDetailsPage />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;