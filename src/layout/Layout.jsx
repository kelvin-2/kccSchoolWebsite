import { Outlet } from 'react-router-dom';
import Navbar from "../componets/NavBar";

const Layout = () => {
   return (
    <div>
        <div>
            <Navbar />
        </div>
        <main>
            <Outlet />
        </main>
    </div>
   )
}

export default Layout;