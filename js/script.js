function akan(){
  var year = parseFloat(document.getElementById("year").value);
  console.log(year);

  var month = parseFloat(document.getElementById("month").value);
  console.log(month);

  var day = parseFloat(document.getElementById("day").value);
  console.log(day);
  
  var century = (year/100);
  console.log(century);
  
  var birthday = Math.round( ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7) ;
  console.log(birthday);

  var gender = document.getElementById("gender").value;
  console.log(gender);

  var male= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  
  var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa", "Afua","Ama"];

  if (birthday ===1 && gender==="male"){
    document.getElementById("display").innerHTML = male [1];

  }
  if(birthday===0 && gender ==="male") {
    document.getElementById("display").innerHTML = male [0]; 
  }
  if(birthday===2 && gender ==="male") {
    document.getElementById("display").innerHTML = male [2];
  }
  if(birthday===3 && gender==="male") {
    document.getElementById("display").innerHTML = male [3];
  }
  if(birthday===4 && gender==="male") {
    document.getElementById("display").innerText = male [4];
  }

  
}