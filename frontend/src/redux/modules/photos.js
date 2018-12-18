// imports

// actions 

// action creators

// api actions 
function getFeed() {
    return (dispatch, getState) => {
        const { user: { token }} = getState();
        fetch("/images/", {
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    };
}


// initial state 
const initialState = {
    
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}
// reducer functions 

// exports 
const actionCreators = {
    getFeed
};

export { actionCreators };

// export reducer
export default reducer;