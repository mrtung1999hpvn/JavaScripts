const data = 
[ 
  {
    ma_doi_tuong : "LDT0001"
  },
  {
    ma_doi_tuong : "LDT0003"
  },
  {
    ma_doi_tuong : "LDT0005"
  }
]

const MaLDT = (data)=>{
  const Mang = []
  let MAX = 0
  data.map(
    (x,index)=>
    {
      (index+1) === parseInt(x.ma_doi_tuong.match(/\d/g).join("")) ? '' : Mang.push(index+1)
      MAX < parseInt(x.ma_doi_tuong.match(/\d/g).join("")) ? MAX = parseInt(x.ma_doi_tuong.match(/\d/g).join("")) : 0
    }
  )
  return "LDT" + "0".repeat(4-(Mang.length > 0 ? Mang[0] : MAX+1).toString().length)+ (Mang.length > 0 ? Mang[0] : MAX+1)
}
console.log(MaLDT(data))
