// import logo from './logo.svg';
import { Login } from './Login';
import { Footer } from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faPlus, faHome } from '@fortawesome/free-solid-svg-icons'


const App = () => {

  library.add(fab, faSearch, faPlus, faHome)

  return (
    <div className="App">
      <Login/>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
