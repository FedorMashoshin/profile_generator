const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// rl.question('What do you think of Node.js? ', (answer) => {
//     rl.question('Name', (name) => {
//         console.log(`Thank you for your valuable feedback: ${answer}`);
  
//         rl.close();
//     });
    
//   });




rl.question('What\'s your name? ', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (power) =>{
               console.log(`Thank you for answers ${name}! Your online profile look like: \r\n
                  🔸 Your name : ${name},
                  🔸 Favourite activity: ${activity},
                  🔸 Music to listen: ${music},
                  🔸 Favourite meal: ${meal},
                  🔸 Favourite food: ${food},
                  🔸 Favourite sport: ${sport},
                  🔸 Super POWEEEER: ${power}
                `);
            rl.close();
            });
           });
        });
      });
    });
  });
});

