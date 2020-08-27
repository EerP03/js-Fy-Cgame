function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

function getDistance(e, target) {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt(diffX * diffX) + (diffY * diffY);
}

function getDistanceHint(distance) {
    if (distance < 25) {
        return "Boilig Hot!"
    }
    else if (distance < 50) {
        return "Really Hot"
    }
    else if(distance < 100) {
        return "Hot"
    }
    else if (distance < 170) {
        return "Warm"
    }
    else if (distance < 280) {
        return "Cold"
    }
    else if (distance < 430) {
        return "Very cold"
    }
    else {
        return "Frozen"
    }


}