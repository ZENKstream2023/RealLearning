import React from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { NavLink } from "react-router-dom";
export const Services = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
					<div
						className="offcanvas-md offcanvas-end bg-body-tertiary"
						tabIndex="-1"
						id="sidebarMenu"
						aria-labelledby="sidebarMenuLabel"
					>
						<div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark ">
							<svg className="bi pe-none me-2" width="40" height="32">
								<use xlinkHref="#bootstrap" />
							</svg>
							<span className="fs-4">Usuario 01</span>
							<hr />
							<ul className="nav nav-pills flex-column mb-auto">
								<li>
									<NavLink
										className="nav-link text-white d-flex align-items-center gap-2"
										to="/panel"
									>
										<svg className="bi">
											<use xlinkHref="#speedometer2" />
										</svg>
										Resumen
									</NavLink>
								</li>
								<li>
									<NavLink
										className="nav-link text-white d-flex align-items-center gap-2"
										to="/informes"
									>
										<svg className="bi">
											<use xlinkHref="#graph-up" />
										</svg>
										Informes
									</NavLink>
								</li>
								<li>
									<NavLink
										className="nav-link text-white d-flex align-items-center gap-2"
										to="/services"
									>
										<svg className="bi pe-none me-2" width="16" height="16">
											<use xlinkHref="#grid" />
										</svg>
										Servicios
									</NavLink>
								</li>
								<li>
									<NavLink
										className="nav-link text-white d-flex align-items-center gap-2"
										to="/clients"
									>
										<svg className="bi pe-none me-2" width="16" height="16">
											<use xlinkHref="#people-circle" />
										</svg>
										Clientes
									</NavLink>
								</li>
							</ul>
							<hr />
							<Dropdown>
								<Dropdown.Toggle
									href="#"
									className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img
										src="https://github.com/mdo.png"
										alt=""
										width="32"
										height="32"
										className="rounded-circle me-2"
									/>
									<strong>Aritz Robledo Jorge</strong>
								</Dropdown.Toggle>
								<Dropdown.Menu className="dropdown-menu dropdown-menu-dark text-small shadow">
									<Dropdown.Item>
										<NavLink className="dropdown-item" to="/memberships">
											Subscripción
										</NavLink>
									</Dropdown.Item>
									<Dropdown.Item>
										<NavLink className="dropdown-item" to="/settings">
											Configuración
										</NavLink>
									</Dropdown.Item>
									<Dropdown.Item>
										<NavLink className="dropdown-item" to="/profile">
											Perfil
										</NavLink>
									</Dropdown.Item>
									<Dropdown.Item>
										<hr className="dropdown-divider" />
									</Dropdown.Item>
									<Dropdown.Item>
										<NavLink className="dropdown-item" to="/">
											Cerrar Sesión
										</NavLink>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
				</div>

				<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
					<div className="row row-cols-1 row-cols-md-3 mt-5 mb-3 text-center">
						<div className="col">
							<div className="card mb-4 rounded-3 shadow-sm">
								<div className="card-header py-3">
									<h4 className="my-0 fw-normal">Free</h4>
								</div>
								<div className="card-body">
									<h1 className="card-title pricing-card-title">
										$0
										<small className="text-body-secondary fw-light">/mo</small>
									</h1>
									<ul className="list-unstyled mt-3 mb-4">
										<li>10 users included</li>
										<li>2 GB of storage</li>
										<li>Email support</li>
										<li>Help center access</li>
									</ul>
									<button
										type="button"
										className="w-100 btn btn-lg btn-outline-primary"
									>
										Agregar
									</button>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card mb-4 rounded-3 shadow-sm">
								<div className="card-header py-3">
									<h4 className="my-0 fw-normal">Pro</h4>
								</div>
								<div className="card-body">
									<h1 className="card-title pricing-card-title">
										$15
										<small className="text-body-secondary fw-light">/mo</small>
									</h1>
									<ul className="list-unstyled mt-3 mb-4">
										<li>20 users included</li>
										<li>10 GB of storage</li>
										<li>Priority email support</li>
										<li>Help center access</li>
									</ul>
									<button
										type="button"
										className="w-100 btn btn-lg btn-primary"
									>
										Agregar
									</button>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card mb-4 rounded-3 shadow-sm border-primary">
								<div className="card-header py-3 text-bg-primary border-primary">
									<h4 className="my-0 fw-normal">Enterprise</h4>
								</div>
								<div className="card-body">
									<h1 className="card-title pricing-card-title">
										$29
										<small className="text-body-secondary fw-light">/mo</small>
									</h1>
									<ul className="list-unstyled mt-3 mb-4">
										<li>30 users included</li>
										<li>15 GB of storage</li>
										<li>Phone and email support</li>
										<li>Help center access</li>
									</ul>
									<button
										type="button"
										className="w-100 btn btn-lg btn-primary"
									>
										Agregar
									</button>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};
export default Services;
