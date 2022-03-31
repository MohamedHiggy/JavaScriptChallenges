function canPlaceFlowers(flowerbed, n) {
    let counter = 0
    for (let index = 0; index < flowerbed.length; index++) {
        if (flowerbed[index] == 0 && flowerbed[index - 1] != 1  && flowerbed[index +1] != 1 ) {
            ++counter
            flowerbed.splice(index,1,1)
        }
    }
    if (counter >= n) {
        return true
    } else {
        return false
    }
}
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));