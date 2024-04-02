function randomRange(myMin, myMax) {
  let random = Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  console.log(random);
  return random;
}
