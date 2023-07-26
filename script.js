
var button = document.getElementById("myButton");
//getting the elements by ID's
var result = document.getElementById("adviceInput");

var resultNo = document.getElementById("adviceNumber");

//event listener to listen to the onclick event and fetch data from the api
button.addEventListener("click", function () {

    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(respObj => {
        displayData(respObj);
    })

    .catch( error => {
        console.error("Error fetching data:",error );
    });

}); 

//function to destructure the response object and update the element with data
function displayData (data) {
    let advice = data.slip.advice;
    let adviceId = data.slip.id;

    result.innerHTML = advice;
    resultNo.innerText = adviceId;
}