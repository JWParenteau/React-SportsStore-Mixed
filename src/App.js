import Header from "./components/classComponents/Header.js"
import ProductCategories from "./components/classComponents/ProductCategories.js"
import ProductsList from "./components/ProductsList.js"
import Footer from "./components/Footer.js"


function App() {
  return (
  <div className="container">
    <Header />
    <ProductCategories />
    <ProductsList />
    <Footer />
  </div>
  );
}

export default App;