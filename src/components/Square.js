const Square = ({ element, row, col }) => {

    return (
      <div className="square" row={row} col={col}>
        { element }
      </div>
    );
  }

export default Square;