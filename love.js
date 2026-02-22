let dataTracked=[
    {
        value:"ليه بس كده يا ماما ",
        leftOrRight:150,
        topOrBottom:150,
    },
    {
        value:"لازم تبقي زعلانه مني ",
        leftOrRight:-120,
        topOrBottom:-150,
    },
    {
        value:"البت رضوي حراميه",
        leftOrRight:135,
        topOrBottom:140,
    },
    {
        value:"وياسين اهبل",
        leftOrRight:-110,
        topOrBottom:-160,
    },
]
let counter=0; 
let ignore=document.querySelector(".ignore")
let accept=document.querySelector(".accept")
ignore.onmouseenter=()=>{
    if(counter===4){
        ignore.style.display="none"
        accept.innerHTML="مفيش اختيار تاني غيره اه"
        return
    }else{
        ignore.style.cssText=`transform: translate(${dataTracked[counter].leftOrRight}px,${dataTracked[counter].topOrBottom}px); position:absolute`
        ignore.innerHTML=dataTracked[counter].value
        counter++
    }


}
console.log(ignore)