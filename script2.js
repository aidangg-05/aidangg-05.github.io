
document.querySelector("#button").onclick = function(){

    const logo = document.querySelector("#goofy");
    const navlinks = document.querySelector(".navlinks");
    const button = document.querySelector("#button");
    
    
    
    logo.style.display ="none"
    
    
    
    navlinks.style.display = "inline"
    
    
    button.style.display ="none"
    
    console.log(centered.style)
    centered.style.display ="inline"
    }



    var data1 = parseInt(localStorage.getItem("data1")) || 0;
    var data2 = parseInt(localStorage.getItem("data2")) || 0;
    var data3 = parseInt(localStorage.getItem("data3")) || 0;
    var data4 = parseInt(localStorage.getItem("data4")) || 0;
    var data5 = parseInt(localStorage.getItem("data5")) || 0;
    var data6 = parseInt(localStorage.getItem("data6")) || 0;
    var data7 = parseInt(localStorage.getItem("data7")) || 0;
    var data8 = parseInt(localStorage.getItem("data8")) || 0;
    var data9 = parseInt(localStorage.getItem("data9")) || 0;
    var data10 = parseInt(localStorage.getItem("data10")) || 0;


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
            
            var outputContainer = document.getElementById("output");

            // Create an array of your data variables
            var dataVariables = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10];
       
            // Loop through the data variables and display those with values greater than 0
            // Initialize the total variable
            calculatedvalue = parseInt(localStorage.getItem("total")) || 0;
            var total = 0;

            // Loop through the data variables and display calculated values, while accumulating into total
            // Assuming your existing code here...

// Create a flex container to hold the list items
var flexContainer = document.createElement("div");
flexContainer.className = "flex-container"; // Apply a class for styling

// Loop through the data variables and display calculated values, while accumulating into total
for (var i = 0; i < dataVariables.length; i++) {
    if (dataVariables[i] > 0) {
        var variableName = names[i];
        var variableValue = dataVariables[i];
        var calculatedValue = variableValue * prices[i];

             // Add the calculated value to the total
             total += calculatedValue;

        // Create a new paragraph element to display the calculated content
        var variableParagraph = document.createElement("p");
        variableParagraph.textContent = variableName + ": " + "Quantity x" + variableValue + " - " + "$" + calculatedValue;

        // Append the paragraph element to the flex container
        flexContainer.appendChild(variableParagraph);
    }
}

            // Display the total value
            var totalParagraph = document.createElement("p");
            totalParagraph.textContent = "Total: $" + total;
            flexContainer.appendChild(totalParagraph);

            // Append the flex container to the output container
            outputContainer.appendChild(flexContainer);

            console.log('Total:', total);


           calculatedvalue = parseInt(localStorage.getItem("total")) || 0;
           localStorage.setItem("total", total);



           console.log(calculatedValue)

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

      
        
