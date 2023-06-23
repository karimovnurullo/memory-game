import Card from "./card"
import classes from "./board.module.scss";

const Board = () => {
  return (
    <div className={classes.board}>
      <Card/>
    </div>
  )
}

export default Board