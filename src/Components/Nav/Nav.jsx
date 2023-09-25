import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src="/images/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/donation">Donation</NavLink></li>
                    <li><NavLink to="/statistic">Statistics</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;