import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/error-page";
import Hosting from "./pages/hosting.tsx";

// Global Styles
import "./styles/styles.scss";
import About from "./pages/about";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/hosting/:id" element={<Hosting />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</>
	);
}
