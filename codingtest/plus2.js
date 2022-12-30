const foo = pos => {
  pos.sort((a, b) => a - b);
  return pos[1];
};
