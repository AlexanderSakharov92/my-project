import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
     followThunkCreator, getUsersThunkCreator,
     unfollowThunkCreator
} from '../../Redux/users-reducer';
import Preloader from '../../comon/Preloader';

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}

            <Users currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged} users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   followThunkCreator = {this.props.followThunkCreator}
                   unfollowThunkCreator = {this.props.unfollowThunkCreator} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



const UsersContainer = connect(mapStateToProps, {
     getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
})(UsersContainerAPI);
export default UsersContainer;