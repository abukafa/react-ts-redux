import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import SidebarComponent from "./components/SidebarComponent"
import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"
import DashboardContainer from "./containers/DashboardContainer";
import LoginContainer from "./containers/LoginContainer";
import CategoriesContainer from "./containers/CategoriesContainer";
import ProductsContainer from "./containers/ProductsContainer";
import VariantsContainer from "./containers/VariantsContainer";
import TransactionsContainer from "./containers/TransactionsContainer";
import StoreContainer from "./containers/StoreContainer";
import ProfileContainer from "./containers/ProfileContainer";
import MyContainer from "./containers/MyContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
            <SidebarComponent />
            <div className="main">
                <NavbarComponent />
                  <Routes>
                    <Route path="/" element={<DashboardContainer />} />
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/home" element={<HomeContainer />} />
                    <Route path="/categories" element={<CategoriesContainer />} />
                    <Route path="/products" element={<ProductsContainer />} />
                    <Route path="/variants" element={<VariantsContainer />} />
                    <Route path="/transactions" element={<TransactionsContainer />} />
                    <Route path="/store" element={<StoreContainer />} />
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route path="/my" element={<MyContainer />} />
                  </Routes>
                <FooterComponent />
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
