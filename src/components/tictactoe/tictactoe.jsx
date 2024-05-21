import React, {useState, useEffect} from 'react';
import "./tictactoe.css";
import Circle from "../assets/circle.png";
import Cross from "../assets/cross.png";
import ReactLogo from "../assets/react_logo.png";
import PersonalLogo from "../assets/personal_logo.png";

const TicTacToe = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState("X");
    const [lock, setLock] = useState(false)

    let won =  false;
    function checkwinner(newState) {
        const win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7],[2,5,8], [2,4,6], [0,4,8]];
        for (let i = 0; i < win.length; i++) {
            const [a,b,c] = win[i]; // Learnt Array Destructuring
            if(newState[a] !==null && newState[a] === newState[b] && newState[a] === newState[c]){
                won = true;
                break;
            }
        }
        if(won === true) setLock(true);
    }

    function handleClick(id){
        if (!state[id] && !lock) {  // Checking if the box is already clicked or game is over
            const newState = [...state];
            newState[id] = turn;
            setState(newState);
            //Checking if someone won
            checkwinner(newState);

            if(!won)setTurn(turn === "X" ? "O" : "X");

        }
    }

    function renderImage(id){
        if(state[id]==="X") return <img src={Cross} alt="Cross" width="45px" />;
        else if(state[id]==="O") return <img src={Circle} alt="Circle" width="40px" />;
    }

    function resetfn(){
        setState(Array(9).fill(null));
        setTurn("X");
        setLock(false);
    }

    return(
    <>
    <div className="loader winner-container">
        {!lock && <span className="loader-text1">Welcome!</span>}
        {lock && <span className="loader-text2">{turn}, Won!</span>}
    </div>
    <div className='personal_logo_container'>
        <img src={PersonalLogo} width="140px" />
    </div>
    <hr/>
    <div className='container'>
            <div>
                <h1 className='main-heading'>Tic Tac Toe <img className="logo_img" src={ReactLogo} alt="React Logo" height="25px" /></h1>
            </div>
            <div className="board">
                <div className='row1'>
                    <div onClick={() => handleClick(0)}  className="boxes" id="0">{renderImage(0)}</div>
                    <div onClick={() => handleClick(1)}  className="boxes" id="1">{renderImage(1)}</div>
                    <div onClick={() => handleClick(2)}  className="boxes" id="2">{renderImage(2)}</div>
                </div>
                <div className='row2'>
                    <div onClick={() => handleClick(3)}  className="boxes" id="3">{renderImage(3)}</div>
                    <div onClick={() => handleClick(4)}  className="boxes" id="4">{renderImage(4)}</div>
                    <div onClick={() => handleClick(5)}  className="boxes" id="5">{renderImage(5)}</div>
                </div>
                <div className='row3'>
                    <div onClick={() => handleClick(6)}  className="boxes" id="6">{renderImage(6)}</div>
                    <div onClick={() => handleClick(7)}  className="boxes" id="7">{renderImage(7)}</div>
                    <div onClick={() => handleClick(8)}  className="boxes" id="8">{renderImage(8)}</div>
                </div>
            </div>
            <div className='newGameBtn'>
            <button class="cssbuttons-io-button" onClick={resetfn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                <span>New Game</span>
            </button>
            </div>
        </div>
        </>
    )
};

export default TicTacToe;
