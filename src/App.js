import './App.css';
import { Gridbox, Header } from './components'
import Overlay from './components/Header/Overlay';

function App() {
  return (
    <div className="App">
      <Header/>
      <Overlay/>
      <Gridbox rows={3}/>
      <Gridbox className="test" rows={2}/>
    </div>
  );
}

export default App;
