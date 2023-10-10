//Date creator
const fullDate = new Date(); 
const today = fullDate.getDate()
const month = fullDate.getMonth()+1
const year = fullDate.getFullYear()
const dayToday = `${today}/${month}/${year}`

//CHALLENGE 1 - GRADE CHECKER
let finalMark; //This stores the final mark(fail, pass or distinction)

//Checks whether the grade is a multiple of 5, if it is then the original grade is sent to the final grade function. 
//If it isn't it keeps adding 1 to the number until it reaches a multiple of 5, once that happenes it checks the difference

function gradeChecker(grade) {

    if (grade <40){
        gradeDecision(grade)
    }
    else{

      let gradeCheck = grade;

      if (gradeCheck % 5 === 0) {
      
        gradeDecision(grade);
      } else {
        do {
          gradeCheck ++ ;
        } while (gradeCheck % 5 !== 0);

    //Checks the difference between the original grade and the next multiple of 5 and if it is less than 3 
     //it sends the rounded up grade to the final gradeDecision function, if it isn't it sends the original grade.
     
        const difference = gradeCheck - grade;
      
        if (difference < 3) {
          gradeDecision(gradeCheck);
        } else {
          gradeDecision(grade);
        }
      }

}

}
//This decides the final outcome based on the rounded up(or not) grade.

function gradeDecision(number){
    if(number >80){
        finalMark = 'Distinction';
    }
    else if(number >=40 && number <=80){
        finalMark= 'Pass';
    }
    else{
        finalMark = 'Fail';
    }
}


// This is triggered by clicking submit on the form(which sets the whole process off)
function certificate(examInput){
document.getElementById("gradeCheckerForm").style.display = "none"; //Hides the form

//Variables to store the data from the form
const grade=examInput.examMark.value;
const teacher = examInput.teacherName.value;
const student = examInput.studentName.value;
const course = examInput.courseCode.value;


//This triggers the grade checker above and then displays things based on the outcome
const finalGrade = gradeChecker(grade);

    if(finalMark === 'Distinction'){        
        document.getElementById("teacherDist").textContent = teacher;
        document.getElementById("studentDist").textContent = student;
        document.getElementById("courseDist").textContent = course;
        document.getElementById("gradeDist").textContent = finalMark;
        document.getElementById("dateDist").textContent = dayToday;
        document.getElementById("certificate1").style.display = "inline"; 

    }
    else if(finalMark === 'Pass'){
      document.getElementById("teacherPass").textContent = teacher;
      document.getElementById("studentPass").textContent = student;
      document.getElementById("coursePass").textContent = course;
      document.getElementById("gradePass").textContent = finalMark;
      document.getElementById("datePass").textContent = dayToday;
      document.getElementById("certificate2").style.display = "inline";
    }
    else if(finalMark === 'Fail'){
      document.getElementById("teacherFail").textContent = teacher;
      document.getElementById("studentFail").textContent = student;
      document.getElementById("courseFail").textContent = course;
      document.getElementById("gradeFail").textContent = finalMark;
      document.getElementById("failure").style.display = "inline";
    }
    else{
        console.log("error")
    }
event.preventDefault();//This prevents the window from auto reloading when the form is submitted
}

//CHALLENGE 2
let num=[];
function sortNumbers(numberForm){
  const numbers = numberForm.numbersToSort.value; //Gets numbers from the form
  let num = numbers.split(","); //Splits the numbers from the commas adding them into a new array
  num.sort(function(a, b){return a-b}); //Sorts the numbers

  //Working out highest/lowest/average
  let total=0;
  for(let i=0; i<num.length; i++){
    console.log(num[i])
    total = total + Number(num[i]);
  }
  const highest = num[num.length-1];
  const lowest = num[0];
  const averageCalculation = total/num.length;
  const average = (Math.round(averageCalculation * 100) / 100).toFixed(2) //Will change average to show to 2 decimal places

//Displaying everything
  document.getElementById("unsorted").style.display="none";
  document.getElementById("sorted").style.display="inline";
  document.getElementById("sortedNumbers").textContent = num;
  document.getElementById("lowestSale").textContent = lowest;
  document.getElementById("highestSale").textContent = highest;
  document.getElementById("averageSale").textContent = average;
  document.getElementById("sortedLeftBox").innerHTML='<img class="img-fluid" src="./images/numbersA4.png"alt="animated numbers"/>'
  document.getElementById("sortedRightBox").innerHTML='<img class="img-fluid" src="./images/numbersB4.png"alt="animated numbers"/>'
}

