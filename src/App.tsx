import { DefaultButton, PrimaryButton } from '@fluentui/react';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [yesClicked, setYesClicked] = useState(false);
    const [noClickCount, setNoClickCount] = useState(0);
    const [question, setQuestion] = useState('Are you dumb?');

    useEffect(() => {
        if (noClickCount > 0) {
            const button = document.getElementById("noButton")!;
            button.style.position = 'absolute';
            button.style.top = (Math.random() * window.innerHeight/2 + window.innerHeight/3) + 'px';
            button.style.left = (Math.random() * window.innerWidth/2 + window.innerWidth/3) + 'px';
        }
        if(noClickCount > 5) {
            setQuestion('Are you dumb? Hint: Click yes!');
        }
    }, [noClickCount]);

    return (
        <div className="container">
            {!yesClicked && <><div className='question'>{question}</div>
            
            <div className="answer-space">
                <YesButton setYesClicked={setYesClicked} />
                <NoButton setNoClickCount={setNoClickCount} />
            </div></>}
            {yesClicked && 
                <div className='question'>
                    <div>I knew it! </div>
                    <div>😝 😝 😝</div>
                    <div>🤣 🤣 🤣</div>
                    <div>😂 😂 😂</div>
                    <div>😎 😎 😎</div>
                    <div>Just kidding!</div>
                    <div>(Or am I?)</div>
                </div>}
        </div>
    );
}

const YesButton = (props: { setYesClicked: any }) => {
    return (
        <div className='button yes'>
            <PrimaryButton onClick={() => { props.setYesClicked(true); }}>Yes</PrimaryButton>
        </div>
    );
}

const NoButton = (props: { setNoClickCount: any }) => {
    return (
        <div className='button no'>
            <DefaultButton id="noButton" onClick={() => { props.setNoClickCount((count: number) => count + 1); }}>No</DefaultButton>
        </div>
    );
}


export default App;
