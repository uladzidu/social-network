export type AppPropsType = {
    state : StatePropsType
}

export type PostDataType = {
    id: number
    postMessage: string
    likes: number
}

export type DialogDataType = {
    name: string
    id: number
}

export type MessagesDataType = {
    id: number
    message: string
}

export type StatePropsType = {
    profilePage: {
        postData: [
            {
                id: number
                postMessage: string
                likes: number
            },
        ]
    },
    messagesPage: {
        dialogsData: [
            { id: number, name: string }
        ],
        messagesData: [
            { id: number, message: string }
        ]
    }
}

let state= {
    profilePage: {
        postData: [
            {id: 1, postMessage: 'Hi, how are you', likes: 5},
            {id: 2, postMessage: 'It\'s my first post', likes: 15},
            {id: 3, postMessage: 'It\'s my second post', likes: 15},
            {id: 4, postMessage: 'It\'s my third post', likes: 15},
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Vlados'},
            {id: 2, name: 'Gyn'},
            {id: 3, name: 'Andr'},
            {id: 4, name: 'Taras'},
            {id: 5, name: 'Sanya Big Boss'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are u?'},
            {id: 3, message: 'Good Job!'},
        ]
    }
}

export default state;
