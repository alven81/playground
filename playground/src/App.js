import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import "./App.scss";
import React from "react";
import Category from "./pages/category/Category";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

class App extends React.Component {
	render() {
		return (
			<>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Category />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<PageNotFound />} />
					</Route>
				</Routes>
			</>
		);
	}
}

export default App;
