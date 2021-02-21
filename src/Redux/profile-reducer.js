import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    postData: [
        {id: 1, message: 'hi', likesCount: 1},
        {id: 2, message: 'How are you?', likesCount: 4},
        {id: 3, message: 'I am looking for a job', likesCount: 321},
        {id: 4, message: 'I got a job offer today!', likesCount: 1137}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.text,
                likesCount: 0
            };
            let stateCopy = {
                ...state,
                postData: [...state.postData, newPost],
            };
            return stateCopy;
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, text})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, message: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfileTC = (userId) => {
    return (dispatch) => {

        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatusTC = (userId) => {
    return (dispatch) => {

        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatusTC = (status) => {
    return (dispatch) => {

        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

        });
    }
}

export default profileReducer;