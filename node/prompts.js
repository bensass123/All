// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================


  var prompt = require("prompt");
  var colors = require("colors/safe");
  // 
  // Setting these properties customizes the prompt. 
  // 
  prompt.message = colors.rainbow("BAMAZON SHOPPING!");
  prompt.delimiter = colors.green("><");
 
  prompt.start();

  var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      password: {
        hidden: true
      }
    }
  };
 
  // 
  // Start the prompt 
  //
 
  // 
  // Get two properties from the user: email, password 
  // 
  prompt.get(schema, function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log('  password: ' + result.password);
  });
 
  // prompt.get({
  //   properties: {
  //     name: {
  //       description: colors.magenta("What is the id of the product you'd like to buy?")
  //     }
  //   }
  // }, function (err, result) {
  //   console.log(colors.cyan("You said your name is: " + result.name));
  // });

