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

const MaTK = (data)=>{
	const Mang = []
	if(data.length===0)
	{
		return "LDT0001"
	}
	else{
		data.map(
			(x)=>{
				Mang.push(parseInt(x.ma_doi_tuong.match(/\d/g).join("")))
			}
		)
		console.log(Mang)
		Mang.sort(function(a, b){return b - a});
		return "LDT" + "0".repeat(8-((Mang[0]+1).toString().length)) +(Mang[0]+1).toString()
	}
  }
console.log(MaTK(data))
