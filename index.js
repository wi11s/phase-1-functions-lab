// Code your solution in this file!
function distanceFromHqInBlocks(startBlock) {
    return (Math.abs(startBlock-42));
}

function distanceFromHqInFeet(startBlock) {
    return distanceFromHqInBlocks(startBlock)*264;
}

function distanceTravelledInFeet(start, destination) {
   return Math.abs((start-destination)*264)
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination)<=400) {
        return 0
    }
    if (distanceTravelledInFeet(start, destination)<2000) {
        return (distanceTravelledInFeet(start, destination)-400)*.02;
    }
    if (distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<2500) {
        return 25;
    }
    if (distanceTravelledInFeet(start, destination)>2500) {
        return "cannot travel that far"
    }
}