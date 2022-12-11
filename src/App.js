import logo from './logo.svg';
import './App.css';
import LocalStorageExample from './components/localstorage'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <LocalStorageExample />
            </header>
        </div>
    );
}

export default App;
