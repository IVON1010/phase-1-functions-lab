console.log(distanceFromHqInBlocks(50))


function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber's headquarters location
    return Math.abs(pickupLocation - hqLocation);
}

// Example usage:
console.log(distanceFromHqInBlocks(50)); 


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }

console.log(distanceFromHqInFeet(50))


function distanceTravelledInFeet(start_block, destination_block){
    const blocksTravelled=Math.abs(destination_block- start_block)

    const feetTravelled = blocksTravelled * 264

    return feetTravelled;
    
}

console.log(distanceTravelledInFeet(34,38))


function calculatesFarePrice(start_block, destination_block){
    const feetPerBlock = 264;
    const distanceTravelled = Math.abs (destination_block - start_block) * feetPerBlock;
    
    if (distanceTravelled <=400){
        return  0;
    }else if (distanceTravelled > 400 && distanceTravelled <= 2000){
        return (distanceTravelled - 400) * 0.02
    }else if (distanceTravelled > 2000 && distanceTravelled <=2500){
        return 25;
    }else{
        return 'cannot travel that far'
    }
}
console.log(calculatesFarePrice(34,38))