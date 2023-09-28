function testElse(val) {
  let result = "";

  if (val <= 5) result = "5 or Smaller";
  else result = "Bigger than 5";

  return result;
}

testElse(4);
