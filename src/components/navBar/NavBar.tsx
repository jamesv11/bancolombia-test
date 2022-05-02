import { NavLink } from "react-router-dom";

import { publicRoute } from "../../app/routes";
import { AppTitle } from "../common/AppTitle";



export const NavBar = () => {


    return (
        <>
            <div className="bg-white flex justify-center sticky top-0">
                <div className="container px-4 py-3 flex flex-wrap justify-between">
                    <AppTitle
                        className={
                            "text-3xl sm:text-4xl font-extrabold text-dark-500 tracking-tight dark:text-gray-200"
                        }
                    />
                    <ul className="flex gap-3 items-center">
                        {publicRoute.map(({ to, name }) => {
                            return <li>
                                <NavLink to={to}>
                                    <span className="text-base font-semibold ">{name}</span>
                                </NavLink>
                            </li>

                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};
