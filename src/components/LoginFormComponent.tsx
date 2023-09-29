import React from "react";

const LoginFormComponent = () => {
  return (
	<div className="d-flex w-100">
		<div className="container d-flex flex-column">
			<div className="row vh-100">
				<div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">

						<div className="text-center mt-4">
							<h1 className="h2">Welcome!</h1>
							<p className="lead">
								Login your account to continue
							</p>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="m-sm-3">
									<form>
										<div className="mb-3">
											<label className="form-label mb-3">Login Here</label>
											<input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
										</div>
										<div className="mb-3">
											<input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" />
										</div>
										<div>
											<div className="form-check align-items-center d-none">
												<input id="customControlInline" type="checkbox" className="form-check-input" value="remember-me" name="remember-me" checked />
												<label className="form-check-label text-small">Remember me</label>
											</div>
										</div>
										<div className="d-grid gap-2 mt-3">
											<a href="/" className="btn btn-lg btn-primary">Login</a>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="text-center mb-3">
							Code by <a target="_blank" href="https://abukafa.github.io/">hikam.abukafa</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default LoginFormComponent;