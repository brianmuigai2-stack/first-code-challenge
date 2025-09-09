let score = parseInt(prompt("Enter marks (0-100):"));{}
if (score <0 || score >100) {
  alert("Enter a number betweeen 1-100");
}else{
 
  let grade;
     if (score > 79) {
        grade= "A";
    }else if(score >= 60 && score <= 79) {
        grade= "B";
    }else if(score >=50 && score <=59) {
        grade= "C";
    }else if(score >=40 && score <=49) {
        grade= "D";
    }else if(score <40) {
        grade= "E";
    }
    alert(`Grade: ${grade}`);
  }

  

