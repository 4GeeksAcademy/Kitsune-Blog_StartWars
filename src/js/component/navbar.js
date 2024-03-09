 
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../img/starwarslogo.png";
import { Context } from "../store/appContext";
import { BiSolidTrashAlt } from "react-icons/bi";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const handleRemoveFavorite = (navFavorita) => {
        actions.removeFavorite(navFavorita);
    };

    return (
        <nav className="navbar navbar-light bg-light " style={{ paddingRight: "80px", paddingLeft: "80px" }} >
            <Link to="/">
                <img src={Logo} style={{ marginLeft: "25px", width: "90px" }} />
            </Link>

            <div className="dropdown  ml-auto   pe-5">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">FAVORITOS
                    <span className="addfav">{store.itemsClikeados.length}  </span>
                </button>

                <ul className="dropdown-menu">
                    {store.itemsClikeados.length === 0 ? (
                        <li>
                            <span className="dropdown-item"> empty </span>
                        </li>
                    ) : (
                        store.itemsClikeados.map((navFavorita, index) => (
                            <li key={index}>
                                <span className="dropdown-item">
                                    {navFavorita} <BiSolidTrashAlt onClick={() => handleRemoveFavorite(navFavorita)} />
                                </span>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};