String: indexOf() with from index

The indexOf method allows you to specify the position from which the search should start. This is done with a second parameter.
let n1 = 'White Rabbit'.indexOf('it', 1);
let n2 = 'White Rabbit'.indexOf('it', 3);

The first 'it' in 'White Rabbit' has the index 2. Starting our search at position 1 it will be found. n1 is 2. The second 'it' in 'White Rabbit' has the index 10. Starting our search at position 3 it will be found. n2 is 10.
Exercise

Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.

Example: secondIndexOf('White Rabbit', 'it') should return 10.
- Hint


function secondIndexOf(s1, s2) {
  let firstIndex = s1.indexOf(s2);
  return s1.indexOf(s2, firstIndex + 1);
}