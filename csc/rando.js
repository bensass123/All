  var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];


  var random_value = stuff[ Math.ceil( Math.random() * 14 ) ];


  var findit = () => {
      for (var i = 0; i <stuff.length; i++) {
          console.log(i +' - '+new Date());
          if (stuff[i]=== random_value) {
              console.log('Stuff index: ' + i + '\n' + 'Rando Value: ' + random_value);
              break;
          }
      }
  }

  var findit2 = () => {
      for (i in stuff)
       {
          console.log(i +' - '+new Date());
          if (stuff[i]=== random_value) {
              console.log('Stuff index: ' + i + '\n' + 'Rando Value: ' + random_value);
              
          }
      }
  }

  findit2();