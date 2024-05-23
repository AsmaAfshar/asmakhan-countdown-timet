#! /usr/bin/env node
1//Countdown Timer Project
//In this project, you will build a countdown timer using the date module.
//date module install cammand
//npm install date-fns


// start coding: step # 1
import { DifferenceInSecondsOptions, differenceInSeconds}from "date-fns";

// funcrtion for count down second
function* countdownTimer (second: number) {
    // while loop
    while(second > 0){
        yield second;
        second--;
    }
}

// step 2: counter initialization

let timeIterator = countdownTimer(10);

// function to create a count down timer
function displayCountdown(){
    
    // value below 10
    let result = timeIterator.next();
    
    // if else condition apply

    if(!result.done) {
        //current date and time calls
        const now = new Date();

        // calculate  minutes in seconds in time
        const countdownTime = new Date(now.getTime() + (result.value * 1000))

        //calculate remaining seconds in time
        const remainingSeconds = differenceInSeconds(countdownTime ,now)
        console.log(`Remaining Seconds: ${remainingSeconds}`)

        setTimeout(displayCountdown, 1000)      // 1 seconds is equal to 1000 ms
    } else {
        //display result contdown complete
        console.log("Countdown Complete!")
    }
}

// invoke 
displayCountdown();
