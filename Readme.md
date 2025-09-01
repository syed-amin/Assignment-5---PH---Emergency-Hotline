<!-- Answer the questions: -->
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
----> 
getElementById : Finds one element by its id.
getElementsByClassName : Finds all elements with that class (gives a list).
querySelector : Finds the first element that matches a CSS selector (like #id, .class, div p).
querySelectorAll : Finds all elements matching the CSS selector (gives a list).

2.How do you create and insert a new element into the DOM?
---->
const newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
document.body.appendChild(newDiv);

3.What is Event Bubbling and how does it work?
---->
When click a child element, the event goes up step by step to its parent, then parent’s parent until document. 
Like bubbles rising in water.

4.What is Event Delegation in JavaScript? Why is it useful?
---->
Event Delegation : Put one event listener on a parent instead of many on each child.
Useful because: less code, faster, works for new elements too.

5.What is the difference between preventDefault() and stopPropagation() methods?
---->
preventDefault() : Stops the default action (like stopping a link from opening).
stopPropagation() : Stops the event from bubbling up to parent elements.