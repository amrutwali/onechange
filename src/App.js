// Libraries
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Navbar from './Components/Navabr/Navbar';
// Styles
import GlobalStyle from './globalStyles';
import Swap from './Pages/Swap';
import Conversion from './Pages/Conversion';

function App() {
	return (
		<Fragment>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Swap />}
				/>
				<Route
					path="/conversion"
					element={<Conversion />}
				/>
			</Routes>
			<GlobalStyle />
		</Fragment>
	);
}

export default App;
