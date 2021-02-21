import React from 'react';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div >
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatusTC}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
export default Profile;