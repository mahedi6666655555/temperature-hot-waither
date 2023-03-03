let api_key=`b8081cd14c7b9c8481efccdf61af3252`

let loddata=city=>{

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

fetch(url)
.then(res=>res.json())
.then((data)=>showdata(data))


}


let showdata =data=>{

    let get=document.getElementById("temp")
    console.log(data.main.temp);
        get.innerText=data.main.temp



}

document.getElementById("btn").addEventListener("click",function(){

    let get3=document.getElementById("input")
    let final2=get3.value

    let get4=document.getElementById("city").innerText=final2
      
loddata(final2)

})



loddata("dhaka`")