// imports
import { actionCreators as notiActions} from 'redux/modules/notification';

// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_USER_LIST = "SET_USER_LIST";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_IMAGE_LIST = "SET_IMAGE_LIST";
const SET_USER_INFO = "SET_USER_INFO";
const SET_PROFILE = "SET_PROFILE";

// action creators


function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    }
}

function logout() {
    return {
        type: LOGOUT
    };
}

const setUserList = (userList) => {
    return {
        type: SET_USER_LIST,
        userList
    };
};

const setFollowUser = (userId) => {
    return {
        type: FOLLOW_USER,
        userId
    };
}

const setUnFollowUser = (userId) => {
    return {
        type: UNFOLLOW_USER,
        userId
    };
}


const setImageList = (imageList) => ({
    type: SET_IMAGE_LIST,
    imageList
});

const setUserInfo = (userInfo) => ({
    type: SET_USER_INFO,
    userInfo
});

const setProfile = (userProfile) => ({
    type: SET_PROFILE,
    userProfile
});

// API actions

function facebookLogin(access_token) {
  return dispatch => {
    fetch("/users/login/facebook", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    })
      .then(response => response.json())
      .then(json => {
          if(json.token) {
              dispatch(saveToken(json.token));
          }
      })
      .catch(err => console.log(err));
  };
}

const usernameLogin = (username, password) => dispatch => 
fetch("/rest-auth/login/", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        username,
        password
    })
}).then(response => response.json())
.then(json => {
    if(json.token) {
        dispatch(saveToken(json.token));
    }
})
.catch(err => console.log(err));

const createAccount = (username, password, email, name) => (dispatch) => {
    fetch("/rest-auth/registration/", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username,
            password1: password,
            password2: password,
            email,
            name
        })
    })
    .then(response => response.json())
    .then(json => {
        if(json.token) {
            dispatch(saveToken(json.token))
        }
    })
    .catch(err => console.log(err));
}

const getPhotoLikes = (photoId) => {
    return (dispatch, getState) => {
        const { user: {token}} = getState();
        fetch(`/images/${photoId}/likes`, {
            headers: {
                Authorization: `JWT ${token}`,
                "Content-type": "application/json"
            }
        }).then(response => {
            if(response.status === 401) {
                dispatch(logout());
            }
            return response.json();
        }).then(json => {
            dispatch(setUserList(json));
        });
    };
};

const getExplore = () => {
    return (dispatch, getState) => {
        const { user: {token}} = getState();
        fetch(`/users/explore`, {
            headers: {
                Authorization: `JWT ${token}`,
            }
        }).then(response => {
            if(response.status === 401) {
                dispatch(logout());
            }
            return response.json();
        }).then(json => {
            dispatch(setUserList(json));
        });
    };
}

const followUser = (userId) => {
    return (dispatch, getState) => {
        const { user: {token} } = getState();
        dispatch(setFollowUser(userId));
        dispatch(notiActions.changeNotiListFollow(userId));
        fetch(`/users/${userId}/follow`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
            }
        }).then(response => {
            if(response.state === 401) {
                dispatch(logout());
            } else if(!response.ok) {
                dispatch(setUnFollowUser(userId));
                dispatch(notiActions.changeNotiListFollow(userId));
            }
        });
    };
};

const UnFollowUser = (userId) => {
    return (dispatch, getState) => {
        const { user: {token} } = getState();
        dispatch(setUnFollowUser(userId));
        dispatch(notiActions.changeNotiListFollow(userId));
        fetch(`/users/${userId}/unfollow`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
            }
        }).then(response => {
            if(response.state === 401) {
                dispatch(logout());
            } else if(!response.ok) {
                dispatch(setFollowUser(userId));
                dispatch(notiActions.changeNotiListFollow(userId));
            }
        });
    }
};

const searchByTerm = searchTerm => {
    return async (dispatch, getState) => {
        const { user: { token } } = getState();
        const userList = await searchUsers(token, searchTerm);
        const imageList = await searchImage(token, searchTerm);

        if(userList === 401 || imageList === 401 ) {
            dispatch(logout());
        }
        dispatch(setUserList(userList));
        dispatch(setImageList(imageList));
    }
}

