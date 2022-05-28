import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import './App.scss';
import React from "react";
import Category from "./pages/category/Category";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/product/Product";

class App extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Category />} />
                        <Route path="/product/:id" element={<Product />} />
                        {/* <Route state={this.state} exact path="product/:id" render={(props) => <Product {...props} state={this.state} />} /> */}
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default App;
