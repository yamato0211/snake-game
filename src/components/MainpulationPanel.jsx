import { Direction } from '../constants'
const MainpulationPanel = ({ onChangeDirection }) => {
    const onUp = () => onChangeDirection(Direction.up)
    const onRight = () => onChangeDirection(Direction.right)
    const onLeft = () => onChangeDirection(Direction.left)
    const onDown = () => onChangeDirection(Direction.down)
    return (
        <div className="manipulation-panel">
            <button className="manipulation-btn btn btn-left" onClick={onLeft}>←</button>
            <button className="manipulation-btn btn btn-up" onClick={onUp}>↑</button>
            <button className="manipulation-btn btn btn-down" onClick={onDown}>↓</button>
            <button className="manipulation-btn btn btn-right" onClick={onRight}>→</button>
        </div>
    );
};

export default MainpulationPanel