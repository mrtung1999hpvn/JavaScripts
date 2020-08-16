 // Bài toán tăng biến bên trong string
var Input = ",,MLT0001"
var K =""
for(let i in Input) //chạy từ đầu đến cuối
{   // Check từ đầu đến cuối xem [0-9] thì K += lấy giá trị số
    ((/^[0-9- ]*$/).test(Input[i])) ? K+=Input[i] : ''
}
// K => số đã cắt  0001
// repeat là lặp lại giá trị 0 
// 0002  0 lặp lại = 4 - (1 + 1).length = 3
// 0010  vd 0 lặp lại = 4 – (9+1 = 10).toString().length = 2
// 0111  vd 0 lặp lại = 4 – (99 + 1 = 100).toString().length = 1
// 1111 => 0 lặp lại = 4 - (số tìm được + 1).toString().length 
// 

K = "MLT"+"0".repeat(4-((parseInt(K)+1)).toString().length) + ((parseInt(K)+1))
// K = 				000                            2

console.log(K)
// Kết quả : 0002
