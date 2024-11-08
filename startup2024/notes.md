ssh -i .\chavedesecuridade.pem ubuntu@skyrateit.click


Here is your midterm review formatted in Markdown:

HTML & CSS
What does the link element do?
The <link> element is used to define a relationship between the current document and an external resource. Commonly, it links to stylesheets (e.g., <link rel="stylesheet" href="styles.css">).

What does a div tag do?
The <div> tag defines a division or section in an HTML document. It is a block-level container used to group elements for styling or layout purposes.

What is the difference between the #title and .grid selector?

#title selects an element with the specific id "title".
.grid selects all elements with the class "grid".
What is the difference between padding and margin?

Padding is the space between an element’s content and its border.
Margin is the space outside the element’s border, separating it from neighboring elements.
How will the images be displayed using flex?
Images will be displayed according to the flex container’s rules, which could include properties like flex-direction, justify-content, and align-items. Images can be laid out in a row, column, and spaced evenly based on the flexbox settings.

What does the following padding CSS do?
The padding property adds space inside the element, between its content and its border. For example, padding: 10px 20px; applies 10px padding on the top/bottom and 20px on the left/right.

What does the CSS box model order look like from inside to outside?
The CSS box model starts with content, followed by padding, then border, and finally margin on the outermost layer.

How would you use CSS to change all the div elements to have a background color of red?

css
Copy code
div {
  background-color: red;
}
How would you display an image with a hyperlink in HTML?

html
Copy code
<a href="https://example.com">
  <img src="image.jpg" alt="Description">
</a>
Given HTML, how would you set the text "trouble" to green and leave the "double" text unaffected?

html
Copy code
<span class="green">trouble</span>double
css
Copy code
.green {
  color: green;
}
JavaScript
What does the following code using arrow syntax function declaration do?
Arrow functions provide a concise syntax for function expressions.
Example:

javascript
Copy code
const sum = (a, b) => a + b;
What does the following code using map with an array output?
The map method applies a function to each element of the array and returns a new array with the results.
Example:

javascript
Copy code
[1, 2, 3].map(x => x * 2);  // Output: [2, 4, 6]
What does the following code output using getElementByID and addEventListener?
This code retrieves an element by its ID and attaches an event listener to it, which performs a specific action when the event (e.g., "click") occurs.

What does the following line of JavaScript do using a # selector?
document.querySelector("#elementID") selects the element with the ID elementID.

How would you use JavaScript to select an element with the id of “byu” and change the text color to green?

javascript
Copy code
document.getElementById("byu").style.color = "green";
What is the correct syntax for creating a JavaScript object?
Example:

javascript
Copy code
const person = { name: "John", age: 30 };
Is it possible to add new properties to JavaScript objects?
Yes, you can dynamically add properties to JavaScript objects:

javascript
Copy code
person.job = "Developer";
What will the following code output when executed using a for loop and console.log?
The code outputs the values of the loop counter (or other looped items) at each iteration.

What is valid JavaScript syntax for if, else, for, while, switch statements?
Examples:

if:
javascript
Copy code
if (condition) { ... }
else:
javascript
Copy code
else { ... }
for:
javascript
Copy code
for (let i = 0; i < 10; i++) { ... }
while:
javascript
Copy code
while (condition) { ... }
switch:
javascript
Copy code
switch (expression) { ... }
What does the following code using Promises output when executed?
Promises output results based on their resolution or rejection. If resolved, the then block runs; if rejected, the catch block runs.

Web Development & Networking
Is a web certificate necessary to use HTTPS?
Yes, a web certificate (SSL/TLS) is necessary for HTTPS to secure the communication between the client and the server.

Port 443, 80, 22 is reserved for which protocol?

Port 443: HTTPS
Port 80: HTTP
Port 22: SSH
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?

chmod: Changes file permissions
pwd: Prints the working directory
cd: Changes the current directory
ls: Lists files in the directory
vim/nano: Text editors
mkdir: Creates a directory
mv: Moves or renames files
rm: Removes files or directories
man: Displays manual pages
ssh: Opens a secure shell connection
ps: Displays active processes
wget: Downloads files
sudo: Executes a command with superuser privileges
Which of the following console commands creates a remote shell session?
The ssh command creates a remote shell session.

Which of the following is true for the domain name banana.fruit.bozo.click?

Top-level domain: .click
Subdomain: banana.fruit
Root domain: bozo.click
Miscellaneous
How do you declare the document type to be HTML?
Use the following declaration at the top of an HTML file:

html
Copy code
<!DOCTYPE html>
Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a lightweight data format used for storing and transporting data, typically structured as key-value pairs.
