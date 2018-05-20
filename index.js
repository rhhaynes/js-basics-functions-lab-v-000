function distanceFromHqInBlocks(pickupLocation){
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(){
  return distanceFromHqInBlocks * 264;
}

function 