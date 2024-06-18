export const calculateWinner = (cells, sequenceSize = 5, fieldSize = 19) => {
  const gap = Math.floor(sequenceSize / 2);

  const compareElements = (indexes) => {
    let res = true;

    for (let i = 1; i < indexes.length; i++) {
      res &&= !!cells[indexes[i]];
      res &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return res;
  };

  const getSequenceIndexes = (i) => {
    const result = [[], [], [], []];

    for (let j = 0; j < sequenceSize; j++) {
      result[0].push(j - gap + i);
      result[1].push(fieldSize * (j - gap) + (j - gap) + i);
      result[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      result[3].push(fieldSize * (j - gap) + i);
    }

    const x = i % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      result.shift();
      result.shift();
      result.shift();
    }

    return result;
  };

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));

      if (winnerIndexes) return winnerIndexes;
    }
  }

  return undefined;
};
