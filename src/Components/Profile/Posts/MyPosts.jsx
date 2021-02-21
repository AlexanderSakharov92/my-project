import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import MessagesForm from "../../Forms/MessagesForm";



const MyPosts = (props) => {

    let PostElements = props.postData.map(p => <Post message={p.message} likeCounts ={p.likesCount}/>);



    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>

            <MessagesForm addPost={props.addPost}/>
            <div>
                {PostElements}
            </div>
        </div>
    )
}


export default MyPosts;