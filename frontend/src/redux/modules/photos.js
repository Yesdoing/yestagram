// imports
import { actionCreators as userActions} from 'redux/modules/user';

// actions 
const SET_FEED = "SET_FEED";
// action creators
const setFeed = (feed) => ({
    type: SET_FEED,
    feed
});

// api actions 
function getFeed() {
    return (dispatch, getState) => {
        const { user: { token }} = getState();
        fetch("/images/", {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if(response.status === 401) {
                dispatch(userActions.logout());
            } else return response.json();
        })
        .then(json => dispatch(setFeed(json)));
    };
}


// initial state 
const initialState = {
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEED:
            return applySetFeed(state, action);
        default:
            return state;
    }
}
// reducer functions 
const applySetFeed = (state, action) => {
    const { feed } = action;
    return {
        ...state,
        feed
    };
}

// exports 
const actionCreators = {
    getFeed
};

export { actionCreators };

// export reducer
export default reducer;