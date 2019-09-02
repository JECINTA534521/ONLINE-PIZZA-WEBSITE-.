// function Pizza(size,crust,toppings) {
//     this.size = size;
//     this.crust = crust;
//     this.toppings = toppings;
// }
// function Address(street, estate, phoneDetails) {
//     this.street = street;
//     this.estate = estate;
//     this.phoneDetails = phoneDetails;
// }

// function WholeOrder(priceSize, priceCrust, priceToppings) {
//     this.priceSize = priceSize;
//     this.priceCrust = priceCrust;
//     this.priceToppings = priceToppings;
// }

// // WholeOrder.prototype.delivery = function () {
// //     return
// //     " and the total cost is" +
// //         (this.priceSize +
// //             +
// //             this.priceCrust +
// //             +
// //             this.priceToppings)


// // };
// Address.prototype.totalCost = function () {
//     return this.street + " " + this.estate + " " + this.phoneDetails;
// };

// // Pizza.prototype.ordered = function () {
// //     return

// //     this.size +
// //         this.crust +
// //         this.toppings + "pizza"

// // };





// $(document).ready(function () {

//     $("#checkbox").click(function () {
//         $("#delivery").show();

//     });

//     $("form#form").submit(function (event) {
//         event.preventDefault();

//         $("#submit").click(function () {

//             if ($("input[name=small]:checked", "form").val() === "small") {
//                 var size = $("input[name=size]:checked", "form").val();
//                 var priceSize = parseInt(300);
//             } else if ($("input[name=size]:checked", "form").val() === "medium") {
//                 var size = $("input[name=size]:checked", "form").val();
//                 var priceSize = parseInt(600);
//             } else $("input[name=size]:checked", "form").val() === "large";
//             var size = $("input[name=size]:checked", "form").val();
//             var priceSize = parseInt(900);
//             ($('#checkbox').is(':checked'))



//             if ($("input[name=small]:checked", "form").val() === "crispy") {
//                 var crust = $("input[name=crust]:checked", "form").val();
//                 var priceCrust = parseInt(100);
//             } else if ($("input[name=crust]:checked", "form").val() === "stuffed") {
//                 var crust = $("input[name=crust]:checked", "form").val();
//                 var priceCrust = parseInt(100);
//             } else {
//                 var crust = $("input[name=crust]:checked", "form").val();
//                 var priceCrust = parseInt(100);
//             }



//             if ($("input[name=small]:checked", "form").val() === "crispy") {
//                 var toppings = $("input[name=crust]:checked", "form").val();
//                 var priceToppings = parseInt(200);
//             } else if ($("input[name=crust]:checked", "form").val() === "stuffed") {
//                 var toppings = $("input[name=crust]:checked", "form").val();
//                 var priceToppings = parseInt(200);
//             } else {
//                 var toppings = $("input[name=crust]:checked", "form").val();

//                 var priceToppings = parseInt(200);
//             }

//             // var street = $("input#street").val();

//             // var estate = $("input#estate").val();

//             // var phoneDetails = $("input#phoneDetails").val();

//             var myPizza = new Pizza(size,crust,toppings);
//             var myOrder = new Order(priceSize, priceCrust, priceToppings);
//             var myAddress = new Address(street, estate, phoneDetails);

//             // if ($("#checkbox").is(":checked")) {
//             //     if ($("#street").val() === "") {
//             //         alert("input your valid street");
//             //     } else if ($("#estate").val() === "") {
//             //         alert("input your valid estate");
//             //     } else if ($("#phoneDetails").val() === "") {
//             //         alert("input your phone details");
//             //     } else {
//             //         alert("order");
//             //     }
//             // }
//             // else {
//             //     alert("your order is: + wholeOrder");



//             // }
//         });


//     });
// });

function Pizza(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

Pizza.prototype.ordered = function(){
    return "Your delivery summary is " + this.size + " " + this.crust + " "+ this.toppings+ " pizza";
}

function Address(street,estate,phoneDetails){
    this.street = street;
    this.estate = estate;
    this.phoneDetails = phoneDetails;
}

Address.prototype.addressDetails = function(){
    return "Your order will be ready in 15mins and will be delivered at " + this.street +", "+this.estate + "and you will be contacted through: "+this.phoneDetails;
} 

function PriceCalculation(priceOfSize,priceOfCrust,priceOfToppings){
    this.priceOfSize = priceOfSize;
    this.priceOfCrust = priceOfCrust;
    this.priceOfToppings = priceOfToppings;
}

PriceCalculation.prototype.totalCost =  function(){
    return "Your Order totals " + (this.priceOfSize+this.priceOfCrust+this.priceOfToppings);
}

(document)