import firebase from '../firebase';

const USER_ID = 'USER_ID';
const GET_USER_ID = 'GET_USER_ID';

const initial_state = {
  userId: ''
}

export default function reducer(state=initial_state, action) {
  console.log(state,action);
  switch(action.type) {
    case USER_ID:
      return Object.assign({}, state, {userId: action.payload})
    case GET_USER_ID + '_PENDING':
      console.log('PENDING');
      return Object.assign({}, state, { isLoading: true });
    case GET_USER_ID + '_FULFILLED':
      console.log('FULFILLED');
      return Object.assign({}, state, { isLoading: false, userId: action.payload })
    default:
      return state;
  }
}

export function login(payload) {
  console.log(payload);
  return {
    type: USER_ID,
    payload
  }
}

export function getUserId() {
  return {
    type: GET_USER_ID,
    payload: new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        user ? resolve(user.uid) : reject(null);
      })
    })
  }
}
