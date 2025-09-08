
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

    document.getElementById("result").innerText = `Grade: ${grade}`;
});