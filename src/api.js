const fetchURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XW3Ed1QYxBzVvRyVMvEB/scores';

async function LeaderboardGET() {
  fetch(fetchURL, {
    method: 'get'
  })
  .then((response) => {
    console.log(response);
  })
  .catch(() => {
    console.log('ERROR')
  })
}

async function LeaderboardPOST() {
  fetch(fetchURL, {
    method: 'get'
  })
  .then((response) => {
    console.log(response);
  })
  .catch(() => {
    console.log('ERROR')
  })
}

module.exports = { LeaderboardGET };