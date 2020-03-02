import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/+Header";

import Main from "./components/+Main/Main";
import Footer from "./components/+Footer";

function App() {
	return (
		<Router>
			<div className='layout'>
				<Header text='MovieInfo' />
				<Main />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
