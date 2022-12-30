const foo = games => {
  let score = 0;

  games.forEach(game => {
    const [a, b] = game.split(':');
    if (a === b) score++;
    else if (a > b) score += 3;
  });

  return score > 4 ? 4 : score < 0 ? 0 : score;
};
