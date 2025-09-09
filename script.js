
function marks(score) {
    if (isNaN(score)) {
        return "Please enter a valid number"
    }else if (score > 100 || score < 0) {
        return "Marks must be between 0 and 100"
    }else if (score > 79) {
        return "A";
    }else if(score >= 60 && score <= 79) {
        return "B";
    }else if(score >=50 && score <=59) {
        return "C";
    }else if(score >=40 && score <=49) {
        return "D";
    }else if(score <40) {
        return "E";
    }
}

document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const score = parseInt(document.getElementById("bmm").value);
    const grade = marks(score);

    document.getElementById("gradeResult").innerText = `Grade: ${grade}`;
});

function speed(velocity) {
  if (velocity <= 70) {
    return "Ok";
  }else if (velocity >70 && velocity < 75) {
    return "points 0"
  }
  else if (velocity >= 75 && velocity < 80){
    return "Point: 1"; 
  }else if (velocity >= 80 && velocity < 85) {
    return "points: 2"
  }else if (velocity >= 85 && velocity < 90) {
    return "points: 3"
  }else if (velocity >= 90 && velocity < 95){
    return "Point: 4"; 
  }else if (velocity >= 95 && velocity < 100) {
    return "points: 5"
  }else if (velocity >= 100 && velocity < 105) {
    return "points: 6"
  }else if (velocity >= 105 && velocity < 110){
    return "Point: 7"; 
  }else if (velocity >= 110 && velocity < 115) {
    return "points: 8"
  }else if (velocity >= 115 && velocity < 120) {
    return "points: 9"
  }else if (velocity >= 120 && velocity < 125){
    return "Point: 10"; 
  }else if (velocity >= 125 && velocity < 130) {
    return "points: 11"
  }else if (velocity >= 130 && velocity < 135) {
    return "points: 12"
  }else if(velocity > 135) {
    return "License suspended"
  }
}

document.getElementById("detector").addEventListener("submit", function(event) {
    event.preventDefault();

    const velocity = parseInt(document.getElementById("mmw").value);
    const answer = speed(velocity);

    document.getElementById("speedResult").innerText = `Speed check: ${answer}`;
});