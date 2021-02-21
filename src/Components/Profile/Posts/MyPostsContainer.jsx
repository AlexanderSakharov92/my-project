import React from 'react';
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText

    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;