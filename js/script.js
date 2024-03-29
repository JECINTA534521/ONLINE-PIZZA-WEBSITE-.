// total = 0;
function Pizza(size, crust, toppings,total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}

Pizza.prototype.ordered = function () {
    return "Your order summary is " + this.size + " " + this.crust + " " + this.toppings + " pizza";
}

function Address(street, estate, phoneDetails) {
    this.street = street;
    this.estate = estate;
    this.phoneDetails = phoneDetails;
}

Address.prototype.addressDetails = function () {
    return "Your order will be ready in 15mins and will be delivered at " + this.street + ", " + this.estate + "and you will be contacted through: " + this.phoneDetails;
}

function PriceCalculation(priceOfSize, priceOfCrust, priceOfToppings) {
    this.priceOfSize = priceOfSize;
    this.priceOfCrust = priceOfCrust;
    this.priceOfToppings = priceOfToppings;
}

PriceCalculation.prototype.totalCost = function () {
    return "Your Order totals " + (this.priceOfSize + this.priceOfCrust + this.priceOfToppings);
}

$(document).ready(function () {

    $("#checkbox").click(function () {
        $("#delivery").show();

    });

    $("button#submit").click(function (event) {
     event.preventDefault();

        let pSize = $("#size option:selected").val();
        let pCrust = $("#crust option:selected").val();
        let pToppings = [];


        $.each($("input[name=toppings]:checked"),function(){
            pToppings.push($(this).val());
        })
       
        switch(pSize) {
            case "0":
                price = 0;
                break;
            case "Small":
                price = 300;
                break;
            case "Medium":
                price = 600;
                break;
            case "Large":
                price = 900;
                break;
            default:
                console.log("Error");
        }
       

        switch (pCrust) {
            case "0":
                c_price = 0;
                break;
            case "Crispy":
                c_price = 200;
                break;
            case "Stuffed":
                c_price = 200;
                break;
            case "Gluten-free":
                c_price = 200;
                break;
            default:
                console.log("Error");
        }
        
        topping_value = pToppings.length * 100;
        
        total = price + c_price + topping_value;
       
        $(".list").append("<h4>Your order Summary is:</h4><br>" + "<li>Size:" + pSize + "</li>" + "<li>Crust:" +  pCrust + "</li>" +"<li>Toppings:" + pToppings + "</li><br>" + "<h5>Total cost:" + total + "</h5>   <em> NOTE:An additional 200 will be charged if it is to be delivered</em>" );

        var street = $("input#street").val();
         var estate = $("input#estate").val();
         var phoneDetails = $("input#phoneDetails").val();

        let newAddress = new Address(street, estate, phoneDetails);
        alert(newAddress.addressDetails());


        // if((pSize == "0") && (pCrust == "0")){
        //     alert("it");
        // }else{
        //     alert("do this");
        // }
        // alert(c_price);
        // event.preventDefault();
        //     if ($("input[name=small]:checked", "form").val() === "small") {
        //         var size = $("input[name=size]:checked", "form").val();
        //         var priceOfSize = parseInt(300);
        //     } else if ($("input[name=size]:checked", "form").val() === "medium") {
        //         var size = $("input[name=size]:checked", "form").val();
        //         var priceOfSize = parseInt(600);
        //     } else{
        //     var size = $("input[name=size]:checked", "form").val();
        //     var priceOfSize = parseInt(900);
        // }



        // if ($("input[name=small]:checked", "form").val() === "crispy") {
        //     var crust = $("input[name=crust]:checked", "form").val();
        //     var priceOfCrust = parseInt(100);
        // } else if ($("input[name=crust]:checked", "form").val() === "stuffed") {
        //     var crust = $("input[name=crust]:checked", "form").val();
        //     var priceOfCrust = parseInt(100);
        // } else {
        //     var crust = $("input[name=crust]:checked", "form").val();
        //     var priceOfCrust = parseInt(100);
        // }



        // if ($("input[name=small]:checked", "form").val() === "crispy") {
        //     var toppings = $("input[name=crust]:checked", "form").val();
        //     var priceOfToppings = parseInt(200);
        // } else if ($("input[name=crust]:checked", "form").val() === "stuffed") {
        //     var toppings = $("input[name=crust]:checked", "form").val();
        //     var priceOfToppings = parseInt(200);
        // } else {
        //     var toppings = $("input[name=crust]:checked", "form").val();
        //     var priceOfToppings = parseInt(200);
        // }

        // var street = $("input#street").val();
        // var estate = $("input#estate").val();
        // var phoneDetails = $("input#phoneDetails").val();

        // var myOrder = new Pizza(size, crust, toppings);
        // alert(myOrder);
        // var myAddress = new Address(street,estate,phoneDetails);
        // var totalPriceOfOrder = new  PriceCalculation(priceOfSize,PriceOfCrust,priceOfToppings);
        // alert("me");
    });
});
// });