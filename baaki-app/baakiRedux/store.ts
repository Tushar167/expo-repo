import { applyMiddleware, combineReducers, createStore } from "redux";
// import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { commonReducer } from "./baaki-reducer";

console.log(createSagaMiddleware);

const rootReducer = combineReducers({
    common : commonReducer,
})

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// if (process.env.NODE_ENV === 'development') {
//     const logger = createLogger({
//         collapsed: true,
//         duration: true,
//     });
//     middlewares.push(logger);
// }

const store = createStore(rootReducer, applyMiddleware(...middlewares));
// sagaMiddleware.run(watchLoginRequests);

export default store;