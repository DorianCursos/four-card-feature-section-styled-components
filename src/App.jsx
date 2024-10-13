import Cards from './components/cards/Cards';
import Header from './components/header/Header';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<h1>Curso de React</h1>
			<Header />
			<Cards />
		</div>
	);
};

export default App;
