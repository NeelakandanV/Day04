let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    let details = JSON.parse(request.response);
    for(var data in details){
       console.log(details[data].name);
       console.log(details[data].region);
       console.log(details[data].subregion);
       console.log(details[data].population);
    }
}


// Expected output for console.log(details[2].name);
//                       console.log(details[2].region);
//                       console.log(details[2].subregion);
//                       console.log(details[2].population);


//{common: 'Finland', official: 'Republic of Finland', nativeName: {…}}
// Europe
// Northern Europe
// 5530719