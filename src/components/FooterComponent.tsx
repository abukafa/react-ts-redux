import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row text-muted">
                <div className="col-6 text-start">
                    <p className="mb-0">
                        <a className="text-muted" href="https://abukafa.github.io/">
                            <strong>Abukafa</strong> - Fullstack Developer &copy;
                        </a>
                    </p>
                </div>
                <div className="col-6 text-end">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="text-muted" href="/my">Support & Help Center</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default FooterComponent;