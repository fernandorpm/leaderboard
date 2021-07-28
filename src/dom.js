const scoreList = document.querySelector('.score-list-container ul');

export default function LeaderboardDisplay(leaderboardArray) {
  scoreList.innerHTML = '';

  for (let idx = 0; idx < leaderboardArray.length; idx += 1) {
    const score = leaderboardArray[idx];
    const scoreItem = document.createElement('li');

    scoreItem.innerHTML = `${score.user}: ${score.score}`;

    scoreList.appendChild(scoreItem);
  }
}
