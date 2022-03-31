import React, { useEffect, useState } from 'react';
import { setOriginalNode } from 'typescript';
import './App.css';

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  useEffect(() => {
    if(noClickCount > 0) {
      const button = document.getElementById("noButton")!;
      button.style.position = 'absolute';
      button.style.top = Math.random()*window.innerHeight + 'px';
      button.style.left = Math.random()*window.innerWidth + 'px';
    }
  }, [noClickCount]);

  return (
    <div className="Container">
      <div className="App">
        {!yesClicked && <><h1>Are you dumb?</h1>
          <YesButton setYesClicked={setYesClicked} />
          <NoButton setNoClickCount={setNoClickCount} />
        </>}
        {yesClicked && <h1>I knew it! B) </h1>}
      </div>
    </div>
  );
}

const YesButton = (props: { setYesClicked: any }) => {
  return <button className='Button Yes' onClick={() => {
    props.setYesClicked(true);
  }}>Yes</button>
}

const NoButton = (props: { setNoClickCount: any }) => {
  return <button className='Button No' id="noButton" onClick={() => {
    props.setNoClickCount((count: number) => count + 1);
  }}>No</button>
}


export default App;
