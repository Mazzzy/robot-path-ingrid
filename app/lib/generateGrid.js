/** Create a representation of a square grid using Arrays  */
function createSquareGrid(height) {
  const rows =
    height || 3; /** use the provided argument or default to size 3x3 */
  const columns = height || 3;
  const field = [];
  for (let x = 0; x < rows; x++) {
    let row = [];
    for (let y = 0; y < columns; y++) {
      /** we set the row/column information inside the slot so we can return an array of slots on move conditions
       * that way we won't to make any special changes to the slot object in the future. */
      let slot = { visited: false, row: x, col: y };
      row.push(slot);
    }
    field.push(row);
  }
  return field;
}
function sumDigits(n) {
  return ((n - 1) % 9) + 1;
}
