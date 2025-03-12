

function ScoreBoard({history,clear}){
    for(let i=history.length-2;i>=0;i--){
        if (history[history.length-1]==history[i]){
            clear();
        }

    }

    return(
        <>
            <p>Score:{history.length}</p>
        </>
    )
}

export default ScoreBoard;