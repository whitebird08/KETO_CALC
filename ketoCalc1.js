//equations/relativity//
//rx = user/prescribed input//
/*
 var dailyCal = rxCal;
 var RATIO = rxRatio;
 var mealsPerDay = rxMPD;
 var dietaryUnit = (rxRatio * 9)+4;
 var kCalPerUnit = rxCal / dietaryUnit;
 var calPerMeal = rxCal / rxMPD;
 var unitsPerDay = rxCal / DietaryUnit;
 var unitsPerMeal = unitsPerDay / rxMPD;
 var proteinPerDay = rxPRO;

 var goalPRO = rxPRO / rxMPD;
 var goalFAT = unitsPerDay * rxRatio;
 var goalCHO = unitsPerMeal - goalPRO;
 */



//PRO = ing1[6];
//FAT = ing1[7];
//CHO = ing1[8];
/*
 var totalRATIO = totalFAT / (totalPRO + totalCHO)
 var totalCAL = (4 * totalPRO) + (9 * totalFAT) + (4 * totalCHO)


 var ing1 = [servingSizeA, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];
 var ing2 = [servingSizeB, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];
 var ing3 = [servingSizeC, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];
 var ing4 = [servingSizeD, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];
 var ing5 = [servingSizeE, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];

 var totalPRO = [ing1[6] + ing2[6] + ing3[6] + ing4[6] + ing5[6]];
 var totalFAT = [ing1[7] + ing2[7] + ing3[7] + ing4[7] + ing5[7]];
 var totalCHO = [ing1[8] + ing2[8] + ing3[8] + ing4[8] + ing5[8]];

 */
//adjusted function, plusA, minusA for more typical syntax
$(function(){
    $('#plusA').on('click', function() {
        increaseAmount()
        calcLinkPercentPro()
        calcLinkPro()


    });

    $('#minusA').on('click', function(){
        decreaseAmount()
        calcLinkPercentPro()
        calcLinkPro()


    });


    /*
    $("#enter").on("click", function(){

        console.log($("#servingSize").val());
        var value = $("#servingSize").val()
        console.log(value);

        return false;
    })

     */

    function increaseAmount(){
        // grab current value from the input box
        var currentValue = $('#servingSize').val()
        console.log((currentValue))
        // increment value by 1
        var newVal = parseInt (currentValue) + 1;
        console.log(newVal);
        // append new value to DOM

        $('#servingSize').val(newVal)
    }


function decreaseAmount() {
    // grab current value from the input box
    var currentValue = $('#servingSize').val()
    console.log((currentValue));
    // increment value by 1
    var newVal = parseInt (currentValue) - 1;
    console.log(newVal);
    // append new value to DOM
    $('#servingSize').val(newVal)

};
//oninput instead on onclick???
//////////////call the function for the input box (enter PRO, etc)//////////////////////
//    $('#PRO').on('click', function() {
//        //grab current value from box
//        var currentPro = $('#PRO').val()
//        var currentValue = $('#servingSize').val()
//        console.log ((currentPro))
//        //convert to percentage
//        var newPercentPro = parseInt (calcPercentPro(currentPro, currentValue))
//        console.log(newPercentPro)
//        $('#percentPro').val(newPercentPro)
//    });


        $('#PRO').on('click', function() {
            //grab current value from box
            var currentPro = $('#PRO').val()
            var currentValue = $('#servingSize').val()
            console.log ((currentPro))
            //convert to percentage
            var newPercentPro = parseInt (calcPercentPro(currentPro, currentValue))
            console.log(newPercentPro)
            //append new value ot DOM
            $('#percentPro').val(newPercentPro)
        });

//
  function calcLinkPercentPro() {
        //grab current value from box
        var currentPro = $('#PRO').val()
        var currentValue = $('#servingSize').val()
        console.log ((currentPro))
        //convert to percentage
        var newPercentPro = parseInt (calcPercentPro(currentPro, currentValue))
        console.log(newPercentPro)
      //append new value to DOM
        $('#percentPro').val(newPercentPro)
    };

});



//for now, re - use redundant ' var currentValue' for desired scope.
//there is a better way, but get it working first, then refactor.


//need to link plusA/minusA to PRO, percentPro values...see mdn notes


/*          mdn notes:
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
<input type="range" name="b" value="50" /> +
<input type="number" name="a" value="10" /> =
<output name="result"></output>
</form>

or

<!-- This sets the label's text to the textbox value on each keystroke. -->
<script language="javascript">
function setLabel(txtBox){
    document.getElementById('lbl').value = txtBox.value;
}
</script>
<label id="lbl"/>
<textbox oninput="setLabel(this);"/>
 */
/*  possible function for set values button (which might not be necessary with oninput/ouput)
function setPro(PRO){
    document.getElementById('lbl').value = PRO.value;
}
<label id="lbl"/>
<textbox oninput="setPro(this);"/>
*/



var PRO = percentPro * 0.01 * servingSize;
var FAT = percentFAT * 0.01 * servingSize;
var CHO = percentCHO * 0.01 * servingSize;



function calcPercentPro(PRO, servingSize){
    return (PRO / servingSize) * 100
};

function calcPercentFat(FAT, servingSize){
    return (FAT / servingSize) * 100
};

function calcPercentCho(CHO, servingSize){
    return(CHO / servingSize) * (100)
};


var percentPro = (PRO) / (servingSize) * (100);
var percentFAT = (FAT / servingSize) * (100);
var percentCHO =  (CHO / servingSize) * (100);


/*function calcPro () {
 // grab current value from the input box
 var currentPro = $('#PRO').val()
 var currentValue = $('#servingSize').val()
 console.log((currentPro));
 //calculate new value
 var percentPro = calcPercentPro(currentPro, currentValue)
 console.log(percentPro)
 var newPro = parseInt((currentValue * percentPro) + currentPro)
 console.log(newPro);
 //append new value to DOM
 $('#PRO').val(newPro)
 }
 */
function calcPro (percentPRO, servingSize){
    return percentPro * .01 * servingSize
};


function calcFat (percentFAT, servingSize) {
    return percentFat * .01 * servingSize
};

function calcCho (percentCHO, servingSize) {
    return percentCho * .01 * servingSize
};

/*
 PSEUDOCODE:
 enter serving size (servingSize) in grams
 enter nutrients (PRO, FAT, CHO) per serving in grams

 ????
 click submit button to link all boxes together/create an array
 ????
 or click

 adjust  = nutrient / serving size * 100 +/- 1
 return percentNutrient, return newSize
 calculatedNutrient = percentNutrient * .01 * serving size
 return new NutrientQuantity
 (later)click save to directory which sends to directory and can then be recalled
 repeat process for second ingredient
 add like nutrients from each ingredient
 return total nutrients
 calculate total nutrient ratio (indicate when match to target)
 calculate total calories    (indicate when match to target)


 */





/**
 * Created by ryanbird on 12/26/14.
 */
