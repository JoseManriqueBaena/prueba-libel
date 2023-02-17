import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Carrousel2 from './components/Carrousel2/Carrousel2';
import Header from './components/Header/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<Carrousel />
			<Carrousel2 />
		</div>
	);
}

export default App;
