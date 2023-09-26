import { NavLink } from "react-router-dom";

const Nav = () => {
    return (

        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src="/images/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="flex gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >Home</NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >Donation</NavLink>
                    <NavLink
                        to="/statistic"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >Statistics</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Nav;