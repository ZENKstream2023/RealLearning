import React from "react";
import "@/App.css";
import facial from "../assets/images/facial.mp4";
import facelogo from "../assets/images/face_logo.png";
import {  useNavigate } from "react-router-dom";

// NEW MODEL
import axios from "axios";

export const Login = () => {
	const navigate = useNavigate();
	const handleSignInClick = async () => {
		try {
			console.log("Inicio de sesión haciendo clic");
			const email = document.getElementById("floatingInput").value;
			const password = document.getElementById("floatingPassword").value;
			console.log("Email:", email);
			console.log("Password:", password);
			const response = await axios.post(
				"http://localhost:3900/login",
				{ email, password },
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			const { success, token } = response.data;

			if (success) {
				// Guardar el token en el almacenamiento local o en el estado de la aplicación
				localStorage.setItem("token", token);

				// Redirigir o realizar acciones adicionales según sea necesario
				navigate("/recognition");
			} else {
				// Manejar error de autenticación
				console.log("Credenciales inválidas");
			}
		} catch (error) {
			console.error("Error general en la solicitud:", error);
			if (error.response) {
				// El servidor respondió con un código de estado fuera del rango 2xx
				console.error("Respuesta del servidor con error:", error.response.data);
			} else if (error.request) {
				// La solicitud se hizo pero no se recibió respuesta
				console.error("No se recibió respuesta del servidor");
			} else {
				// Algo más salió mal
				console.error("Error al hacer la solicitud:", error.message);
			}
		}
	};

	const currentYear = new Date().getFullYear();

	return (
		<>
			<div className="video-container position-relative">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="fullscreen-video  position-absolute"
					src={facial}
				/>
				<div className="form-signin d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
					<form>
						<div className="text-center text-light mb-5 ">
							<img src={facelogo} />
							<h1>
								Real<b>Learning</b>
							</h1>
						</div>
						<div className="form-floating mb-4">
							<input
								type="email"
								className="form-control"
								id="floatingInput"
								placeholder="name@example.com"
							/>
							<label htmlFor="floatingInput">Email</label>
						</div>
						<div className="form-floating mb-2">
							<input
								type="password"
								className="form-control"
								id="floatingPassword"
								placeholder="Password"
							/>
							<label htmlFor="floatingPassword">Password</label>
						</div>

						<div className="form-check text-start my-3">
							<input
								className="form-check-input"
								type="checkbox"
								value="remember-me"
								id="flexCheckDefault"
							/>
							<label
								className="form-check-label text-light"
								htmlFor="flexCheckDefault"
							>
								Remember me
							</label>
						</div>
						<button
							onClick={handleSignInClick}
							className="btn btn-primary w-100 py-2"
							type="submit"
						>
							Sign In
						</button>
						<p className="mt-5 mb-3 text-light">
							&copy;RealLearning 2020–{currentYear}
						</p>
					</form>
				</div>
			</div>
		</>
	);
};
export default Login;
