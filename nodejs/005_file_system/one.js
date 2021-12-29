const fs = require('fs');

fs.readFile('./username.csv', 'utf8', (err, data) => { 
  data 
    .split('\n') 
    .slice(1) 
    .map(v => v.split(', ')) 
    .forEach(([ username, identifier, job ]) => { 
      fs.mkdir(`./${username}`, (err) => { 
        if (err) console.log(err); 
      }); 
      const text = `Username : ${username}\nIdentifier : ${identifier}\nJob : ${job}`; 
      fs.writeFile(`./${username}/userinfo.txt`, text, (err) => { 
        if (err) console.log(err); 
      }); 
    }); 

  if (err) console.log(err); 
});
