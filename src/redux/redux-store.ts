import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { sidebarReducer } from "./sidebar-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { appReducer } from "./app-reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { loginReducer } from "./login-reducer";

export type AppStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  login: loginReducer,
  app: appReducer,
});

export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootReducerType = ReturnType<typeof rootReducer>;
type ActionType = any;

export type AppDispatch = ThunkDispatch<RootReducerType, unknown, ActionType>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootReducerType> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootReducerType,
  unknown,
  AnyAction
>;

// @ts-ignore
window.store = store;
