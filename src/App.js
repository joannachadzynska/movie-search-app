import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/+Header";

import Main from "./components/+Main/Main";
import Footer from "./components/+Footer";

function App() {
	return (
		<Router>
			<Header text='MovieInfo' />
			<Main />
			<Footer />
		</Router>
	);
}

export default App;
