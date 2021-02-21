import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import MessagesForm from "../Forms/MessagesForm";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name}
                                                                      id={dialog.id}
                                                                      key={dialog.id}
                                                                      avatar={dialog.avatar}/>);
    let messagesElements = props.messagesData.map(m => <Message message={m.message} key={m.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <MessagesForm addPost={props.sendMessage}/>

            </div>
        </div>
    );
}

export default Dialogs;