

const initState = {
    initialized: false
}

export const appReducer = (state: any = initState, action: any): any => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized : true
            }
        default :
            return state
    }
}

export const initializedSuccessAC = () => {
    return {
        type : "INITIALIZED-SUCCESS"
    }
}

export const initializeTC = () => (dispatch : any) => {

}