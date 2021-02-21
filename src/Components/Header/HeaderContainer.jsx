import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthThunkCreator, setLogoutThunkCreator} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthThunkCreator();
    }

    render() {
        return (
            <Header {...this.props}/>
        );

    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {setAuthThunkCreator, setLogoutThunkCreator})(HeaderContainer);