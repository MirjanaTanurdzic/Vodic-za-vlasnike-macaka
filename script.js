function pretrazi() {
    var unos=document.getElementById("pretraga").value.toLowerCase();
        if(unos.indexOf("pocetna")!=-1){
        window.location.href="index.html";
        alert("Dobro došli na sajt Život sa mačkom");
    }
    else if(unos.indexOf("za nove vlasnike")!=-1){
        window.location.href="novi_vlasnici.html";
        alert("Dobro došli na sajt Život sa mačkom-Za nove vlasnike");
    }
    else if(unos.indexOf("igracke")!=-1){
        window.location.href="zabava.html";
        alert("Dobro došli na sajt Život sa mačkom-Igračke i rekreacija");
    }
    else if(unos.indexOf("oprema")!=-1){
        window.location.href="oprema.html";
        alert("Dobro došli na sajt Život sa mačkom-Oprema i moda");
    }
    else if(unos.indexOf("kontakt")!=-1){
        window.location.href="kontakt.html";
        alert("Dobro došli na sajt Život sa mačkom-Kontakt podaci");
    }
}
function ispisatiOpcije(klik) {
    var nOpcija=["Kontakt","Oprema","Igracke","Za nove vlasnike","Pocetna"];
    nOpcija.reverse();
    var dOpcije=document.getElementById("opcije");
    if (klik=="Klikni") {
    dOpcije.style.display = "block";
    var ispis="<h3>Moguće opcije unosa:</h3>";
    ispis+="<ul>"
    for(var i=0; i<nOpcija.length; i++){
        ispis+="<li>"+nOpcija[i]+"</li>";
    }
    ispis+="</ul>";

    dOpcije.innerHTML=ispis;
    }
}
function skloniOpcije() {
    var dOpcije=document.getElementById("opcije");
    dOpcije.style.display = "none";
}
function ubaciPodatke() {
    var dodaj=document.getElementById("dodaj");
    dodaj.style.borderRadius="50px";
    dodaj.style.fontSize="17px";
    var ip=document.getElementById("imeprezime").value;
    var e=document.getElementById("email").value;
    var tel=document.getElementById("telefon").value;
    var p=document.getElementById("poruka");
    p.value += "Ime i prezime: " + ip+",  ";
    p.value += "Mejl: " + e+",  ";
    p.value += "Telefon: " + tel+".  Poruka: ";
}
function detaljnijeOM() {
    var dOpremeMode=document.getElementById("dOpremeMode");
    dOpremeMode.style.display = "block";
    var nJedan=["Garderoba","Grebalice"];
    var nDva=["Ogrlice","Transporteri"];
    var nTri=["Lezajevi","Cinije"];
    var nSvega=nJedan.concat(nDva,nTri);
    nSvega.sort();
    nSvega.join(",");
    dOpremeMode.innerHTML=nSvega;
}
function skloniDetaljeOM(){
    var dOpremeMode=document.getElementById("dOpremeMode");
    dOpremeMode.style.display = "none";
}