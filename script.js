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

    const apiKey = 'patZUP6NI3REMtU1M.1234d800333a4aa3422d6bec1ea74b745cd6d9e85c95d012cabd968cf4f65eb8'; // Replace with your actual API key
    const baseId = 'appSBMGyL00A7V3mT'; // Replace with your actual base ID
    const endpoint = `https://api.airtable.com/v0/${baseId}/tbl60wfcu3gEokuPT`; // Replace TableName with the name of your table

    // Make the API request
    fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(data => {
            // Extract data from the records
            const records = data.records;
            
            // Initialize arrays to store each column's dataa
            const tenDigits = [];
            const names = [];
            const prices = [];

            // Loop through the records and store data in variables
            records.forEach(record => {
                const fields = record.fields;
                tenDigits.push(fields.tendigit);
                names.push(fields.Name);
                prices.push(fields.price);
            });

            // Now you have 'tenDigits', 'names', and 'prices' arrays
            // containing each piece of data in its own variable
            console.log('Ten Digits:', tenDigits);
            console.log('Names:', names);
            console.log('Prices:', prices);
            
            const nameElement1 = document.getElementById('name1');
            nameElement1.innerHTML = names[0];

            const nameElement2 = document.getElementById('name2');
            nameElement2.innerHTML = names[1];
            
            const nameElement3 = document.getElementById('name3');
            nameElement3.innerHTML = names[2];

            const nameElement4 = document.getElementById('name4');
            nameElement4.innerHTML = names[3];

            const nameElement5 = document.getElementById('name5');
            nameElement5.innerHTML = names[4];

            const nameElement6 = document.getElementById('name6');
            nameElement6.innerHTML = names[5];

            const nameElement7 = document.getElementById('name7');
            nameElement7.innerHTML = names[6];

            const nameElement8 = document.getElementById('name8');
            nameElement8.innerHTML = names[7];

            const nameElement9 = document.getElementById('name9');
            nameElement9.innerHTML = names[8];
            
            const nameElement10 = document.getElementById('name10');
            nameElement10.innerHTML = names[9];


            const priceElement1 = document.getElementById('price1');
            priceElement1.innerHTML = prices[0];

            const priceElement2 = document.getElementById('price2');
            priceElement2.innerHTML = prices[1];
            
            const priceElement3 = document.getElementById('price3');
            priceElement3.innerHTML = prices[2];

            const priceElement4 = document.getElementById('price4');
            priceElement4.innerHTML = prices[3];

            const priceElement5 = document.getElementById('price5');
            priceElement5.innerHTML = prices[4];

            const priceElement6 = document.getElementById('price6');
            priceElement6.innerHTML = prices[5];

            const priceElement7 = document.getElementById('price7');
            priceElement7.innerHTML = prices[6];

            const priceElement8 = document.getElementById('price8');
            priceElement8.innerHTML = prices[7];

            const priceElement9 = document.getElementById('price9');
            priceElement9.innerHTML = prices[8];
            
            const priceElement10 = document.getElementById('price10');
            priceElement10.innerHTML = prices[9];




        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
   
  
 
  
  // Retrieve the stored value of data1 from localStorage
var data1 = parseInt(localStorage.getItem("data1")) || 0;

// Display the initial value of data1
document.getElementById("counting1").innerText = data1;

// Creation of increment function
function increment1() {
    data1 = data1 + 1;
    document.getElementById("counting1").innerText = data1;
    // Store the updated value of data1 in localStorage
    localStorage.setItem("data1", data1);
}

// Creation of decrement function
function decrement1() {
    if (data1 > 0) {
        data1 = data1 - 1;
        document.getElementById("counting1").innerText = data1;
        // Store the updated value of data1 in localStorage
        localStorage.setItem("data1", data1);
    }
}



//printing default value of data that is 0 in h2 tag
var data2 = parseInt(localStorage.getItem("data2")) || 0;

// Display the initial value of data1
document.getElementById("counting2").innerText = data2;

// Creation of increment function
function increment2() {
    data2 = data2 + 1;
    document.getElementById("counting2").innerText = data2;
    // Store the updated value of data1 in localStorage
    localStorage.setItem("data2", data2);
}

// Creation of decrement function
function decrement2() {
    if (data2 > 0) {
        data2 = data2 - 1;
        document.getElementById("counting2").innerText = data2;
        // Store the updated value of data1 in localStorage
        localStorage.setItem("data2", data2);
    }
}



var data3 = parseInt(localStorage.getItem("data3")) || 0;
document.getElementById("counting3").innerText = data3;

function increment3() {
    data3 = data3 + 1;
    document.getElementById("counting3").innerText = data3;
    localStorage.setItem("data3", data3);
}

function decrement3() {
    if (data3 > 0) {
        data3 = data3 - 1;
        document.getElementById("counting3").innerText = data3;
        localStorage.setItem("data3", data3);
    }
}



var data4 = parseInt(localStorage.getItem("data4")) || 0;
document.getElementById("counting4").innerText = data4;

// Creation of increment and decrement functions for data4
function increment4() {
    data4 = data4 + 1;
    document.getElementById("counting4").innerText = data4;
    localStorage.setItem("data4", data4);
}

function decrement4() {
    if (data4 > 0) {
        data4 = data4 - 1;
        document.getElementById("counting4").innerText = data4;
        localStorage.setItem("data4", data4);
    }
}




var data5 = parseInt(localStorage.getItem("data5")) || 0;
document.getElementById("counting5").innerText = data5;

function increment5() {
    data5 = data5 + 1;
    document.getElementById("counting5").innerText = data5;
    localStorage.setItem("data5", data5);
}

function decrement5() {
    if (data5 > 0) {
        data5 = data5 - 1;
        document.getElementById("counting5").innerText = data5;
        localStorage.setItem("data5", data5);
    }
}







var data6 = parseInt(localStorage.getItem("data6")) || 0;
document.getElementById("counting6").innerText = data6;

function increment6() {
    data6 = data6 + 1;
    document.getElementById("counting6").innerText = data6;
    localStorage.setItem("data6", data6);
}

function decrement6() {
    if (data6 > 0) {
        data6 = data6 - 1;
        document.getElementById("counting6").innerText = data6;
        localStorage.setItem("data6", data6);
    }
}

// Repeat the above pattern for data7 and counting7
var data7 = parseInt(localStorage.getItem("data7")) || 0;
document.getElementById("counting7").innerText = data7;

function increment7() {
    data7 = data7 + 1;
    document.getElementById("counting7").innerText = data7;
    localStorage.setItem("data7", data7);
}

function decrement7() {
    if (data7 > 0) {
        data7 = data7 - 1;
        document.getElementById("counting7").innerText = data7;
        localStorage.setItem("data7", data7);
    }
}

// Repeat the above pattern for data8 and counting8
var data8 = parseInt(localStorage.getItem("data8")) || 0;
document.getElementById("counting8").innerText = data8;

function increment8() {
    data8 = data8 + 1;
    document.getElementById("counting8").innerText = data8;
    localStorage.setItem("data8", data8);
}

function decrement8() {
    if (data8 > 0) {
        data8 = data8 - 1;
        document.getElementById("counting8").innerText = data8;
        localStorage.setItem("data8", data8);
    }
}

// Repeat the above pattern for data9 and counting9
var data9 = parseInt(localStorage.getItem("data9")) || 0;
document.getElementById("counting9").innerText = data9;

function increment9() {
    data9 = data9 + 1;
    document.getElementById("counting9").innerText = data9;
    localStorage.setItem("data9", data9);
}

function decrement9() {
    if (data9 > 0) {
        data9 = data9 - 1;
        document.getElementById("counting9").innerText = data9;
        localStorage.setItem("data9", data9);
    }
}




var data10 = parseInt(localStorage.getItem("data10")) || 0;
document.getElementById("counting10").innerText = data10;

function increment10() {
    data10 = data10 + 1;
    document.getElementById("counting10").innerText = data10;
    localStorage.setItem("data10", data10);
}

function decrement10() {
    if (data10 > 0) {
        data10 = data10 - 1;
        document.getElementById("counting10").innerText = data10;
        localStorage.setItem("data10", data10);
    }
}



// Add an event listener to the button
document.getElementById("clearLocalStorageButton").addEventListener("click", function() {
    // Clear all localStorage variables
    localStorage.clear();

    // Optionally, you can also reset the displayed content on your page
    // Here, we'll just reload the page
    window.location.reload();
});

document.getElementById("clearLocalStorageButton").addEventListener("click", function() {
    // Clear all localStorage variables
    localStorage.clear();

    // Optionally, you can also reset the displayed content on your page
    // Here, we'll just reload the page
    window.location.reload();
});
