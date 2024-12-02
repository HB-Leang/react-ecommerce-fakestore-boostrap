import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";
import { CartContext } from "../contexts/CartContext";

function Header() {
  const [isSearchVisible, setSearchVisible] = useState(false); // State to manage visibility of the search input
  const { cart } = useContext(CartContext);
  const toggleSearch = () => {
    setSearchVisible((prevState) => !prevState); // Toggle visibility
  };

  const closeSearch = () => {
    setSearchVisible(false); // Hide the search input
  };
  return (
    <>
      {/*::header part start::*/}
      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand">
                  {" "}
                  <img src={logo} alt="logo" />{" "}
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="menu_icon">
                    <i className="fas fa-bars" />
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse main-menu-item"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/shop" className="nav-link">
                        Shop
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hearer_icon d-flex">
                  <a id="search_1" href="#">
                    <i className="ti-search" />
                  </a>
                  

                  <Link to="/cart" id="navbarDropdown3">
                    <i
                      className="fas fa-cart-plus"
                      style={{ position: "relative" }}
                    />
                    <span
                      style={{
                        zIndex: "999",
                        position: "absolute",
                        top: "24px",
                        right: "-8px",
                        borderRadius: "50%",
                        backgroundColor: "#f13d80",
                        width: "14px",
                        height: "14px",
                        lineHeight: "15px",
                        fontSize: "10px",
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      {cart.length}
                    </span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="search_input" id="search_input_box">
          <div className="container ">
            <form className="d-flex justify-content-between search-inner">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn" />
              <span
                className="ti-close"
                id="close_search"
                title="Close Search"
              />
            </form>
          </div>
        </div>
      </header>
      {/* Header part end*/}
    </>
  );
}

export default Header;
