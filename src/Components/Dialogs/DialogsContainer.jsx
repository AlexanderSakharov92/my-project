import React from 'react';
import {addMessageCreator, updateNewMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMessage: state.dialogsPage.newMessage,
        messagesData: state.dialogsPage.messagesData
    }


}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(addMessageCreator(text))
        }
    }


}





export default compose (
   /* withAuthRedirect,*/
    connect(mapStateToProps,mapDispatchToProps)) (Dialogs);