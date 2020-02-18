import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/+Header";

import Main from "./components/+Main/Main";
import Footer from "./components/+Footer";

function App() {
	// const [state, dispatch] = useReducer(searchReducer, initState);

	// const searchMovies = (searchValue) => {
	// 	dispatch({
	// 		type: searchMovieTypes.SEARCH_MOVIE_REQUEST
	// 	});

	// 	fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
	// 		.then((resp) => resp.json())
	// 		.then((data) => {
	// 			if (data.Response === "True") {
	// 				dispatch({
	// 					type: searchMovieTypes.SEARCH_MOVIE_SUCCESS,
	// 					payload: data.Search
	// 				});
	// 			} else {
	// 				dispatch({
	// 					type: searchMovieTypes.SEARCH_MOVIE_FAILURE,
	// 					error: data.Error
	// 				});
	// 			}
	// 		});
	// };

	// useEffect(() => {
	// 	fetch(MOVIE_API_URL)
	// 		.then((resp) => resp.json())
	// 		.then((data) => {
	// 			dispatch({
	// 				type: searchMovieTypes.SEARCH_MOVIE_SUCCESS,
	// 				payload: data.Search
	// 			});
	// 		});
	// }, []);

	// const { movies, errorMessage, loading } = state;

	return (
		<Router>
			<Header text='Movie Search App' />

			<Main />
			<Footer />
		</Router>
	);
}

export default App;
