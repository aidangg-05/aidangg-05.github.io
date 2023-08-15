var total = parseInt(localStorage.getItem("total")) || 0;

console.log(total)

document.getElementById("Total").innerText = total + "+ 4 (Delivery fee)";

document.getElementById("Total2").innerText = total+4;