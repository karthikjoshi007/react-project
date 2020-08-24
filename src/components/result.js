import React from "react";
var msg;
const Result=({score,playAgain})=>(
	<div className="score-board">
	<div className="score">You scored {score}/5!</div>
	<div className="score">{msg}</div>
	<button className="playBtn" onClick={playAgain}>
	Play Again!
	</button>
	</div>
	);

/*const message=({score})=>(
	if(score<4){
        msg='Better luck next time!';
        }
        else if(score===4){
        msg='Ooh close!!'};
        else{
        msg='Well done!';
		}
		return msg;
	);*/

	export default Result;