function fce(pocetHvezdicek){
    let vystup = "";
    for (let i=1; i<=pocetHvezdicek; i++) {
        vystup +="*";
    }
    return vystup;
}
function ctverec(){
    let vystup = "";
    for (let i=1; i<=10; i++){
        vystup += fce(i) + "\n";
    }
    return vystup;
}
console.log(ctverec());