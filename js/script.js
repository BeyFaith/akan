function akan(){
  var year = parseFloat(document.getElementById("year").value);
  console.log(year);

  var month = parseFloat(document.getElementById("month").value);
  console.log(month);

  var day = parseFloat(document.getElementById("day").value);
  console.log(day);
  
  var century = year/100+1;
  console.log(century);
  
  var birthday = Math.round( ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
  console.log(birthday);

  var gender = document.getElementById("gender").value;
  console.log(gender);

  var male= ["Kwasi", "Kwando", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  
  var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa", "Afua","Ama"];

  
}