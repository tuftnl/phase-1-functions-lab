// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    let x = number - 42
    return Math.abs(x)
}
function distanceFromHqInFeet(number) {
    let x = distanceFromHqInBlocks(number) * 264;
    return x
}
function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264)
}
function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end)
    let price
    if (distance < 400) {
        price = 0
    }
    if (distance > 400 && distance < 2000) {
        price = (distance - 400) * 0.02
    }
    if (distance > 2000 && distance < 2500) {
        price = 25
    }
    if (distance > 2500) {
        price = 'cannot travel that far'
    }
    return price
}