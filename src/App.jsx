import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import MiPrimerComponente from "@components/MiPrimerComponente";
import NotFoundPage from "@pages/NotFoundPage";
import HomePage from "@pages/HomePage";
import Login from "./pages/Login";
import Recognition from "./pages/Recognition";
import DashBoard from "@pages/DashBoard";
import ReportsPage from "@pages/ReportsPage";
import Profile from "@pages/Profile";
import Services from "@pages/Services";
import Contact from "./pages/Contact";
import EditContact from "./components/EditForm";
import Memberships from "./pages/Memberships";
import Clients from "./pages/Clients";
function App() {
	return (
		<Routes>
			{/* Definir la ruta de la página de inicio */}
			<Route exact path="/" element={<HomePage />} />
			{/* Otras rutas */}
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/recognition" element={<Recognition />} />
			<Route exact path="/panel" element={<DashBoard />} />
			<Route exact path="/informes" element={<ReportsPage />} />
			<Route exact path="/profile" element={<Profile />} />
			<Route exact path="/services" element={<Services />} />
			<Route exact path="/memberships" element={<Memberships />} />
			<Route exact path="/clients" element={<Clients />} />
			<Route exact path="/contact" element={<Contact />} />
			<Route exact path="/contact/edit/:id" element={<EditContact />} />
			{/*<Route path="/contact/search/:search" element={<Search />} />
			<Route
				path="/redirect/:search"
				element={(props) => {
					var search = props.match.params.search;
					return <Redirect to={"/contact/search/" + search} />;
				}}
			/>*/}
			{/* Ruta por defecto en caso de que ninguna coincida */}
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
