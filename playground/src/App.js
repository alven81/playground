import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import './App.scss';
import React from "react";
import Category from "./pages/category/Category";
import PageNotFound from "./pages/PageNotFound";

class App extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Category />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default App;
