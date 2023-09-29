import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Sliders, Award, ShoppingCart, ShoppingBag, Tag, Inbox } from 'react-feather';
import 'simplebar/dist/simplebar.min.css';
import SimpleBar from 'simplebar';

const SidebarComponent = () => {
    const [activeItem, setActiveItem] = useState("");
    const handleItemClick = (itemName: any) => {
      setActiveItem(itemName);
    };

    useEffect(() => {
        initialize();

        // Fungsi inisialisasi
        function initialize() {
            initializeSimplebar();
            initializeSidebarCollapse();
        }

        // Fungsi inisialisasi SimpleBar
        function initializeSimplebar() {
            const simplebarElement = document.querySelector<HTMLElement>('.js-simplebar');

            if (simplebarElement) {
            const simplebarInstance = new SimpleBar(simplebarElement);

            // Recalculate SimpleBar saat dropdown sidebar ditampilkan/sembunyikan
            const sidebarDropdowns = document.querySelectorAll('.js-sidebar [data-bs-parent]');

            sidebarDropdowns.forEach((link) => {
                link.addEventListener('shown.bs.collapse', () => {
                simplebarInstance.recalculate();
                });
                link.addEventListener('hidden.bs.collapse', () => {
                simplebarInstance.recalculate();
                });
            });
            }
        }

        // Fungsi inisialisasi Sidebar Collapse
        function initializeSidebarCollapse() {
            const sidebarElement = document.querySelector<HTMLElement>('.js-sidebar');
            const sidebarToggleElement = document.querySelector<HTMLElement>('.js-sidebar-toggle');

            if (sidebarElement && sidebarToggleElement) {
            sidebarToggleElement.addEventListener('click', () => {
                sidebarElement.classList.toggle('collapsed');

                sidebarElement.addEventListener('transitionend', () => {
                window.dispatchEvent(new Event('resize'));
                });
            });
            }
        }
    }, []);

    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="/home">
                    <span className="align-middle">MyShop</span>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Administrator
                    </li>

                    <li className={`sidebar-item ${activeItem === '' ? 'active' : ''}`}>
                        <Link to="/" onClick={() => handleItemClick('')}>
                            <a className="sidebar-link">
                                <i className="align-middle"></i><Sliders size={18} />
                                <span className="align-middle">Dashboard</span>
                            </a>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${activeItem === 'categories' ? 'active' : ''}`}>
                        <Link to="/categories" onClick={() => handleItemClick('categories')}>
                            <a className="sidebar-link">
                                <i className="align-middle"></i><Award size={18} />
                                <span className="align-middle">Categories</span>
                            </a>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${activeItem === 'products' ? 'active' : ''}`}>
                        <Link to="/products" onClick={() => handleItemClick('products')}>
                            <a className="sidebar-link">
                                <i className="align-middle"></i><Inbox size={18} /><span className="align-middle">Products</span>
                            </a>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${activeItem === 'variants' ? 'active' : ''}`}>
                        <Link to="/variants" onClick={() => handleItemClick('variants')}>
                            <a className="sidebar-link">
                                <i className="align-middle"></i><Tag size={18} /><span className="align-middle">Variants</span>
                            </a>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${activeItem === 'transactions' ? 'active' : ''}`}>
                        <Link to="/transactions" onClick={() => handleItemClick('transactions')}>
                            <a className="sidebar-link">
                                <i className="align-middle"></i><ShoppingBag size={18} /><span className="align-middle">Transactions</span>
                            </a>
                        </Link>
                    </li>

                    <li className="sidebar-header">
                        Customer
                    </li>

                    <li className={`sidebar-item ${activeItem === 'store' ? 'active' : ''}`}>
                        <Link to="/store" onClick={() => handleItemClick('store')}>
                            <a className="sidebar-link">
                                <i className="align-middle"></i><ShoppingCart size={18} /><span className="align-middle">Store</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SidebarComponent;