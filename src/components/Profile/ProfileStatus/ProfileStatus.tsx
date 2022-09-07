import React from 'react'

export type ProfileStatusPropsType = {
    status: string
}
type profileStateType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: profileStateType = {
        editMode: true,
    }
    activateEditMode() {
        this.setState({
            editMode: false
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: true
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus
                               onBlur={this.deactivateEditMode.bind(this)}
                               type="text"
                               value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }


}
