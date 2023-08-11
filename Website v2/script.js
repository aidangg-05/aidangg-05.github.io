document.querySelector("#button").onclick = function(){

    const logo = document.querySelector("#name");
    const navlinks = document.querySelector(".navlinks");
    const button = document.querySelector("#button");
    
    
    
    logo.style.display ="none"
    
    
    
    navlinks.style.display = "inline"
    
    
    button.style.display ="none"
    
    console.log(centered.style)
    centered.style.display ="inline"
    }

 
   
  let data1 = 0;
  let data2 = 0;
  let data3 = 0;
  let data4 = 0;
  let data5 = 0;
  let data6 = 0;
  let data7 = 0;
  let data8 = 0;
  let data9 = 0;
  let data10 = 0;
  
 
  document.getElementById("counting1").innerText = data1;
 
  //creation of increment function
  function increment1() {
      data1 = data1 + 1;
      document.getElementById("counting1").innerText = data1;
  }
  //creation of decrement function
  function decrement1() {
    if (data1 > 0) {
      data1 = data1 - 1;
      document.getElementById("counting1").innerText = data1;
    } 
  }  
  


//printing default value of data that is 0 in h2 tag
document.getElementById("counting2").innerText = data2;
 
//creation of increment function
function increment2() {
    data2 = data2 + 1;
    document.getElementById("counting2").innerText = data2;
}
//creation of decrement function
function decrement2() {
  if (data2 > 0) {
    data2 = data2 - 1;
    document.getElementById("counting2").innerText = data2;
  }  
}  



document.getElementById("counting3").innerText = data3;
 
//creation of increment function
function increment3() {
    data3 = data3 + 1;
    document.getElementById("counting3").innerText = data3;
}
//creation of decrement function
function decrement3() {
  if (data3 > 0) {
    data3 = data3 - 1;
    document.getElementById("counting3").innerText = data3;
  }   
}  



document.getElementById("counting4").innerText = data4;
 
//creation of increment function
function increment4() {
    data4 = data4 + 1;
    document.getElementById("counting4").innerText = data4;
}
//creation of decrement function
function decrement4() {
  if (data4 > 0) {
    data4 = data4 - 1;
    document.getElementById("counting4").innerText = data4;
  }  
}  




document.getElementById("counting5").innerText = data5;
 
//creation of increment function
function increment5() {
    data5 = data5 + 1;
    document.getElementById("counting5").innerText = data5;
}
//creation of decrement function
function decrement5() {
  if (data5 > 0){
    data5 = data5 - 1;
    document.getElementById("counting5").innerText = data5;
  }
}







document.getElementById("counting6").innerText = data6;
 
//creation of increment function
function increment6() {
    data6 = data6 + 1;
    document.getElementById("counting6").innerText = data6;
}
//creation of decrement function
function decrement6() {
  if (data6 > 0) {
    data6 = data6 - 1;
    document.getElementById("counting6").innerText = data6;
  }  
}  



//printing default value of data that is 0 in h2 tag
document.getElementById("counting7").innerText = data7;

//creation of increment function
function increment7() {
  data7 = data7 + 1;
  document.getElementById("counting7").innerText = data7;
}
//creation of decrement function
function decrement7() {
  if (data7 > 0) {
    data7 = data7 - 1;
    document.getElementById("counting7").innerText = data7;
  }  
}  



document.getElementById("counting8").innerText = data8;

//creation of increment function
function increment8() {
  data8 = data8 + 1;
  document.getElementById("counting8").innerText = data8;
}
//creation of decrement function
function decrement8() {
  if (data8 > 0) {
    data8 = data8 - 1;
    document.getElementById("counting8").innerText = data8;
  }   
}  



document.getElementById("counting9").innerText = data9;

//creation of increment function
function increment9() {
  data9 = data9 + 1;
  document.getElementById("counting9").innerText = data9;
}
//creation of decrement function
function decrement9() {
  if (data9 > 0) {
    data9 = data9 - 1;
    document.getElementById("counting9").innerText = data9;
  }  
}  




document.getElementById("counting10").innerText = data10;

//creation of increment function
function increment10() {
  data10 = data10 + 1;
  document.getElementById("counting10").innerText = data10;
}
//creation of decrement function
function decrement10() {
  if (data10 > 0) {
    data10 = data10 - 1;
    document.getElementById("counting10").innerText = data10;
  }
}



