import React from "react";

export type ProfileStatusPropsType = {
  status: string | any;
  updateStatus: any;
};
type profileStateType = {
  editMode: boolean;
  status: any;
};

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state: profileStateType = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e: any) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    console.log("profile status render");
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              type="text"
              value={this.state.status}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.state.status || "no status"}</span>
          </div>
        )}
      </div>
    );
  }
}
