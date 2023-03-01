const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
let obj1 = {
    "name" : "person1",
    "age" : "5"
};
let obj2 = {
    "age" : "5",
    "name" : "person1"
};

//console.log(_.isEqual(obj1,obj2));

for(var i in obj[1]){

    if(obj1[i]===obj2[i]){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}

  
});

// Expected output

// yes