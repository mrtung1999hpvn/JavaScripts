// Run test https://playcode.io/
// Xóa hết code mặc đinh paste để chạy

const input = "ABC"         // Input đầu vào
let m = input.length + 4    // biến let = input.length + 4 (lấy độ dài của dòng giữa | biến string .length tính độ dài của chuỗi)
console.log("*".repeat(m))  // "*".repeat(m)  ( "*".repeat(n)   lặp lại * string tương ứng với n lần )
console.log("* "+input+" *")
console.log("*".repeat(m))


//      const không thể khởi tạo lại giá trị cho biết (không nhất thiết phải nằm trong function)
//      let không thể khởi tạo lại giá trị cho biết 
//      const input ="abd"
//      input ="abab"    -->Lỗi
//      var có thể tái khởi tạo lại (nằm trong function)


// -- TEST 0 : ABC
// -- *******
// -- * ABC *
// -- *******

// -- TEST 1 : Tung
// -- ********
// -- * Tung *
// -- ********
