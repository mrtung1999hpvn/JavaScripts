// Tìm giá trị tiếp theo của mã LDT

  const mang = [ // Mảng Json
    {
      ma_loai_doi_tuong : "LDT0001",
      ten_loai_doi_tuong : "C",
    },
    {
      ma_loai_doi_tuong : "LDT0003",
      ten_loai_doi_tuong : "B",
    },
    {
      ma_loai_doi_tuong : "LDT0004",
      ten_loai_doi_tuong : "A",
    }
  ]
 

const MaLDT = (str) =>{
        const testma = [];var vttestma = 0
        const Input = [];
        var MAX = 0;var K ="";
        for(let i=0;i<str.length;i++)
        {
          K = str[i].ma_loai_doi_tuong

          for(let j=0;j<K.length;j++)
          {
              if(Input[i]==null) (Input[i] = "")
              else{
                  (/^[1-9]*$/).test(K[j]) ? Input[i] += K[j] : Input[i]+=''
              }
          }
          if(MAX < parseInt(Input[i])) MAX = parseInt(Input[i])
        }
        Input.sort()
        for(let i =0;i < Input.length-1;i++)
        {
          for(let j=0;j <= parseInt(Input[Input.length-1]);j++)
          {
              if(Input[i] != j && Input[i+1] == j+1)
              {
                testma[vttestma] = Input[i]
                vttestma++
              }
              
          }
        }
        
        if(testma.length===0)
        {// Giống câu bài toán đầu tiên
          return "LDT" + "0".repeat(4-(MAX+1).toString().length)+ (MAX+1)
        }
        else{
          return "LDT" + "0".repeat(4-(parseInt(testma[0])+1).toString().length)+ ((parseInt(testma[0])+1))
        }
  }

 console.log(MaLDT(mang))
