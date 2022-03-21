$(document).ready(function(){
    
    $('.sub').click(function(){
    
            $('.sub4').show();
            $('.edittext1').show();
            $('#table').show();
            $('.sub').hide();
            $('.sub5').show();
       
    });
        $('.sub5').click(function(){
            $('.edittext2').show();
            $('.sub1').show();
            $('.sub2').show();
            $('.sub4').hide();
            $('.sub5').hide();
        });
        $('.sub1').click(function(){
            $('.edittext2').hide();
            $('.form2').show();
            $('.sub6').show();
            $('.sub1').hide();
            $('.sub2').hide();
            
        });
        $('.sub6').click(function(){
            $('.sub3').show();
            $('.edittext3').show();
            
        });
        $('.sub3').click(function(){
            $('.edittext4').show();
            $('.edittext6').show();
            $('.form2').hide();
            $('.edittext3').hide();
            $('.sub3').hide();
            $('.sub6').hide();
        });
});


    
function getOrder(size,toppings,crust){
    size= (document.getElementById("size").value);
    toppings= (document.getElementById("toppings").value);
    crust= (document.getElementById("crust").value);  

}

function getOrder1(size,toppings,crust){
    size= (document.getElementById("size").value);
    toppings= (document.getElementById("toppings").value);
    crust= (document.getElementById("crust").value);  

}

let totals;
let delivery = 200;
function getGrandTotal(sizePrice, topPrice, crustPrice){
let size = (document.getElementById("size").value);
$('.sub').click(function(){
    let size= (document.getElementById("size").value);
    let toppings= (document.getElementById("toppings").value);
    let crust= (document.getElementById("crust").value);
    let total = (sizePrice + topPrice + crustPrice);
    console.log(total);
    let tr = '<tr><td>' + size +'</td>   <td>' + toppings + '</td>   <td>' + crust + '</td>  <td>' + total + '</td></tr>';
    $('tbody').append(tr);
    totals = (total + delivery);
    document.getElementById("q1").innerHTML = totals;
});



$('.sub4').click(function(){
    let size= (document.getElementById("size").value);
    let toppings= (document.getElementById("toppings").value);
    let crust= (document.getElementById("crust").value);
    let total = (sizePrice + topPrice + crustPrice);
    console.log(total)
    let tr = '<tr><td>' + size +'</td>   <td>' + toppings + '</td>   <td>' + crust + '</td>  <td>' + total + '</td></tr>';
        $('tbody').append(tr);
        totals = (total + delivery);
        document.getElementById("q1").innerHTML = totals;

}); 

var sizePrice = 0 ;
if (size==="large-1000"){
   sizePrice = 1000;
}
else if (size==="medium-700"){
    sizePrice = 700;
}
else if(size==="small-550"){
    sizePrice = 550;
}

let toppings= (document.getElementById("toppings").value);
var topPrice = 0 ;
if (toppings==="pepperoni-400"){
    topPrice = 400;
}
else if (toppings==="sausage-300"){
     topPrice = 300;
}
else if (toppings==="cheese-400"){
     topPrice = 400;
}
else if (toppings==="bacon-400"){
    topPrice = 400;
}
else if (toppings==="chicken-300"){
    topPrice = 300;
}
else if(toppings==="mushroom-250"){
    topPrice = 250;
}

let crust= (document.getElementById("crust").value); 
var crustPrice = 0 ;
if (crust==="pan&handtossed-200"){
    crustPrice = 200;
}
else if (crust==="thincrust-100"){
    crustPrice = 100;
}
else if (crust==="buttercrust-300"){
    crustPrice = 300;
}
else if (crust==="brooklyn-400"){
     crustPrice = 400;
}
else if(crust==="gluten-500"){
    crustPrice = 500;
}
}
console.log(getGrandTotal());

$('.sub6').click (function(location){
   var location = $('#em1').val();

document.getElementById("q2").innerHTML = location;

})