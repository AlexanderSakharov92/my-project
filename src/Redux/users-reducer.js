import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;

                })
            };

        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {

                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;

                })
            };

        }
        case SET_USERS: {

            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {

            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_FETCHING: {

            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {

            return {
                ...state,
                followingInProgress:
                    action.data.followingInProgress
                        ? [...state.followingInProgress, action.data.userId]
                        : state.followingInProgress.filter(id => id !== action.data.userId)
            }
        }
        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    data: {followingInProgress, userId}
});


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount / 100));
        });
    }
}
export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        followAPI.deleteFollow(id).then(data => {
            dispatch(toggleFollowingProgress(false, id));
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }
        });

    }
}
export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        followAPI.postFollow(id).then(data => {
            dispatch(toggleFollowingProgress(false, id));
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
        });

    }
}
export default usersReducer;