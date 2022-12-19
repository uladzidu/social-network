import React from "react";
import { useAppDispatch } from "../../redux/redux-store";
import { getUsers } from "../../redux/selectors/users-selector";
import { getUsersTC } from "../../redux/users-reducer";

export const Friends = () => {
    const friendsArray: any = ["vasya", "petya"];
    const dispatch = useAppDispatch();

    const getFriendHandler = () => {
        dispatch(getUsersTC(1, 10));
    };

    return (
        <>
            <h1>Friends</h1>
            {friendsArray.map((friend: string) => (
                <li>{friend}</li>
            ))}
            <button onClick={getFriendHandler}>Get Friends</button>
        </>
    );
};
