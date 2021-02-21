import {authAPI} from "../api/api";
import {toggleFetching} from "./users-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGOUT = 'SET_LOGOUT';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false,
    isLoginSuccess: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        case SET_LOGIN_DATA: {
            return {...state, ...action.data}
        }
        case SET_LOGIN_SUCCESS: {
            return {...state, isLoginSuccess: true}
        }
        case SET_LOGOUT: {
            return {...state, isAuth: false}
        }
        default:
            return state;
    }
}

export const setLogaut = () => ({type: SET_LOGOUT})
export const setLoginSucces = () => ({type: SET_LOGIN_SUCCESS})
export const setLoginData = (email, password, rememberMe) => ({type: SET_LOGIN_DATA, data: {email, password, rememberMe}})
export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

export const setAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}}
export const setLoginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(toggleFetching())
        authAPI.loginn(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {

                dispatch(setAuthThunkCreator());
                dispatch(setLoginSucces());

            }
            dispatch(toggleFetching())
        });
}}
export const setLogoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setLogaut());
            }
        });
}}

export default authReducer;