function sortAgain(){
  location.reload();
}

function animateNumbers(){
  counter = 0;
  timesRun = 0;
  let interval = setInterval(function(){
      timesRun ++;
      if(timesRun == 8){
          clearInterval(interval);
      }
      changeNumberImage()
  }, 500); 
}
const numLeftBox = document.getElementById("numLeftBox");
const numRightBox = document.getElementById("numRightBox");

function changeNumberImage(){
    
  if (counter == 0 || counter == 3 || counter == 6){
      numLeftBox.innerHTML='<img class="img-fluid" src="./images/numbersA1.png"alt="animated numbers"/>'
      numRightBox.innerHTML='<img class="img-fluid" src="./images/numbersB1.png"alt="animated numbers"/>'
      counter++;
  }
  else if(counter == 1 || counter == 4 || counter == 7){
    numLeftBox.innerHTML='<img class="img-fluid" src="./images/numbersA2.png"alt="animated numbers"/>'
    numRightBox.innerHTML='<img class="img-fluid" src="./images/numbersB2.png"alt="animated numbers"/>'
      counter++;
  }
  else if(counter == 2 || counter == 5 || counter == 8){
    numLeftBox.innerHTML='<img class="img-fluid" src="./images/numbersA3.png"alt="animated numbers"/>'
    numRightBox.innerHTML='<img class="img-fluid" src="./images/numbersB3.png"alt="animated numbers"/>'
      counter++;
  }
  else{
      numLeftBox.innerHTML='<img class="img-fluid" src="./images/numbersA3.png"alt="animated numbers"/>'
      numRightBox.innerHTML='<img class="img-fluid" src="./images/numbersB3.png"alt="animated numbers"/>'
  }
}


//CHALLENGE 3

//this is the function that searches in the matrix
function matrixFinder(number){
  let matrix = [
[1,4,7,12,15,1000],
[2,5,19,31,32,1001],
[3,8,24,33,35,1002],
[40,41,42,44,45,1003],
[99,100,103,106,128,1004]
];


const search = (matrix, number) => {
       for (let i = 0; i < matrix.length; i++) {
           for (let j = 0; j < matrix[i].length; j++) {
               if (matrix[i][j] == number) {
                   return [i, j];
               }
           }
       }
       return [-1, -1];
   }


let location = search(matrix, number);
   if (location[0] !==-1){
    imageCounter ++
   return `Customer Id found at index reference: [${location[0]} ${location[1]}]`;
   }
   else{
       return 'That customer Id does not exist in our records';
   }
}
imageCounter =0;
//This is the function that is called on clicking submit
function matrixSearch(matrixInput){
//Hides the input form
document.getElementById("searchMatrix").style.display = "none";
//Takes the input from the form and converts it to a number and stores it in a variable
const numberToFind = Number(matrixInput.matrixNumber.value); 
//This calls the matrix finder function, storing the result in a variable
let findNumber = matrixFinder(numberToFind);
//This sends the result back to the user
document.getElementById("matrixResult").textContent = findNumber;
//Changes the images on the side depending on the outcome
const leftBox2 = document.getElementById("box2A");
const rightBox2 = document.getElementById("box2B");
if (imageCounter === 0){
  leftBox2.innerHTML='<img class="img-fluid" src="./images/matrixFail.png"alt="box of squares with X on"/>'
  rightBox2.innerHTML='<img class="img-fluid" src="./images/matrixFail.png"alt="box of squares with x on"/>'
}
else{
  leftBox2.innerHTML='<img class="img-fluid" src="./images/matrixSuccess.png"alt="box of squares with X on"/>'
  rightBox2.innerHTML='<img class="img-fluid" src="./images/matrixSuccess.png"alt="box of squares with x on"/>'
}
//This displays the results
document.getElementById("searchMatrixResults").style.display = 'inline';
}



