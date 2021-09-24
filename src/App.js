import Header from './components/Header'
import Section from './components/Section'
import Contact from './components/Contact'
import ButtonTo from './components/ButtonTo'
import React from 'react'
import {useState} from 'react'

function App() {
  const [section, setSection] = useState(<Header />);
  return (
    <div className="App">
        {section}
        <div class="navigate">
        <ButtonTo id="headerBox" onClick={() => setSection((<Header />))}/>|<ButtonTo id="workBox" onClick={() => setSection((<Section n={2} index={1} indiv='infolite' inid='work'/>))}/>|<ButtonTo id="strengthBox"onClick={() => setSection(<Section n={3} index={2} indiv='info' inid='strength'/>)}/><ButtonTo id="hobbyBox" onClick={() => setSection(<Section n={4} index={3} indiv='info' inid='hobby'/>)}/>|<ButtonTo id="contactBox" onClick={() => setSection(<Contact />)}/>
        </div>
    </div>
  );
}

export default App;
