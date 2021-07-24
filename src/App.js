import './App.css';
import { Nav } from './components/nav';
import { TextEditor } from './components/textEditor';

function App() {
	return (
		<div className='App'>
			<div className='editor-wrapper'>
				<Nav />
				<TextEditor />
			</div>
		</div>
	);
}

export default App;
