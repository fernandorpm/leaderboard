import { LeaderboardGET, LeaderboardPOST } from './api.js';
import './style.css';

document.querySelector('#submit').addEventListener('click', () => {
  const user = document.querySelector('#user').value;
  const score = document.querySelector('#score').value;

  document.querySelector('#user').value = '';
  document.querySelector('#score').value = '';

  LeaderboardPOST(user, score);
});

document.querySelector('#refresh').addEventListener('click', () => LeaderboardGET());

LeaderboardGET();
