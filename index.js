function distanceFromHqInBlocks(pickupLocation){
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation){
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(a, b){
  return Math.abs((b-a)*264);
}

function calculatesFarePrice(a, b){
  
}
