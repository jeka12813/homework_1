
import './App.css';
import { Main } from './components/Main/Main';
import {Footer} from './components/Footer/Footer'
import {Navigation} from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default App;
