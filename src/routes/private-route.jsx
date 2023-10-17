import {Route,useNavigate} from "react-router-dom"

import PropTypes from 'prop-types'

function PrivateRoute({element,...rest}){
    const user=localStorage.getItem('codeburguer:userData')
    const navigate = useNavigate();

    if(!user){
        navigate('/login')
    }
    return <Route {...rest} element={element}/>

}

export default PrivateRoute

PrivateRoute.propTypes={
    element:PropTypes.oneOfType([PropTypes.func,PropTypes.element])
}