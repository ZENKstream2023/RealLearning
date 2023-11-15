import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { NavLink } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facelogo from "../src/assets/images/face_logo.png";
const SearchApp = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<header>
					<div className="px-3 py-2 text-bg-dark border-bottom">
						<div className="container">
							<div
								id="menu"
								className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
							>
								<NavLink
									to="/"
									id="logo"
									className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
								>
									<img src={facelogo} />
									<h2>
										Real<b>Learning</b>
									</h2>
								</NavLink>

								<ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
									<li>
										<NavLink to="contact" className="nav-link text-white">
											<svg
												className="bi d-block mx-auto mb-1"
												width="24"
												height="24"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-chat-left-dots"
													viewBox="0 0 16 16"
												>
													<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
													<path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
												</svg>
											</svg>
											Contact
										</NavLink>
									</li>
									<li>
										<NavLink to="login" className="nav-link text-white">
											<svg
												className="bi d-block mx-auto mb-1"
												width="24"
												height="24"
											></svg>
											Acceder
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</header>
				<App />
				<footer className="container py-5">
					<div className="row">
						<div className="col-12 col-md">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="d-block mb-2"
								role="img"
								viewBox="0 0 24 24"
							>
								<title>Product</title>
								<circle cx="12" cy="12" r="10" />
								<path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
							</svg>
							<small className="d-block mb-3 text-body-secondary">
								&copy; Portafolio de React por Aritz Robledo Jorge
							</small>
						</div>

						<div className="col-6 col-md">
							<h5>Contact</h5>
							<ul className="list-unstyled text-small">
								<li>
									<p className="link-secondary text-decoration-none">
										+34 634 412 771
									</p>
								</li>
								<li>
									<p className="link-secondary text-decoration-none">
										webseobilbao@gmail.com
									</p>
								</li>
							</ul>
						</div>
						<div className="col-6 col-md">
							<h5>Origin</h5>
							<ul className="list-unstyled text-small">
								<li>
									<p className="link-secondary text-decoration-none">
										Zaldibar, 48250 Bizkaia, Basque Country, Spain
									</p>
								</li>
							</ul>
						</div>
					</div>
				</footer>
			</BrowserRouter>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(<SearchApp />);
