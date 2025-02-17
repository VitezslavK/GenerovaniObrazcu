function radekHvezdicek(pocetHvezdicek){
    let vystup = "";
    for (let i=1; i<=pocetHvezdicek; i++) {
        vystup +="*";
    }
    return vystup;
}
function trojuhelnik(){
    let vystup = "";
    for (let i=1; i<=10; i++){
        vystup += radekHvezdicek(i) + "<br>";
    }
    return vystup;
}
const btnTrojuhelnik = document.querySelector("#btnTrojuhelnik");
const vystup = document.querySelector("main");
btnTrojuhelnik.onclick = function(){
    vystup.innerHTML = trojuhelnik();
}
