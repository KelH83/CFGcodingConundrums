<h1>The Intro to Coding challenge with Code First Girls</h1>
This challenge consisted of 5 coding conundrums; 
<br><br>
<ul>
  <li>Should we round up the grade</li>
  <li>Sorting an array</li>
  <li>Search a number in a sorted Matrix</li>
  <li>Find factorial of n</li>
  <li>Hiding credit card details.</li>
</ul>

<h2>Dates</h2>

26th September 2023 - Kick-off session explaining what the challenge consisted of

28th September 2023 - Work begins on the challenge

17th October 2023 - Submission deadline

20th October - Top 3 finalists announced

24th October - Finalist presentations and winner announced

<h2>The challenges</h2>
  
<em>As soon as this challenge was revealed I knew I wanted to build real-world examples for each one.</em>

<b>Challenge 1 - Should we round up the final grade?</b>

Every subject is graded from 0 to 100%. Less than 40% is failing grade and more than 80% is a distinction. 

We can round up a grade:
If the difference between the  grade and the next multiple of 5  is less than 3, round  up to the next multiple of 5.
If the value is less than 40, no rounding occurs as the result will still be a failing grade.

Given an input grade, round it up if appropriate and tell us if the student passed, failed or received a distinction.  Write an algorithm and produce a flow chart.

<em>I created a web page that would take inputs such as Teacher name, student name, grade and course code, it would calculate the student's final grade and produce either a printable certificate if the student earned a distinction or passed and if they failed it would give the teacher recommendations on next steps.</em>
<br>
<hr>
<b>Challenge 2 - Sorting an array</b>
<br><br>
You have an array of maximum size of 100 with DISTINCT integers. Write an algorithm and produce a flow chart that sorts this array from smallest to largest. 
<br><br>
<em>I created a web page that would take an input of numbers as sales figures, sort them from smallest to lowest and tell the user what the lowest, highest and average prices were.</em>
<hr>
<b>Challenge 3 - Search a number in a sorted Matrix</b>
<br><br>
You are given a matrix (a list of lists) of DISTINCT integers and a target number. Each row in the matrix is SORTED and each column in the matrix is SORTED. Our matrix does not necessarily have the same height and width.

Write a pseudocode and produce a flowchart that:

Finds the number and report back its location (row and column indices of the target integer), 

1 - if it is contained in the matrix

2 - otherwise report back that the integer is not in the matrix.

<em>For this challenge I imagined that the matrix location was actually a library record card number and that a librarian would input teh customer id in order to find the correct record number (or alert them that there is no record for that customer id)
</em>
<hr>
<b>Challenge 4 - Find factorial of n</b>
<br><br>
The value of n will be small, less than 100. How could we use a lookup table to find the factorial not in the table already. If you would run the program, the first time the look up table would be empty. 

Produce a pseudo code and a flowchart that allows us to find a factorial of a integer n. 

<em>This one was an easy one to transfer to a real world situation - how many ways can you shuffle n number of cards i.e what is the factorial of n. When th euser inputs a number for the first time the code will calculate the factorial and then store that information. If they look up that information again it will notify them that they have prevsiously searched for that amount of cards and will give them the factorial(or number of shuffles) available for that amount of cards.
</em>
<hr>
<b>Challenge 5 - Hide the credit card details</b>
<br><br>
There are 16 digits on a credit card. Every 4 digits are separated by a space. Start by generating a random credit card number. 

For security reasons, you are going to hide the first 12 digits on the credit card.

<em>For this one I created a mock payment page where you would enter all of your details including credit card details. That information would then be transferred over to a successful order page with all of the information displayed but with the first 12 credit card digits hidden.
</em>
<hr>
<b>For this challenge I used javascript to solve the challenges and HTML,Bootstrap and a little CSS for the actual website.</b>



