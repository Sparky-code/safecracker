import { useState, useEffect } from 'react';
import './App.css';
import { Gridbox, Header } from './components';
import GameContext from './context';

function App() {
  const [firstRun, setFirstRun] = useState(true);
  const [results, setResults] = useState({});
  const [superSecretNumbers, setSuperSecretNumbers] = useState();

  useEffect(() => {
    async function getRandomNumbers() {
      const number = 4;
      const maxNumber = 7;
      const query = `?num=4&min=0&max=${maxNumber}&col=1&base=10&format=plain&rnd=new`;
      const url = `https://www.random.org/integers/${query}`;
      
      try {
        let res = await fetch(url, {method:'GET', mode:'cors', credentials:'same-origin', headers:{'Content-Type':'application/json'}, referrerPolicy:'origin-when-cross-origin'});
        // res = await res.json();
        console.log(res)
        setSuperSecretNumbers(res);
      } catch (error) {
        console.log(error)
        setSuperSecretNumbers(Math.floor(Math.random() * (number + 1)));
      }
    }
    if(firstRun) getRandomNumbers();
    setFirstRun(false);
  }, [firstRun])

  return (
    <GameContext.Provider value={{resultsApi:[results, setResults], superSecretNumbers}}>
      <div className="App">
        <Header/>
        <Gridbox rows={3}/>
    </div>
    </GameContext.Provider>
  );
}

export default App;