const searchUsers = (token, searchTerm) => fetch(
    `/users/search?username=${searchTerm}`, {
        headers: {
            Authorization: `JWT ${token}`,
        }
    }).then(response => {
        if(response.status === 401) {
            return 401;
        }
        return response.json();
    }).then(json => json);

const searchImage = (token, searchTerm) => fetch(
    `/images/search?hashtags=${searchTerm}`, {
        headers: {
            Authorization: `JWT ${token}`,
        }
    }).then(response => {
        if(response.status === 401) {
            return 401;
        }
        return response.json();
    }).then(json => json);


const getProfile = (username) => {
    return (dispatch, getState) => {
        const { user: {token}} = getState();

        fetch(`/users/${username}`, {
            headers: {
                Authorization: `JWT ${token}`,        
                "Content-Type": 'application/json'
            }
        }).then(response => {
            if(response.status === 401) dispatch(logout());
            return response.json()
        })
        .then(json => dispatch(setProfile(json)));
    };
}

const getUserInfo = () => {
    return (dispatch, getState) => {
        const { user: { token } } = getState();

        fetch(`/users/userinfo`, {
            headers: {
                Authorization: `JWT ${token}`,
            }
        }).then(response => response.json())
        .then(json => dispatch(setUserInfo(json)));
    };
};

const getFollowingList = (username) => {
    return (dispatch, getState) => {
        const { user: { token } } = getState();

        fetch(`/users/${username}/following`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then( response => response.json())
        .then(json => dispatch(setUserList(json)));
    };
};

const getFollowersList = (username) => {
    return (dispatch, getState) => {
        const { user: { token } } = getState();

        fetch(`/users/${username}/followers`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then( response => response.json())
        .then(json => dispatch(setUserList(json)));
    };
};

// initiail state
const initiailState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};


// reducer
function reducer(state = initiailState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
        return applySetToken(state, action);
    case LOGOUT:
        return applyLogout(state, action);
    case SET_USER_LIST:
        return applySetUserList(state, action);
    case FOLLOW_USER:
        return applyFollowUser(state, action);
    case UNFOLLOW_USER:
        return applyUnFollowUser(state, action);
    case SET_IMAGE_LIST:
        return applySetImageList(state, action);
    case SET_USER_INFO:
        return applySetUserInfo(state, action);
    case SET_PROFILE:
        return applySetProfile(state, action);
    default:
      return state;
  }
}

// reducer funtions

function applySetToken(state, action) {
    const { token } = action;
    localStorage.setItem("jwt", token);
    return {
        ...state,
        isLoggedIn: true,
        token
    }
}


function applyLogout(state, action) {
    localStorage.removeItem("jwt");
    return {
        isLoggedIn: false
    };
}

const applySetUserList = (state, action) => {
    const { userList } = action;
    return {
        ...state,
        userList
    };
};

const applyFollowUser = (state, action) => {
    const { userId } = action;
    const { userList } = state; 
    const updatedUserList = userList.map(user => {
        if(user.id === userId) {
            return { ...user, following: true}
        }
        return user;
    });
    return {...state, userList: updatedUserList};
};

const applyUnFollowUser = (state, action) => {
    const { userId } = action;
    const { userList } = state; 
    const updatedUserList = userList.map(user => {
        if(user.id === userId) {
            return { ...user, following: false}
        }
        return user;
    });
    return {...state, userList: updatedUserList};
};

const applySetImageList = (state, action) => {
    const { imageList } = action;
    return {
        ...state,
        imageList
    };
}

const applySetUserInfo = (state, action) => {
    const { userInfo } = action; 
    return {
        ...state,
        userInfo
    };
}

const applySetProfile = (state, action) => {
    const { userProfile } = action;
    return {
        ...state,
        userProfile
    };
}


// exports

const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
    logout,
    getPhotoLikes,
    followUser,
    UnFollowUser,
    getExplore,
    searchByTerm,
    getProfile,
    getUserInfo,
    getFollowingList,
    getFollowersList,
};

export { actionCreators };


// reducer export

export default reducer;
