import React from 'react';

import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, getStatusTC, updateStatusTC} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13365;
        }
        this.props.getProfileTC(userId);
        this.props.getStatusTC(userId)
    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile} /*status={this.props.status}*//>

        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


export default compose(
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);