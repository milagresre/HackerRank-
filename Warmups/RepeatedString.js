let s = 'bbba'
let n = 11;

let bigString = "";

let qtd = Math.trunc(n/s.length);
let rest = (n % s.length)

let count = 0;
for (let a=0; a<s.length; a++){
    if(s[a]==='a'){
        count++
    }
}
let res = 0

for(let i = 0; i<rest;i++){
    if(s[i]==='a'){
        res++
    }
}

let totalOfAs = qtd*count+res;

