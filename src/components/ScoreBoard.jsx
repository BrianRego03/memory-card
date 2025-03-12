

function ScoreBoard({history}){
    for(let i=history.length-2;i>=0;i--){
        if (history[history.length-1]==history[i]){
            console.log("Game over")
        }

    }

    return(
        <>
            <p>Score:{history.length}</p>
        </>
    )
}

export default ScoreBoard;