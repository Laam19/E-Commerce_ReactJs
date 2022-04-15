import Home from "../../Pages/Home";
import { Anounchments } from "../Anounchments";
import { Navbar } from "../Navbar";

export const Layout = () => {
    return (
        <div>
            <Anounchments/>
            <Navbar/>
        </div>
    );
}