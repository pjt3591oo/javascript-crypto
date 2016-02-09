function crypto(txt){
    var b='';
    var utc = new Date().getTime()%10
    var nul="abc";
    b+=utc;

    for(var i in txt){
        var ch;
        if(ch=stringCheck(txt[i])){ //문자
            b+=StringToNum(txt[i]);
        }else{ // 숫자
            b+=NumToString(txt[i]);
        }
        if(!(utc % i)){
            b+=nul;
        }
    }
    return  b;
}

function stringCheck(txt){
    return ((txt.charCodeAt(0)>=65) && (txt.charCodeAt(0)<=122)) ? true : false ; // string일 경우 true반환
}

function StringToNum(txt){
    //console.log(txt.charCodeAt(0)+5);
    return (txt.charCodeAt(0)+5);
}

function NumToString(txt){
    //console.log(String.fromCharCode(parseInt(txt)+5));
    return ( String.fromCharCode(parseInt(txt)+5));
}

console.log(crypto("asdf7dc9ds"));
console.log(crypto(""));