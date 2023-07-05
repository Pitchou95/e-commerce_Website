import { NavbarLogin } from "./Components/Utility/NavbarLogin";
import { HomePage } from "./Pages/Home/HomePage";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Footer from "./Components/Utility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import Register from "./Pages/Auth/Register";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrand from "./Pages/brands/AllBrandPage";

function App() {
  return (
    <div className="font">
    <NavbarLogin />
      <BrowserRouter>
          <Routes>
                <Route index element={<HomePage />}  />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register /> } />
                <Route path="allcategory" element={ <AllCategoryPage /> } />
                <Route path="allbrand" element={ <AllBrand /> } />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App ;
