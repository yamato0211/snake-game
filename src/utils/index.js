export const getFoodPosition = (fieldsize, excludes) => {
    while (true) {
        const x = Math.floor(Math.random() * ((fieldsize - 1) - 1) + 1)
        const y = Math.floor(Math.random() * ((fieldsize - 1) - 1) + 1)
        const conflict = excludes.some(item => item.x === x && item.y === y)
        if (!conflict) {
            return { x, y }
        }
    }
}
export const initFields = (fieldSize, snake) => {
    const fields = []
    for (let i = 0; i < fieldSize; i++) {
        const cols = new Array(fieldSize).fill('')
        fields.push(cols)
    }
    fields[snake.y][snake.x] = 'snake'
    const food = getFoodPosition(fieldSize, [snake])
    fields[food.y][food.x] = 'food';

    return fields
}

export const isCollision = (fieldSize, position) => {
    if (position.y < 0 || position.x < 0) {
        // x,yのどちらかの座標がマイナスの値の時
        return true;
    }

    if (position.y > fieldSize - 1 || position.x > fieldSize - 1) {
        //x,yのどちらかの座標がフィールドサイズを超えてしまっているとき
        return true;
    }

    return false;
}

export const isEatingMyself = (fields, position) => {
    return fields[position.y][position.x] === 'snake'
}