import { legacy_createStore,applyMiddleware } from "redux";
import logger from 'redux-logger'
import myreducer from "./Reducer";

const myStore=legacy_createStore(myreducer,applyMiddleware(logger));

export default myStore;