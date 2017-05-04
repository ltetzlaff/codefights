function chessBoardCellColor(cell1, cell2) {
    return (cell1[0].charCodeAt(0) - cell2[0].charCodeAt(0) + cell1[1].charCodeAt(0) - cell2[1].charCodeAt(0)) % 2 == 0
}
