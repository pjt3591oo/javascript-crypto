function crypto(txt){
    var b='';
    var utc = new Date().getTime()%10;

    var nul="abc";
    b+=utc;
    console.log(utc);
    for(var i in txt){
        var ch;
        if(ch=stringCheck(txt[i])){ //문자
            if(StringToNum(txt[i])/100<1) {
                b+='0'+StringToNum(txt[i]).toString();
            }
            else{
                b+=StringToNum(txt[i]);
            }
        }else{ // 숫자
                b+=NumToString(txt[i]);
        }
        if(!(i%utc)){
            console.log('t', i);
            b+=nul;
        }

    }
    return  b;
}

function decrypto(txt){
    var utc = parseInt(txt[0]);
    var MNumCount=0;
    var b='';
   // console.log(utc);

    for(var i in txt){
        if(i>0){
            if(stringCheck(txt[i])){ //문자
                b+=DestringToNum(txt[i]);
            }else{                  // 숫자
                if(MNumCount<3){ MNumCount++; continue;}
                b+=DeNumToString(txt[i]);
            }
        }else{continue;}
    }
    return b;
}

function stringCheck(txt){
    return ((txt.charCodeAt(0)>=65) && (txt.charCodeAt(0)<=122)) ? true : false ; // string일 경우 true반환
}

function StringToNum(txt){
    //console.log(txt.charCodeAt(0)+5);
    return (txt.charCodeAt(0)+5);
}

function DestringToNum(txt){
    //console.log(txt, txt.charCodeAt(0)-5);
    return (txt.charCodeAt(0)-5);
}

function NumToString(txt){
    //console.log(String.fromCharCode(parseInt(txt)+5));
    return ( String.fromCharCode(parseInt(txt)+5));
}

function DeNumToString(txt){
    //console.log(String.fromCharCode(parseInt(txt)-5));
    return ( String.fromCharCode(parseInt(txt)-5));
}
console.log(crypto("Asdf7dc9ds"));


//console.log(decrypto(crypto("asdf7dc9ds")));