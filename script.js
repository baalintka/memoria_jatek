const lista=['kepek/kep1.jpg','kepek/kep2.jpg','kepek/kep3.jpg','kepek/kep4.jpg','kepek/kep5.jpg','kepek/kep6.jpg'];
let db=0;
const KIVALASZTOTTEKEPEK=[]
$(function(){
    
   const FELSOELEM=$(`#felso`);
   
   osszeAllit();
    let tartalom=osszeAllit();
    FELSOELEM.append(tartalom);
    const FELSOKEPEK=$("#felso img");
    FELSOKEPEK.on("click",keprekattintas);

});

function keprekattintas(event){
    const aktKep=event.target;
    console.log(aktKep.id);
    console.log($(aktKep).attr("id"));

    aktKep.src=lista[aktKep.id]
    KIVALASZTOTTEKEPEK.push($(aktKep).attr("id"));
    db++;
    if(db==2){
        db=0;
        visszafordit()
        
    }
}

function visszafordit(){
    console.log(KIVALASZTOTTEKEPEK)
    setTimeout(function(){
        const FELSOKEPEK=$("felso img");
        let aktKep= FELSOKEPEK.eq(KIVALASZTOTTEKEPEK[0])
        console.log(aktKep);
        $(aktKep).attr("src","kepek/hatter.jpg")
        aktKep= FELSOKEPEK.eq(KIVALASZTOTTEKEPEK[1])
        $(aktKep).attr("src","kepek/hatter.jpg");
        KIVALASZTOTTEKEPEK.pop();
        KIVALASZTOTTEKEPEK.pop();
    },1000);
}

function osszeAllit(){
    
    let txt="";
    for (let index = 0; index < lista.length; index++) {
         txt+=`<div><img src="kepek/hatter.jpg" id="${index}" alt=""></div>`;
        
     
    }
    console.log(txt);
    return txt;
 }
