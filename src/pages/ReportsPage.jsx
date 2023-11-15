import React from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { NavLink } from "react-router-dom";
import { pedidos } from "../bbdd.json";
export const ReportsPage = () => {
	return (
		<div className="container-fluid h-100">
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
					<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
						<div className="table-responsive small">
							<h2 className="h2">TRIMESTRE ANTERIOR</h2>
							<table className="table table-striped table-sm">
								<thead>
									<tr>
										<th>Pedido</th>
										<th>Cliente</th>
										<th>Articulos</th>
										<th>Cantidad</th>
										<th>Fecha</th>
										<th>Metodo</th>
										<th>Estado</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{pedidos.map((pedido) => (
										<tr key={pedido.id}>
											<td>{pedido.id}</td>
											<td>{pedido.cliente_id}</td>
											<td>{pedido.articulos.articulos_id}</td>
											<td>{pedido.articulos.cantidad}</td>
											<td>{pedido.fecha}</td>
											<td>{pedido.metodo_pago_id}</td>
											<td>{pedido.estado_pago}</td>
											<td>{pedido.total}€</td>
										</tr>
									))}

									<hr />
									<tr>
										<td colSpan="7">Total sin IVA:</td>
										<td colSpan="5">
											{pedidos.reduce(
												(totalSinIva, pedido) =>
													totalSinIva + pedido.total - pedido.iva,
												0,
											)}
											€
										</td>
									</tr>
									<tr>
										<td colSpan="7">Total IVA:</td>
										<td colSpan="5">
											{pedidos.reduce(
												(totalIva, pedido) => totalIva + pedido.iva,
												0,
											)}
											€
										</td>
									</tr>
									<tr>
										<td colSpan="7">Total:</td>
										<td colSpan="5">
											{pedidos.reduce(
												(totalSinIva, pedido) => totalSinIva + pedido.total,
												0,
											)}
											€
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="table-responsive small">
							<h2 className="h2">SEMESTRE ANTERIOR</h2>
							<table className="table table-striped table-sm">
								<thead>
									<tr>
										<th>Pedido</th>
										<th>Cliente</th>
										<th>Articulos</th>
										<th>Cantidad</th>
										<th>Fecha</th>
										<th>Metodo</th>
										<th>Estado</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{pedidos.map((pedido) => (
										<tr key={pedido.id}>
											<td>{pedido.id}</td>
											<td>{pedido.cliente_id}</td>
											<td>{pedido.articulos.articulos_id}</td>
											<td>{pedido.articulos.cantidad}</td>
											<td>{pedido.fecha}</td>
											<td>{pedido.metodo_pago_id}</td>
											<td>{pedido.estado_pago}</td>
											<td>{pedido.total}€</td>
										</tr>
									))}

									<hr />
									<tr>
										<td colSpan="7">Total sin IVA:</td>
										<td colSpan="5">
											{pedidos.reduce(
												(totalSinIva, pedido) =>
													totalSinIva + pedido.total - pedido.iva,
												0,
											)}
											€
										</td>
									</tr>
									<tr>
										<td colSpan="7">Total IVA:</td>
										<td colSpan="5">
											{pedidos.reduce(
												(totalIva, pedido) => totalIva + pedido.iva,
												0,
											)}
											€
										</td>
									</tr>
									<tr>
										<td colSpan="7">Total:</td>
										<td colSpan="5">
											{pedidos.reduce(
												(totalSinIva, pedido) => totalSinIva + pedido.total,
												0,
											)}
											€
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="table-responsive small">
							<h2 className="h2">AÑO ANTERIOR</h2>
							<table className="table table-striped table-sm">
								<thead>
									<tr>
										<th>Pedido</th>
										<th>Cliente</th>
										<th>Articulos</th>
										<th>Cantidad</th>
										<th>Fecha</th>
										<th>Metodo</th>
										<th>Estado</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{pedidos.map((pedido) => (
										<tr key={pedido.id}>
											<td>{pedido.id}</td>
											<td>{pedido.cliente_id}</td>
											<td>{pedido.articulos.articulos_id}</td>
											<td>{pedido.articulos.cantidad}</td>
											<td>{pedido.fecha}</td>
											<td>{pedido.metodo_pago_id}</td>
											<td>{pedido.estado_pago}</td>
											<td>{pedido.total}€</td>
										</tr>
									))}

									<hr />
									<tr>
										<td colSpan="7">Total sin IVA:</td>
										<td colSpan="5">
											{pedidos.reduce(
												(totalSinIva, pedido) =>
													totalSinIva + pedido.total - pedido.iva,
												0,
											)}
											€
										</td>
									</tr>
									<tr>
										<td colSpan="7">Total IVA:</td>
										<td colSpan="5">
											{pedidos.reduce(
												(totalIva, pedido) => totalIva + pedido.iva,
												0,
											)}
											€
										</td>
									</tr>
									<tr>
										<td colSpan="7">Total:</td>
										<td colSpan="5">
											{pedidos.reduce(
												(totalSinIva, pedido) => totalSinIva + pedido.total,
												0,
											)}
											€
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<h1 className="h2">Últimas Ventas</h1>
					<div className="table-responsive small">
						<table className="table table-striped table-sm">
							<thead>
								<tr>
									<th>Pedido</th>
									<th>Cliente</th>
									<th>Articulos</th>
									<th>Cantidad</th>
									<th>Fecha</th>
									<th>Metodo</th>
									<th>Estado</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{pedidos.map((pedido) => (
									<tr key={pedido.id}>
										<td>{pedido.id}</td>
										<td>{pedido.cliente_id}</td>
										<td>{pedido.articulos.articulos_id}</td>
										<td>{pedido.articulos.cantidad}</td>
										<td>{pedido.fecha}</td>
										<td>{pedido.metodo_pago_id}</td>
										<td>{pedido.estado_pago}</td>
										<td>{pedido.total}€</td>
									</tr>
								))}

								<hr />
								<tr>
									<td colSpan="7">Total sin IVA:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalSinIva, pedido) =>
												totalSinIva + pedido.total - pedido.iva,
											0,
										)}
										€
									</td>
								</tr>
								<tr>
									<td colSpan="7">Total IVA:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalIva, pedido) => totalIva + pedido.iva,
											0,
										)}
										€
									</td>
								</tr>
								<tr>
									<td colSpan="7">Total:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalSinIva, pedido) => totalSinIva + pedido.total,
											0,
										)}
										€
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<h2>Trimestral</h2>
					<div className="table-responsive small">
						<table className="table table-striped table-sm">
							<thead>
								<tr>
									<th>Pedido</th>
									<th>Cliente</th>
									<th>Articulos</th>
									<th>Cantidad</th>
									<th>Fecha</th>
									<th>Metodo</th>
									<th>Estado</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{pedidos.map((pedido) => (
									<tr key={pedido.id}>
										<td>{pedido.id}</td>
										<td>{pedido.cliente_id}</td>
										<td>{pedido.articulos.articulos_id}</td>
										<td>{pedido.articulos.cantidad}</td>
										<td>{pedido.fecha}</td>
										<td>{pedido.metodo_pago_id}</td>
										<td>{pedido.estado_pago}</td>
										<td>{pedido.total}€</td>
									</tr>
								))}

								<hr />
								<tr>
									<td colSpan="7">Total sin IVA:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalSinIva, pedido) =>
												totalSinIva + pedido.total - pedido.iva,
											0,
										)}
										€
									</td>
								</tr>
								<tr>
									<td colSpan="7">Total IVA:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalIva, pedido) => totalIva + pedido.iva,
											0,
										)}
										€
									</td>
								</tr>
								<tr>
									<td colSpan="7">Total:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalSinIva, pedido) => totalSinIva + pedido.total,
											0,
										)}
										€
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<h2>Semestral</h2>
					<div className="table-responsive small">
						<table className="table table-striped table-sm">
							<thead>
								<tr>
									<th>Pedido</th>
									<th>Cliente</th>
									<th>Articulos</th>
									<th>Cantidad</th>
									<th>Fecha</th>
									<th>Metodo</th>
									<th>Estado</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{pedidos.map((pedido) => (
									<tr key={pedido.id}>
										<td>{pedido.id}</td>
										<td>{pedido.cliente_id}</td>
										<td>{pedido.articulos.articulos_id}</td>
										<td>{pedido.articulos.cantidad}</td>
										<td>{pedido.fecha}</td>
										<td>{pedido.metodo_pago_id}</td>
										<td>{pedido.estado_pago}</td>
										<td>{pedido.total}€</td>
									</tr>
								))}

								<hr />
								<tr>
									<td colSpan="7">Total sin IVA:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalSinIva, pedido) =>
												totalSinIva + pedido.total - pedido.iva,
											0,
										)}
										€
									</td>
								</tr>
								<tr>
									<td colSpan="7">Total IVA:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalIva, pedido) => totalIva + pedido.iva,
											0,
										)}
										€
									</td>
								</tr>
								<tr>
									<td colSpan="7">Total:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalSinIva, pedido) => totalSinIva + pedido.total,
											0,
										)}
										€
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<h2>Anual</h2>
					<div className="table-responsive small">
						<table className="table table-striped table-sm">
							<thead>
								<tr>
									<th>Pedido</th>
									<th>Cliente</th>
									<th>Articulos</th>
									<th>Cantidad</th>
									<th>Fecha</th>
									<th>Metodo</th>
									<th>Estado</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{pedidos.map((pedido) => (
									<tr key={pedido.id}>
										<td>{pedido.id}</td>
										<td>{pedido.cliente_id}</td>
										<td>{pedido.articulos.articulos_id}</td>
										<td>{pedido.articulos.cantidad}</td>
										<td>{pedido.fecha}</td>
										<td>{pedido.metodo_pago_id}</td>
										<td>{pedido.estado_pago}</td>
										<td>{pedido.total}€</td>
									</tr>
								))}

								<hr />
								<tr>
									<td colSpan="7">Total sin IVA:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalSinIva, pedido) =>
												totalSinIva + pedido.total - pedido.iva,
											0,
										)}
										€
									</td>
								</tr>
								<tr>
									<td colSpan="7">Total IVA:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalIva, pedido) => totalIva + pedido.iva,
											0,
										)}
										€
									</td>
								</tr>
								<tr>
									<td colSpan="7">Total:</td>
									<td colSpan="5">
										{pedidos.reduce(
											(totalSinIva, pedido) => totalSinIva + pedido.total,
											0,
										)}
										€
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</main>
			</div>
		</div>
	);
};
export default ReportsPage;
