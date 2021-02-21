import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";

const App = (props) => {
    return (
        <div className='app_wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />}/>
                <Route path='/Users' render={() => <UsersContainer store={props.store} />}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
            </div>
        </div>

    );
}

export default App;




