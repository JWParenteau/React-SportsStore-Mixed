import React from "react";

import SignupPage from "../../pages/SignupPage.js"
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
    currentPage: "products",
    selectedCategories: [],
  };

  handleNavigation = (event) => {
    this.setState({ currentPage: event.target.id });
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

  handleSubmit = (formValues) => {
    console.log("form submitted");
    this.setState({ currentPage: "products" });
  };

render () {
    return (
      <div className="container">
        <Header
        buttonText={getButtonText()}
        handleNavigation={this.handleNavigation}
        />
        {this.state.currentPage === 'products' ? (
          <>
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
          </>
        )  : ( <SignupPage handleSubmit={this.handleSubmit} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;