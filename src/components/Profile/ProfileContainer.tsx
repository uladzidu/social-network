import React from "react";
// import { connect } from "react-redux";
// import { getUserProfileTC, getUserStatusTC, updateUserStatusTC } from "../../redux/profile-reducer";
// import { compose, Dispatch } from "redux";
// import { AppStateType } from "../../redux/redux-store";
// import { withRouter } from "../../hoc/WithRouter";
//
// export type mapStateToPropsType = {
//     profile: any;
//     status: string | any;
//     userId: number | null;
// };
// export type mapDispatchToPropsType = {
//     getUserProfileThunk: (userId: number | null) => void;
//     getUserStatusThunk: (userId: number | null) => void;
//     updateUserStatusThunk: (status: string) => void;
// };
//
// type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;
//
// class ProfileClassContainer extends React.Component<ProfileContainerPropsType> {
//     componentDidMount() {
//         // @ts-ignore
//         let userId: number | null = this.props.router.params.userId;
//         if (!userId) {
//             userId = this.props.userId;
//         }
//         this.props.getUserProfileThunk(userId);
//         this.props.getUserStatusThunk(userId);
//     }
//     render() {
//         return (
//             <div></div>
//             // <Profile
//             //     {...this.props}
//             //     profile={this.props.profile}
//             //     status={this.props.status}
//             //     updateStatus={this.props.updateUserStatusThunk}
//             // />
//         );
//     }
// }
//
// const mapStateToProps = (state: AppStateType) => {
//     // return {
//     //     // profile: state.profilePage.profile,
//     //     // status: state.profilePage.status,
//     //     // userId: state.auth.userId,
//     // };
// };
// const mapDispatchToProps = (dispatch: Dispatch | any): mapDispatchToPropsType => {
//     return {
//         getUserProfileThunk: (userId: number | null) => {
//             dispatch(getUserProfileTC(userId));
//         },
//         getUserStatusThunk: (userId: number | null) => {
//             dispatch(getUserStatusTC(userId));
//         },
//         updateUserStatusThunk: (status: string) => {
//             dispatch(updateUserStatusTC(status));
//         },
//     };
// };
//
// export default compose<React.ComponentType>(
//     connect(mapStateToProps, mapDispatchToProps),
//     withRouter
//     // WithAuthRedirect
// )(ProfileClassContainer);
