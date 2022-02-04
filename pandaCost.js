// problem 2 : Panda Cost

function pandaCost(singaraQuantity,somuchaQuantity,jilapiQuantity){
    if (typeof singaraQuantity != 'number' || typeof somuchaQuantity != 'number' || typeof jilapiQuantity != 'number'){
        console.log('Please Enter the valid number !');
    }else{
        var singaraPrice=7;
        var somuchaPrice=10;
        var jilapiPrice=15;

        var singaraPriceTotal= parseInt(singaraQuantity)*singaraPrice;
        var somuchaPriceTotal= parseInt(somuchaQuantity)*somuchaPrice;
        var jilapiPriceTotal= parseInt(jilapiQuantity)*jilapiPrice;

        var TotalPrice= singaraPriceTotal+somuchaPriceTotal+jilapiPriceTotal;
        return TotalPrice;
    }
}

total=pandaCost(1,2,1);
console.log(total);