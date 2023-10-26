# The Intro to Coding challenge with Code First Girls
This challenge consisted of 5 coding conundrums; 
<br><br>
* Should we round up the grade
* Sorting an array
* Search a number in a sorted Matrix
* Find factorial of n
* Hiding credit card details


## Dates

26th September 2023 - Kick-off session explaining what the challenge consisted of

28th September 2023 - Work begins on the challenge

17th October 2023 - Submission deadline

20th October - Top 3 finalists announced

24th October - Finalist presentations and winner announced

## The challenges
_As soon as this challenge was revealed I knew I wanted to build real-world examples for each one._

### Challenge 1 - Should we round up the final grade?

Every subject is graded from 0 to 100%. Less than 40% is a failing grade and more than 80% is a distinction. 

We can round up a grade:
If the difference between the  grade and the next multiple of 5  is less than 3, round  up to the next multiple of 5.
If the value is less than 40, no rounding occurs as the result will still be a failing grade.

Given an input grade, round it up if appropriate and tell us if the student passed, failed or received a distinction.  Write an algorithm and produce a flow chart.

_I created a web page that would take inputs such as Teacher name, student name, grade and course code, it would calculate the student's final grade and produce either a printable certificate if the student earned a distinction or passed and if they failed it would give the teacher recommendations on next steps._

### Challenge 2 - Sorting an array

You have an array of maximum size of 100 with DISTINCT integers. Write an algorithm and produce a flow chart that sorts this array from smallest to largest. 

_I created a web page that would take an input of numbers as sales figures, sort them from smallest to lowest and tell the user what the lowest, highest and average prices were._

### Challenge 3 - Search a number in a sorted Matrix

You are given a matrix (a list of lists) of DISTINCT integers and a target number. Each row in the matrix is SORTED and each column in the matrix is SORTED. Our matrix does not necessarily have the same height and width.

Write a pseudocode and produce a flowchart that:

Finds the number and report back its location (row and column indices of the target integer), 

1 - if it is contained in the matrix

2 - otherwise report back that the integer is not in the matrix.

_For this challenge I imagined that the matrix location was actually a library record card number and that a librarian would input teh customer id in order to find the correct record number (or alert them that there is no record for that customer id)_

### Challenge 4 - Find factorial of n

The value of n will be small, less than 100. How could we use a lookup table to find the factorial not in the table already. If you would run the program, the first time the look up table would be empty. 

Produce a pseudo code and a flowchart that allows us to find a factorial of an integer n. 

_This one was an easy one to transfer to a real-world situation - how many ways can you shuffle n number of cards i.e what is the factorial of n. When the user inputs a number for the first time the code will calculate the factorial and then store that information. If they look up that information again it will notify them that they have previously searched for that amount of cards and will give them the factorial(or number of shuffles) available for that amount of cards._

### Challenge 5 - Hide the credit card details

There are 16 digits on a credit card. Every 4 digits are separated by a space. Start by generating a random credit card number. 

For security reasons, you are going to hide the first 12 digits on the credit card.

_For this one I created a mock payment page where you would enter all of your details including credit card details. That information would then be transferred over to a successful order page with all of the information displayed but with the first 12 credit card digits hidden._