function animateBoxes(){
  counter = 0;
  timesRun = 0;
  let interval = setInterval(function(){
      timesRun ++;
      if(timesRun == 8){
          clearInterval(interval);
      }
      changeImage()
  }, 500); 
}
const leftBox = document.getElementById("box1A");
const rightBox = document.getElementById("box1B");

function changeImage(){
    
  if (counter == 0 || counter == 3 || counter == 6){
      leftBox.innerHTML='<img class="img-fluid" src="./images/matrix1.png"alt="animated box of squares"/>'
      rightBox.innerHTML='<img class="img-fluid" src="./images/matrix1.png"alt="animated box of squares"/>'
      counter++;
  }
  else if(counter == 1 || counter == 4 || counter == 7){
    leftBox.innerHTML='<img class="img-fluid" src="./images/matrix2.png"alt="animated box of squares"/>'
    rightBox.innerHTML='<img class="img-fluid" src="./images/matrix2.png"alt="animated box of squares"/>'
      counter++;
  }
  else if(counter == 2 || counter == 5 || counter == 8){
    leftBox.innerHTML='<img class="img-fluid" src="./images/matrix3.png"alt="animated box of squares"/>'
    rightBox.innerHTML='<img class="img-fluid" src="./images/matrix3.png"alt="animated box of squares"/>'
      counter++;
  }
  else{
      leftBox.innerHTML='<img class="img-fluid" src="./images/matrix1.png"alt="animated box of squares"/>'
      rightBox.innerHTML='<img class="img-fluid" src="./images/matrix1.png"alt="animated box of squares"/>'
  }
}

//CHALLENGE 4
//For the first time a factorial is looked up
let factorialTableEmpty =[];
let emptyTableMessage;
function findFactorial(number){
  //First checks if the number is 1 and adds the number and answer to the lookup table
  if(number ==1){
    factorialTableEmpty.push({1:1})
    let emptyTableMessage = 1;
    localStorage.setItem("factorialTableEmpty", JSON.stringify(factorialTableEmpty));
    return emptyTableMessage;
  }
  //if not calculate the facorial
  else{
    let number1 = number * (number-1);
    let answer = number1;
    for (let i=number-2; i>0; i--){
        let sum = answer * i
        answer = sum;
    }
    // adds the factorial to the lookup table and returns the answer
    factorialTableEmpty.push({[number]:answer})
    let emptyTableMessage = answer;
    localStorage.setItem("factorialTableEmpty", JSON.stringify(factorialTableEmpty));
    return emptyTableMessage;
    
  }}

function howManyShuffles(cardFactorial){
  document.getElementById("cardInput").style.display ="none";
    const number = cardFactorial.cardNumber.value;
    const shuffleAmount = findFactorial(number);
    document.getElementById("resultCard1").textContent = number;
    document.getElementById("resultCard2").textContent = shuffleAmount;
    document.getElementById("resultEmpty").style.display = "inline";
  }


