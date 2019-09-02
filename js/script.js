function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
function Address(street, estate, phoneDetails) {
    this.street = street;
    this.estate = estate;
    this.phoneDetails = phoneDetails;
}

function WholeOrder(priceSize, priceCrust, priceToppings) {
    this.priceSize = priceSize;
    this.priceCrust = priceCrust;
    this.priceToppings = priceToppings;
}

WholeOrder.prototype.delivery = function () {
    return
    " and the total cost is" +
        (this.priceSize +
        +
        this.priceCrust +
        +
        this.priceToppings)
        

};
Address.prototype.totalCost = function () {
    return this.street + " " + this.estate + " " + this.phoneDetails;
};

Pizza.prototype.ordered = function () {
    return 

        this.size +
        this.crust +
        this.toppings + "pizza"

};

$(document).ready(function () {

    $("#checkbox").click(function () {
        $("#delivery").show();

    });
    $("form#form").submit(function (event) {
        event.preventDefault();

        // var size = $("input[name=size]:checked", "form").val();
        if ($("input[name=small]:checked", "form").val() === "small") {
            var size = $("input[name=size]:checked", "form").val();
            var priceSize = parseInt(300);
        } else if ($("input[name=size]:checked", "form").val() === "medium") {
            var size = $("input[name=size]:checked", "form").val();
            var priceSize = parseInt(600);
        } else $("input[name=size]:checked", "form").val() === "large";
        var size = $("input[name=size]:checked", "form").val();
        var priceSize = parseInt(900);
        ($('#checkbox').is(':checked'))


        // var crust = $("input[name=crust]:checked", "form").val();
        if ($("input[name=small]:checked", "form").val() === "crispy") {
            var crust = $("input[name=crust]:checked", "form").val();
            var priceCrust = parseInt(100);
        } else if ($("input[name=crust]:checked", "form").val() === "stuffed") {
            var crust = $("input[name=crust]:checked", "form").val();
            var priceCrust = parseInt(100);
        } else {
            var crust = $("input[name=crust]:checked", "form").val();
            var priceCrust = parseInt(100);
        }


        // var toppings = $("input[name=toppings]:checked", "form").val();

        if ($("input[name=small]:checked", "form").val() === "crispy") {
            var toppings = $("input[name=crust]:checked", "form").val();
            var priceToppings = parseInt(200);
        } else if ($("input[name=crust]:checked", "form").val() === "stuffed") {
            var toppings = $("input[name=crust]:checked", "form").val();
            var priceToppings = parseInt(200);
        } else {
            var toppings = $("input[name=crust]:checked", "form").val();

            var priceToppings = parseInt(200);
        }

        var street = $("input#street").val();

        var estate = $("input#estate").val();

        var phoneDetails = $("input#phoneDetails").val();


        // if ($("#checkbox").is(":checked")) {
        //     $(".list").text("your order will be delivered in a few minutes");
        // } else {
        //     $(".list").text("you are free to get your order.");
        // }

        var order = new WholeOrder(priceSize, priceCrust, priceToppings);
        var pizza = new Pizza(size, crust, toppings);
        var address = new address(street, estate, phoneDetails);
        if ($("#checkbox").is(":checked")) {
            if ($("#street").val() === "") {
                alert("input your valid street");
            } else if ($("#estate").val() === "") {
                alert("input your valid estate");
            } else if ($("#phoneDetails").val() === "") {
                alert("input your phone details");
            } else {
                alert("order");
            }
        }
        else {
            alert("your order is: + wholeOrder");


            $("ul.list").append("<h4> Whole Order is : </h4><br><br> " + pizza.ordered() + order.delivery());
        }

        /* $("#size").click(function() 
          $("#crust").show();
          $("#size").hide();
        });
        $("#crust").click(function() 
          $("#toppings").show();
          $("#crust").hide();
        });
  
        $("#toppings").click(function() 
          $("#submit").show();
          $("#toppings").hide();
        }); */

    });
});