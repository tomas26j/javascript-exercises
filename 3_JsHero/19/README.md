Playground:

JS Hero has a Playground. Here I want to show you how to write small programs using the Playground. Programs usually has an input and an output. Within the Playground, the easiest way to achieve this is to use the two functions prompt() and alert():
let name = prompt('What is your name?');
alert('Hello ' + name + '!');
If you enter this code in the Playground and click on "Run", a dialog opens with the question "What is your name?". If you type "Kitty Pryde" and confirm the input, the dialog closes and a window with the message "Hello Kitty Pryde!" opens. After clicking on "OK" this window closes as well and our little program ends. With "Run" it can be started again.

prompt() and alert() are two functions provided by the browser.

prompt() takes a string as parameter. Above prompt() is passed the string 'What is your name?'. This string is displayed in the dialog window. Now prompt() interrupts the program execution and waits for our input. If we enter "Kitty Pryde" and confirm the input with "OK", prompt() returns the string 'Kitty Pryde'. This return is assigned to the variable name.

alert(), like prompt(), takes a string as parameter. Above we pass the expression 'Hello' + name + '!' to alert(). The variable name has the value 'Kitty Pryde', so this expression results in 'Hello Kitty Pride!'. With this string alert() is called. alert() displays this string in a small window and interrupts the program execution. After clicking on "OK" alert() terminates without a return value.

prompt() and alert() should not be used in professional web development. But they are ideal for practicing.

prompt() and alert() can't be used on most JS Hero exercise pages. This is because the solution code runs encapsulated in a so-called WebWorker. Both functions are not available there.

So, let's practice variable assignment and concatenation again:


Exercise
Which value does x have after execution of the following code?
let x = 'Tic';
x = x + 'Tac';
x = x + x;


- Hint
Paste the code into the Playgrund and display x with alert().