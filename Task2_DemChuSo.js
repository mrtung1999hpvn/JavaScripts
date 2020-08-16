var Input = ",,MLT1873";
var KiTu = Chu = So = 0
for(let i in Input)
{
    ((/^[0-9]*$/).test(Input[i])) ? So++ :
    ((/^[a-zA-Z]*$/).test(Input[i])) ? Chu++ : KiTu++
}
console.log("Kí tự : "+KiTu)
console.log("Chữ số : "+Chu)
console.log("Số : "+So)
