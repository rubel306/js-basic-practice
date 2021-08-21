function grade(marks){
    if(marks >= 90){
        console.log("Your grade is: A+");
    } else if(marks >= 70){
        console.log("Your grade is: A");
    } else if(marks >= 60){
        console.log("Your result is: A-");
    } else if (marks >= 50){
        console.log("Your result is: B");
    }else{
        console.log("Opps !!! You are Fail !!!!");
    }
}
grade(91);
