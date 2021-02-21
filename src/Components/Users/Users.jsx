import React from 'react';
import s from './Users.module.css'
import ava from "../../assets/images/avatar.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>
                       {' ' + p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>

                <div className={s.user}>

                    <div className={s.avatar}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : ava}/>
                        </NavLink>
                    </div>
                    <div className={s.name}>{u.name}</div>
                    <div className={s.status}>status: {u.status}</div>
                    <div className={s.country}>country:</div>
                    <div className={s.city}>city:</div>

                </div>

                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                        props.unfollowThunkCreator(u.id);

                    }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                        props.followThunkCreator(u.id);

                    }}>Follow</button>}


            </div>)
        }
    </div>
}


export default Users;