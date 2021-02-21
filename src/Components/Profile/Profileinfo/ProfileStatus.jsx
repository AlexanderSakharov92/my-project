import React from 'react';
import {Field, Form, Formik} from "formik";


/*const ProfileStatus = (props) => {

    return (
        <Formik initialValues={{
            editMode: false,
            status: props.status}}
                onSubmit={(values, actions) => {
                    props.updateStatus(values.status)
                    actions.resetForm()
                }}
                activateEditMode={(values, actions) => {
                    debugger
                    actions.setValues({editMode: true})
                }}
        >
            {({values}, {actions}) => (
                <Form>
                    {values.editMode
                        ? <Field name='status' type='status'  />
                        : <span onDoubleClick={actions.setV}>{props.status || '___'}</span>
                    }
                </Form>)}
        </Formik>
    )


}*/


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidMount() {

    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '___'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;