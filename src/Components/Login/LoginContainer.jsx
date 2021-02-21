import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import { setLoginThunkCreator} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import Preloader from "../../comon/Preloader";

class LoginContainer extends React.Component {
    componentDidMount() {
       /* this.props.setLoginThunkCreator();*/
    }

    render() {

        if (this.props.isAuth && !this.props.isFetching) {
            return (
                <Redirect to = {'/profile'}/>
                )
        }
        else{return (<Login {...this.props}/>)}

    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    isLoginSuccess: state.auth.isLoginSuccess,
    isFetching: state.usersPage.isFetching
})
export default connect(mapStateToProps, {setLoginThunkCreator})(LoginContainer);