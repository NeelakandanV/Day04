let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    let flags = JSON.parse(request.response);
    for(var i in flags){
    console.log(flags[i].flags);
    console.log(flags[i].flag);
    }


}


// Expected output for console.log(flags[0].flags);
//                     console.log(flags[0].flag);

//{png: 'https://flagcdn.com/w320/gp.png', svg: 'https://flagcdn.com/gp.svg'}
// 🇬🇵