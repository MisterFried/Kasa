import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/error-page";
import Hosting from "./pages/hosting.tsx";

import "./styles/styles.scss";
import About from "./pages/about";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";

// Render
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/hosting/:id" element={<Hosting />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
