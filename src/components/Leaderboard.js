const Leaderboard = ({highScores}) => {
	return (
		<div>
		  <h2>High Scores</h2>
			{
				highScores !== null ? (
				<table>
          <tr>
            <th>Player Name</th>
            <th>Player Score</th>
          </tr>
          {
            highScores.map(playerScore => {
              return (
                <tr>
                  <td>{playerScore.name}</td>
                  <td>{playerScore.score}</td>
                </tr>
              )
            })
          }
				</table>
				) : (
				<span>There are currently no high scores</span>
				)
			}
		</div>
	)
}

export default Leaderboard;