let message;
let messageCheck = 0;
function findFactorialOld(number){
  let tableAnswer;
  let factorialTable = JSON.parse(localStorage.getItem("factorialTableEmpty"))
  
    //checking if table has values
    if(factorialTable){
        //looping through the table to check if the number input matches one of the keys
        for (let i=0; i<factorialTable.length; i++){
        //if it matches change the tableAnswer to that key value pair
          if(number in factorialTable[i]){            
            tableAnswer = factorialTable[i];
          }
          
        }
    }
        console.log(tableAnswer);
        //if tableAnswer contains a key value pair return it with appropriate message
        if (tableAnswer){
        let message = tableAnswer[number]
        
        return message;
        }
        //if the tableAnswer didn't contain a key value pair, calculate the factorial
    
        else{
          if(number ==1){
            factorialTable.push({1:1})
            let message = 1;
            localStorage.setItem("factorialTableEmpty", JSON.stringify(factorialTable));
            messageCheck +=1;
            return message;
          }
          else{
            let number1 = number * (number-1);
            let answer = number1;
            for (let i=number-2; i>0; i--){
              let sum = answer * i
              answer = sum;
            }
    //adds the factorial to the lookup table and returns the answer
            factorialTable.push({[number]:answer})
            let message = answer;
    
            localStorage.setItem("factorialTableEmpty", JSON.stringify(factorialTable));
            messageCheck +=1;
            return message;
            }
          }
  }

    

  function howManyShufflesOld(cardFactorial2){
messageCheck = 0;
document.getElementById("cardInput2").style.display = "none";
const number = cardFactorial2.cardNumber2.value;
const shuffleAmount = findFactorialOld(number);
if (messageCheck == 0){
document.getElementById("resultCard3").textContent = number;
document.getElementById("resultCard4").textContent = shuffleAmount;
document.getElementById("resultInTable").style.display = "inline";
}
else{
document.getElementById("resultCard5").textContent = number;
document.getElementById("resultCard6").textContent = shuffleAmount;
document.getElementById("resultNotInTable").style.display = "inline";

}
}

function checkAnother(){
  document.getElementById("cardFact2").reset();
  document.getElementById("cardInput2").style.display = "inline";
  document.getElementById("resultInTable").style.display = "none";
  document.getElementById("resultNotInTable").style.display = "none";
  document.getElementById("resultEmpty").style.display = "none";
  
}

function clearTable(){
  localStorage.clear();
  location.reload();
 
}

//CHALLENGE 5 - HIDE THE CREDIT CARD DETAILS

//Function that hides credit card details
function hideCreditCard(numbers){
  const cardNumbers = numbers.toString(); //changes them to a string
  //Selects the last 4 digits and add them to variables
  const digit1=cardNumbers[12]
  const digit2=cardNumbers[13]
  const digit3=cardNumbers[14]
  const digit4=cardNumbers[15]
  
  const last4Digits= digit1 + digit2 + digit3 + digit4;
  const hiddenCardNumbers = `XXXX XXXX XXXX ${last4Digits}`
      return hiddenCardNumbers;
  }

//Function that is called when button clicked
function payment(paymentForm){
event.preventDefault();//Stops the window auto re-loading when butotn clicked
//Puts all of the form info into relevant variables
const cardNumber = paymentForm.cardNumber.value;
const firstName = paymentForm.firstName.value;
const lastName = paymentForm.lastName.value;
const address = paymentForm.address.value;
const county = paymentForm.county.value;
const postcode = paymentForm.postcode.value;
//Calls the function that will hide the credit card digits
const hiddenCardDetails = hideCreditCard(cardNumber);

console.log(hiddenCardDetails)

//Hides the input form
document.getElementById("orderInput").style.display = "none";
//Puts all of the information in the right places
document.getElementById("orderDate").textContent = dayToday;
document.getElementById("forename").textContent = firstName;
document.getElementById("surname").textContent = lastName;
document.getElementById("orderAddress").textContent = address;
document.getElementById("orderCounty").textContent = county;
document.getElementById("orderPostcode").textContent = postcode;
document.getElementById("hiddenCard").textContent = hiddenCardDetails;
//Displays the order summary with all inputted details
document.getElementById("orderSummary").style.display = "inline";
scrollTo(0,0) //Makes the window scroll back to the top of the page
}


