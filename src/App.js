
import {useState} from 'react'
import Basic from './components/Basic'
import Advanced from './components/Advanced'



function App() {
  const [view,setView] = useState('basic')

  const basicHandler =()=>{
    setView('basic')
  }
  const advanceHandler = ()=>{
    setView('advanced')
  }

  return (
    <div className="App">

      
      <nav>
        <h3 
        onClick={basicHandler}
        style={{color:view === "basic"?"#fff":''}}
        >
          Basic
        </h3>
        <h3 
        onClick={advanceHandler}
        style={{color:view === "advanced"?"#fff":''}}
        >
          Advanced
        </h3>
      </nav>

      {view === 'basic' ? <Basic/> : <Advanced/>}
      </div>
  );
}

export default App;
