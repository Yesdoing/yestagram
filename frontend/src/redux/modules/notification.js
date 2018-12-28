// import 


// actions 
const SET_NOTIFICATION_LIST = "SET_NOTIFICATION_LIST";

// action creators 
const setNotificationList = (notificationList) => {
    return {
        type: SET_NOTIFICATION_LIST,
        notificationList
    };
};

// API actions
const getNotification = () => {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch('/notifications/', {
            headers: {
                "Authorization": `JWT ${token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(json => {
            dispatch(setNotificationList(json));
        });
    };
};

// initial state 
const initialState = {}

// reducer 
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NOTIFICATION_LIST:
            return applySetNotificationList(state, action);
        default:
            return state;
    }
}

// reduce functions 
const applySetNotificationList = (state, action) => {
    const { notificationList } = action;
    return {
        ...state,
        notificationList
    };
};

// exports 
const actionCreators = {
    getNotification,
};

export { actionCreators };

// reducer export 
export default reducer;