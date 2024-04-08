function calculateAge() {
    // Get the birthdate value from the input field
    var birthdate = document.getElementById('birthdate').value;

    // Create Date objects for birthdate and current date
    var birthDateObj = new Date(birthdate);
    var currentDateObj = new Date();

    // Calculate the difference in milliseconds between the two dates
    var timeDifference = currentDateObj - birthDateObj;

    // Calculate age in years
    var age = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));

    // Create a new paragraph element for the result
    var resultElement = document.createElement('p');

    // Set the result text and style
    resultElement.innerHTML = 'Your age is: <span style="color: #ff6600; font-weight: bold;">' + age + ' years</span>';
    resultElement.style.marginTop = '5px'; // Add margin after 5 lines
    resultElement.style.color = '#333'; // Change text color
    resultElement.style.fontWeight = 'bold'; // Make text bold

    // Append the result element to the container
    document.getElementById('result').appendChild(resultElement);
}
