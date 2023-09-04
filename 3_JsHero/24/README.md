String: indexOf()
To determine the first occurrence of a string within another string, use the indexOf method:
let n1 = 'bit'.indexOf('it');
let n2 = 'bit'.indexOf('js');
let n3 = 'bit'.indexOf('IT');
n1 is 1, because the starting position of 'it' in 'bit' is 1. As usual, counting starts at 0. indexOf returns -1 if the search string does not occur in the calling string. Thus n2 is -1. The indexOf method is case sensitive. So n3 is also -1.
Exercise
Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.
- Hint
function indexOfIgnoreCase(s1, s2) {
// Change s1 and s2
// first to lowercase.
// Then use the
// indexOf method.
}