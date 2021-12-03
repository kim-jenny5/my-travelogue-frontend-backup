import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import userReducer from "./reducers/userReducer";
// import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

// let store = createStore(userReducer, applyMiddleware(thunk));

ReactDOM.render(
	// <Provider store={store}>
	<Router>
		<App />
	</Router>,
	// </Provider>,
	document.getElementById("root")
);
