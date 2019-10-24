let udregnButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("beregnAfgiftButton");
udregnButton.addEventListener("click", UdregnAfgift);

let outputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("bilafgiftOutput");
let inputElementBilpris: HTMLInputElement = <HTMLInputElement>document.getElementById("bilprisInput");

let result: number;
let endeligeAfgift: number;



function BeregnBilafgift(bilpris: number){
    //error handling der udsrkiver en besked hvis et minustal er tastet ind som bilens pris.
    if (bilpris < 0){        
        throw new Error(
            outputElement.innerHTML = "Bilens pris må ikke være et minustal"
        )     
    }

    //udregningen af afgiften ud fra bilens pris.
    if (bilpris <= 200000){
        result = bilpris * 0.85;
    }
    else if (bilpris > 200000){
        result = (bilpris * 1.5) - 130000;
    }

    return result;
}

function BeregnElbilsafgift(bilpris: number){  
    let basisBilafgift: number = BeregnBilafgift(bilpris);
    result = basisBilafgift * 0.20;
    return result;
}


function UdregnAfgift(){   
    let BilprisInput: number = parseInt(inputElementBilpris.value);
    let biltype = (<HTMLSelectElement>document.getElementById("biltypeInput")).value;

    if (biltype == "Bil"){
        endeligeAfgift = BeregnBilafgift(BilprisInput);        
    }
    else if (biltype == "Elbil"){
        endeligeAfgift = BeregnElbilsafgift(BilprisInput);
    }
    
    outputElement.innerHTML = endeligeAfgift.toString();
}