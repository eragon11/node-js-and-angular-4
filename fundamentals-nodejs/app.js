const fs = require('fs');
const os = require('os');
//fs.appendFile('greeting.txt',"Eragon world!");
const notes = require('./notes');

// var res = notes.addNote();
// console.log(res);
var user = os.userInfo();

//console.log("result" + notes.sum(3,4));

console.log(user.username);
// fs.appendFile('greeting.txt',"zoro World!",function(err){
//     if(err)
//     console.log("check the error");
// });

var command = process.argv[2];
// console.log(command);

if(command === 'add') {
    console.log("added a new note");
    notes.addNote();
}else if(command === 'list')
{    console.log("list notes");
notes.getAll();
}else if(command === 'read'){
    console.log("read a new note");
    notes.read();
}else if(command === 'remove'){
    console.log('remove a note');
    notes.remove();
}else{
    console.log('command not recognized');
}


