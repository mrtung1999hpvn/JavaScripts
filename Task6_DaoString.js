const S = "Thanh Tung".split(' ')
var K=""
for(let i in S)
{
    K += S[i].split("").reverse().join("")
    K += " "
}

console.log(K.substring(0,K.length-1))

// Result : hnahT gnuT
