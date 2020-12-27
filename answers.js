
function firstWord(){
    var ans1 = document.getElementById("firstword").value;
    if (ans1 == "spacemonkey"){
        document.getElementById("status").textContent = "Congratulations"
        window.location.href = "secondstage.html"
    }else{
        document.getElementById("status").textContent = "Try again"
        setInterval(function(){document.getElementById("status").textContent = ""},1000)
    }
}

function secondWord(){
    var ans2 = document.getElementById("secondword").value;
    if (ans2 == "ice"){
        document.getElementById("status").textContent = "Congratulations"
        window.location.href = "thirdonthird.html"  
    }else{
        document.getElementById("status").textContent = "Try again"
        setInterval(function(){document.getElementById("status").textContent = ""},1000)
        
    }
}

function thirdWord(){
    var ans3 = document.getElementById("thirdword").value;
    if (ans3 == "age"){
        document.getElementById("status").textContent = "Congratulations"
        window.location.href = "https://vm.tiktok.com/ZMJG22jB1/"  
    }else{
        document.getElementById("status").textContent = "Try again"
        setInterval(function(){document.getElementById("status").textContent = ""},1000)
        
    }
}