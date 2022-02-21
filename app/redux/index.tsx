import MyReducers from "./Reducers";
import AsyncStorage from "@react-native-community/async-storage";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers(MyReducers);
const persistConfigurations = {
  key: "persist",
  storage: AsyncStorage,
  blacklist: ["Global"],
};

const persistedReducer = persistReducer(persistConfigurations, reducer);
let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
let persistor = persistStore(store);

export default {
  store,
  persistor,
};