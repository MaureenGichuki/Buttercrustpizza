$(document).ready(function(){
     
    $('.sub').click(function(){
    
            $('.sub4').show();
            $('.edittext1').show();
            $('#table').show();
            $('.sub').hide();
            $('.sub5').show();
       
    });
    $('.sub').click(function(){
        let size= (document.getElementById("size").value);
        let toppings= (document.getElementById("toppings").value);
        let crust= (document.getElementById("crust").value);
        let total;
        let tr = '<tr><td>' + size +'</td>   <td>' + toppings + '</td>   <td>' + crust + '</td></tr>';
        $('tbody').append(tr);
        total = (sizePrice + topPrice + crustPrice);
})

        $('.sub4').click(function(){
        let size= (document.getElementById("size").value);
        let toppings= (document.getElementById("toppings").value);
        let crust= (document.getElementById("crust").value);
        let total = parseInt(size + toppings + crust);
        let tr = '<tr><td>' + size +'</td>   <td>' + toppings + '</td>   <td>' + crust + '</td></tr>';
            $('tbody').append(tr);
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

function getGrandTotal(sizePrice, topPrice, crustPrice){
let totals;
let delivery = 200;
let size= (document.getElementById("size").value);
var sizePrice = 0 ;
if (size==="large"){
   sizePrice = 1000;
}
else if (size==="medium"){
    sizePrice = 700;
}
else if(size==="small"){
    sizePrice = 550;
}

let toppings= (document.getElementById("toppings").value);
var topPrice = 0 ;
if (toppings==="pepperoni"){
    topPrice = 400;
}
else if (toppings==="sausage"){
     topPrice = 300;
}
else if (toppings==="cheese"){
     topPrice = 400;
}
else if (toppings==="bacon"){
    topPrice = 400;
}
else if (toppings==="chicken"){
    topPrice = 300;
}
else if(toppings==="mushroom"){
    topPrice = 250;
}

let crust= (document.getElementById("crust").value); 
var crustPrice = 0 ;
if (crust==="pan&handtossed"){
    crustPrice = 200;
}
else if (crust==="thincrust"){
    crustPrice = 100;
}
else if (crust==="buttercrust"){
    crustPrice = 300;
}
else if (crust==="brooklyn"){
     crustPrice = 400;
}
else if(crust==="gluten"){
    crustPrice = 500;
}

totals = (sizePrice + topPrice + crustPrice + delivery);
document.getElementById("q1").innerHTML = totals;
}

console.log(getGrandTotal());

$('.sub6').click (function(location){
   var location = $('#em1').val();

document.getElementById("q2").innerHTML = location;
});