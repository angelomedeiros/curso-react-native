const createBoard = (rows, collumns) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(collumns).fill(0).map((_, collumn) => {
      return {
        row,
        collumn,
        opened: false,
        flagged: false,
        mined: false,
        exploded: false,
        nearMines: 0
      }
    })
  })
}

const spreadMines = (board, minesAmount) => {

  const rows = board.length
  const collumn = board[0].length

  let minesPlanted = 0

  while ( minesPlanted < minesAmount ) {

    const rowSel = parseInt(Math.random() * rows, 10)
    const collumnSel = parseInt(Math.random() * collumn, 10)

    if (!board[rowSel][collumnSel].mined) {
      board[rowSel][collumnSel].mined = true
      minesPlanted++
    }

  }

}

const createMinedBoard = (rows, collumns, minesAmount) => {
  const board = createBoard(rows, collumns)
  spreadMines(board, minesAmount)
  return board
}

export {
  createMinedBoard
}