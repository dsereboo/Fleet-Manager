import {createStore,combineReducers, applyMiddleware,compose} from "redux"
import carReducer from "../Reducers/carReducers"
import thunk from "redux-thunk"
import firebase from "../Firebase/config"
import { getFirebase, reduxReactFirebase,firebaseReducer } from "react-redux-firebase"
import { getFirestore, reduxFirestore, } from "redux-firestore"

//Using the combineReducers method to put together all existing reducers
const combinedReducers=combineReducers({ 
    cars: carReducer,
    firebase:firebaseReducer,
})

//Connecting store with firebase firestore
export const store= createStore(combinedReducers,
    compose(
        //Note
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        //Note
        reduxFirestore(firebase),
        //Note
        reduxReactFirebase(firebase)
)) 