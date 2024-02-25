import React, {useEffect} from 'react'

function GameOver({width, height, address, score, mintTokens}) {

    useEffect(() => {
        mintTokens(address, score)
    }, [address, mintTokens, score]);

    return (
        <div
            id='GameBoard'
            style={{
                width: width,
                height: height,
                borderWidth: width / 50,
            }}>
            <div id='GameOver' style={{ fontSize: width / 15 }}>
            <div id='GameOverText'>GAME OVER</div>
            <div>Your score: {score}</div>
            <div id='PressSpaceText'>Press Space to restart</div>
            </div>
        </div>
    )
}

export default GameOver
