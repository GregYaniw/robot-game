import Square from './Square';
import Bug from './Bug';
import Leaf from './Leaf';


const BoardRow = ({ row, rowColCount, bugColumnPos, bugRowPos, leafColumnPos, leafRowPos }) => {

	const BoardSquares = [];
	for (let i = 1; i <= rowColCount; i++) {
		if (row === bugRowPos && i === bugColumnPos) {
			BoardSquares.push((
				<Square row={row} col={i} element={<Bug />} />
			))
		} else if (row === leafRowPos && i === leafColumnPos) {
			BoardSquares.push((
				<Square row={row} col={i} element={<Leaf />} />
			))
		} else {
			BoardSquares.push((
				<Square row={row} col={i} />
			))
		}
	}

	return (
		<div className="board-row">
			{BoardSquares.map((BoardSquare) => {
				return BoardSquare;
			})}
		</div>
	);
}

export default BoardRow;