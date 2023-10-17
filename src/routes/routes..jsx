import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../containers/Home"
import Login from "../containers/Login"
import Register from "../containers/Register"
import PrivateRoute from "./private-route";

function MyRoutes(){
    return (
        <Router>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Register/>}/>
            <PrivateRoute path="/" element={<Home/>}/>
        </Routes>
    </Router>
    ) 
}

export default MyRoutes