import React from "react";
import facelogo from "../assets/images/face_logo.png";
import "../App.css";
import { NavLink } from "react-router-dom";
export const Profile = () => {
	return (
		<div className="container">
			<div className="py-1 text-center">
				<img
					className="d-block mx-auto mb-2"
					src={facelogo}
					width="300"
					height="300"
				/>
				<h2>Ficha Cliente</h2>
				<p className="lead">
					Los datos introducidos en tu ficha, solo serán almacenados y cifrados
					para facilitarte el uso personal de la aplicación gracias al
					reconocimiento facial. Estos datos no serán cedidos ni compartidos, a
					ningúna persona o entidad externa al presente.
				</p>
			</div>

			<div className="row justify-content-center">
				<div className="col-md-7 col-lg-8">
					<h4 className="mb-3">Datos Personales</h4>
					<form className="needs-validation" novalidate>
						<div className="row g-3">
							<div className="col-sm-6">
								<label htmlFor="firstName" className="form-label">
									Nombre
								</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									placeholder=""
									value=""
									required
								/>
								<div className="invalid-feedback">
									Se requiere un nombre válido.
								</div>
							</div>

							<div className="col-sm-6">
								<label htmlFor="lastName" className="form-label">
									Apellidos
								</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									placeholder=""
									value=""
									required
								/>
								<div className="invalid-feedback">
									Se requiere un apellido válido.
								</div>
							</div>

							<div className="col-12">
								<label htmlFor="username" className="form-label">
									Usuario
								</label>
								<div className="input-group has-validation">
									<span className="input-group-text">@</span>
									<input
										type="text"
										className="form-control"
										id="username"
										placeholder="Username"
										required
									/>
									<div className="invalid-feedback">
										Se requiere un Usuario.
									</div>
								</div>
							</div>

							<div className="col-12">
								<label htmlFor="email" className="form-label">
									Email
									<span className="text-body-secondary"> (Opcional)</span>
								</label>
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="tu@ejemplo.com"
								/>
								<div className="invalid-feedback">
									Si lo desea ingrese una dirección de correo electrónico válida
									para recibir novedades.
								</div>
							</div>

							<div className="col-12">
								<label htmlFor="address" className="form-label">
									Dirección
								</label>
								<input
									type="text"
									className="form-control"
									id="address"
									placeholder="Olleria Kalea, Nº4 - 5A"
									required
								/>
								<div className="invalid-feedback">
									Por favor introduzca su direccion de envio.
								</div>
							</div>

							<div className="col-12">
								<label htmlFor="address2" className="form-label">
									Segunda dirección
									<span className="text-body-secondary"> (Opcional)</span>
								</label>
								<input
									type="text"
									className="form-control"
									id="address2"
									placeholder="Apartment or suite"
								/>
							</div>

							<div className="col-md-5">
								<label htmlFor="country" className="form-label">
									País
								</label>
								<select className="form-select" id="country" required>
									<option value="">España</option>
								</select>
								<div className="invalid-feedback">
									Por favor proporcione un país.
								</div>
							</div>

							<div className="col-md-4">
								<label htmlFor="state" className="form-label">
									Provincia
								</label>
								<select className="form-select" id="state" required>
									<option value="">Bizkaia</option>
									<option>Gasteiz</option>
									<option>Gipuzkoa</option>
								</select>
								<div className="invalid-feedback">
									Por favor proporcione una provincia.
								</div>
							</div>

							<div className="col-md-3">
								<label htmlFor="zip" className="form-label">
									Código postal
								</label>
								<input
									type="text"
									className="form-control"
									id="zip"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">
									Se requiere un Código Postal.
								</div>
							</div>
						</div>

						<hr className="my-4" />

						<div className="form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="same-address"
							/>
							<label className="form-check-label" htmlFor="same-address">
								La dirección de envío es la misma que mi dirección de
								facturación.
							</label>
						</div>

						<hr className="my-4" />

						<h4 className="mb-3">Payment</h4>

						<div className="my-3">
							<div className="form-check">
								<input
									id="credit"
									name="paymentMethod"
									type="radio"
									className="form-check-input"
									checked
									required
								/>
								<label className="form-check-label" htmlFor="credit">
									Tarjeta de Credito
								</label>
							</div>
							<div className="form-check">
								<input
									id="debit"
									name="paymentMethod"
									type="radio"
									className="form-check-input"
									required
								/>
								<label className="form-check-label" htmlFor="debit">
									Tarjeta de Debito
								</label>
							</div>
							<div className="form-check">
								<input
									id="paypal"
									name="paymentMethod"
									type="radio"
									className="form-check-input"
									required
								/>
								<label className="form-check-label" htmlFor="paypal">
									PayPal
								</label>
							</div>
						</div>

						<div className="row gy-3">
							<div className="col-md-6">
								<label htmlFor="cc-name" className="form-label">
									Nombre en la tarjeta
								</label>
								<input
									type="text"
									className="form-control"
									id="cc-name"
									placeholder=""
									required
								/>
								<small className="text-body-secondary">
									Nombre completo como se muestra en la tarjeta.
								</small>
								<div className="invalid-feedback">
									Se requiere el nombre en la tarjeta
								</div>
							</div>

							<div className="col-md-6">
								<label htmlFor="cc-number" className="form-label">
									Numero de la tarjeta de crédito
								</label>
								<input
									type="text"
									className="form-control"
									id="cc-number"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">
									Se requiere un numero de tarjeta de crédito
								</div>
							</div>

							<div className="col-md-3">
								<label htmlFor="cc-expiration" className="form-label">
									Expiración
								</label>
								<input
									type="text"
									className="form-control"
									id="cc-expiration"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">
									Se requiere la fecha de expiración
								</div>
							</div>

							<div className="col-md-3">
								<label htmlFor="cc-cvv" className="form-label">
									CVV
								</label>
								<input
									type="text"
									className="form-control"
									id="cc-cvv"
									placeholder=""
									required
								/>
								<div className="invalid-feedback">
									Se requiere el código de seguridad.
								</div>
							</div>
						</div>

						<hr className="my-4" />
						<div className="row">
							<NavLink
								className="col-6 nav-link d-flex align-items-center gap-2 active"
								aria-current="page"
								to="/panel"
							>
								<button className="w-50 mt-2 btn btn-secondary btn-lg">
									Cancelar
								</button>
							</NavLink>
							<button
								to="/panel"
								className="col w-100 btn btn-primary btn-lg"
								type="submit"
							>
								Actualizar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Profile;
