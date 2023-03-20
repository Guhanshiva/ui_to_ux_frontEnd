import logo from "./logo.svg";
import "./App.css";
import Header_navbar from "./components/header/header navbar/header.navbar";
import Header_searchbar from "./components/header/header Searchbar/headerSearchbar";
import Header_dropmenu from "./components/header/header Dropmenu/headerDropmenu";
import Image_carousel from "./components/imageCarousel/imageCarousel";
import Product_branding from "./components/ProductsBranding/productBranding";
import Featured_product from "./components/FeaturedProducts/featuredproduct";
import Featured_productlist from "./components/FeaturedProductsList/featuredProductlist";
import Image_banner from "./components/ImageBanner/imageBanner";
import Product from "./components/products/product";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Header_navbar />
      <Header_searchbar />
      <Header_dropmenu />
      <Image_carousel />
      <Product_branding />
      <Featured_product />
      <Featured_productlist />
      <Image_banner />
      <Product />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
