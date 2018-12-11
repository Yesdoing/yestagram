// imports

// actions

// action creators

// initiail state 
const initiailState = {
    isLoggedIn: localStorage.getItem('jwt') || false 
};

// reducer
function reducer(state = initiailState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

// reducer funtions 

// exports 

// reducer export 

export default reducer;