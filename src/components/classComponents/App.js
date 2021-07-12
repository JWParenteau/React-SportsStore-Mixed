import React from "react";
import Header from "./Header.js";
import ProductCategories from "./ProductCategories.js";
import ProductsList from "../ProductsList.js";
import Footer from "../Footer.js";
import products from "../../data/products.json";

function getButtonText() {
  return Math.random() > 0.5 ? "Sign up" : "Create an account";
}

class App extends React.Component {
  state = {
    selectedCategories: [],
  };

  handleSelectCategory = (event) => {
    const category = event.target.id;
  console.log(`Event of type ${event.type} caused by ${category}`);

  let selectedCategories;
  if (this.state.selectedCategories.includes(category)) {
    selectedCategories = this.state.selectedCategories.filter((selectedCategory) => selectedCategory !== category);
  } else {
    selectedCategories = [...this.state.selectedCategories, category];
  }
  this.setState({ selectedCategories });
  };


render () {
    return (
    <div className="container">
      <Header buttonText={getButtonText()} />
      <ProductCategories
       selectedCategories={this.state.selectedCategories}
       handleSelectCategory={this.handleSelectCategory}
      />
      <ProductsList
      products={products.filter(
        (product) =>
        this.state.selectedCategories.includes(product.category) ||
        !this.state.selectedCategories.length
        )}
      />
      <Footer />
    </div>
    );
  }
}

export default App;