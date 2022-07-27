import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';



import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute'; 
import OficinaPage from './pages/OficinaPage';
import SalaReunionesPage from './pages/SalaReunionesPage';
import BasicExample from './components/Button-Card';
import ButtonOficina from './components/Button-Oficina';
import OficinaReserva from './components/OficinaReserva';
import SalaReserva from './components/SalaReserva';

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route exact path="/" element={<HomePage/>} />
				

				<Route
					exact
					path="/oficina"
					element={
						<PrivateRoute>
							<OficinaPage />
							{/* <ButtonOficina /> */}
						</PrivateRoute>
					}
				/>
				
				
				<Route
					exact
					path="/salaReuniones"
					element={
						<PrivateRoute>
							<SalaReunionesPage />
							{/* < BasicExample /> */}
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/office-books"
					element={
						<PrivateRoute>
							<OficinaReserva />
							{/* < BasicExample /> */}
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/salaReserva"
					element={
						<PrivateRoute>
							<SalaReserva />
							{/* < BasicExample /> */}
						</PrivateRoute>
					}
				/>
				


				<Route
					exact
					path="/signup"
					element={
						<AnonRoute>
							<SignupPage />
						</AnonRoute>
					}
				/>
				<Route
					exact
					path="/login"
					element={
						<AnonRoute>
							<LoginPage />
						</AnonRoute>
					}
				/>
			</Routes>

			
			
			
			
			
		</div>
	);
}

export default App;
