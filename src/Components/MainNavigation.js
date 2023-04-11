import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

const MainNavigation = () => {

    // const className = ({isActive})=> isActive ? classes.active : undefined ;

    return <>
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                            to={"/"} 
                            // className={className}
                            className={({isActive})=> isActive ? classes.active : undefined}
                            end
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/products"}
                            // className={className}
                            className={({isActive})=> isActive ? classes.active : undefined}
                        >Products</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    </>
}

export default MainNavigation;