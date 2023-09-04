function secondIndexOf(s1, s2) {
    let firstIndex = s1.indexOf(s2);
    return s1.indexOf(s2, firstIndex + 1);
}

secondIndexOf('White Rabbit', 'it'); //should return 10.

console.log(secondIndexOf('White Rabbit', 'it'));