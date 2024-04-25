// // function calculateLuckyNumber(name) {
// //     // Convert the name to uppercase to ensure consistency
// //     name = name.toUpperCase();
    
// //     // Define an object to store numerical values for each letter
// //     var letterValues = {
// //         'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
// //         'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
// //         'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
// //     };
    
// //     // Initialize the sum of letter values
// //     var sum = 0;
    
// //     // Iterate through each letter of the name and sum up its numerical value
// //     for (var i = 0; i < name.length; i++) {
// //         var letter = name.charAt(i);
// //         // Check if the letter is in the letterValues object
// //         if (letter in letterValues) {
// //             sum += letterValues[letter];
// //         }
// //     }
    
// //     // Continue adding digits until a single-digit number is obtained
// //     while (sum > 9) {
// //         sum = Math.floor(sum / 10) + (sum % 10);
// //     }
    
// //     // Return the calculated lucky number
// //     return sum;
// // }

// // // Example usage:
// // var name = "John Doe";
// // var luckyNumber = calculateLuckyNumber(name);
// // console.log(name + "'s lucky number is: " + luckyNumber);
// function calculateLuckyNumber(name) {
//     // Convert the name to uppercase to ensure consistency
//     name = name.toUpperCase();
    
//     // Define an object to store numerical values for each letter
//     var letterValues = {
//         'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
//         'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
//         'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
//     };
    
//     // Initialize the sum of letter values
//     var sum = 0;
    
//     // Iterate through each letter of the name and sum up its numerical value
//     for (var i = 0; i < name.length; i++) {
//         var letter = name.charAt(i);
//         // Check if the letter is in the letterValues object
//         if (letter in letterValues) {
//             sum += letterValues[letter];
//         }
//     }
    
//     // Continue adding digits until a single-digit number is obtained
//     while (sum > 9) {
//         sum = Math.floor(sum / 10) + (sum % 10);
//     }
    
//     // Return the calculated lucky number
//     return sum;
// }

// // Prompt the user to enter their name
// var name = prompt("Enter your name:");

// // Calculate the lucky number based on the entered name
// var luckyNumber = calculateLuckyNumber(name);

// // Display the lucky number to the user
// alert("Hello, " + name + "! Your lucky number is: " + luckyNumber);

// document.getElementById("calculate-btn").addEventListener("click", function() {
//     var name = document.getElementById("name").value;
//     var luckyNumber = calculateLuckyNumber(name);
//     document.getElementById("result").textContent = "Hello, " + name + "! Your lucky number is: " + luckyNumber;
//   });
  
//   function calculateLuckyNumber(name) {
//     name = name.toUpperCase();
//     var letterValues = {
//       'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
//       'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
//       'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
//     };
//     var sum = 0;
//     for (var i = 0; i < name.length; i++) {
//       var letter = name.charAt(i);
//       if (letter in letterValues) {
//         sum += letterValues[letter];
//       }
//     }
//     while (sum > 9) {
//       sum = Math.floor(sum / 10) + (sum % 10);
//     }
//     return sum;
//   }
  
document.getElementById("calculate-btn").addEventListener("click", function() {
    console.log("Button clicked");
    var name = document.getElementById("name").value;
    console.log("Name entered:", name);
    var luckyNumber = calculateLuckyNumber(name);
    console.log("Lucky number calculated:", luckyNumber);
    document.getElementById("result").textContent = "Hello, " + name + "! Your lucky number is: " + luckyNumber;
  });
  
  function calculateLuckyNumber(name) {
    name = name.toUpperCase();
    var letterValues = {
      'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
      'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
      'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };
    var sum = 0;
    for (var i = 0; i < name.length; i++) {
      var letter = name.charAt(i);
      if (letter in letterValues) {
        sum += letterValues[letter];
      }
    }
    while (sum > 9) {
      sum = Math.floor(sum / 10) + (sum % 10);
    }
    return sum;
  }
  