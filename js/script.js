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

function WholeOrder(sizePrice, crustPrice, toppingPrice) {
  this.sizePrice = sizePrice;
  this.crustPrice = crustPrice;
  this.toppingPrice = toppingPrice;
}

Pizza.prototype.delivery = function() {
  return (
    this.size +
    " " +
    this.crust +
    " " +
    this.toppings +
    " " +
    "this is your delivery fee"
  );
};
Address.prototype.totalCost = function() {
  return this.street + " " + this.estate + " " + this.phoneDetails;
};

WholeOrder.prototype.ordered = function() {
  return (
    "The total cost of pizza" +
    parseInt(this.sizePrice) +
    parseInt(this.crustPrice) +
    parseInt(this.toppingPrice)
  );
};

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    // var size = $("input[name=size]:checked", "form").val();
    if ($("input[name=small]:checked", "form").val() === "small") {
      var size = $("input[name=size]:checked", "form").val();
      var sizePrice = parseInt(300);
    } else if ($("input[name=size]:checked", "form").val() === "medium") {
      var size = $("input[name=size]:checked", "form").val();
      var sizePrice = parseInt(600);
    } else $("input[name=size]:checked", "form").val() === "large";
    var size = $("input[name=size]:checked", "form").val();
    var sizePrice = parseInt(900);
    alert(size);

    // var crust = $("input[name=crust]:checked", "form").val();
    if ($("input[name=small]:checked", "form").val() === "crispy") {
      var crust = $("input[name=crust]:checked", "form").val();
      var crustPrice = parseInt(100);
    } else if ($("input[name=crust]:checked", "form").val() === "stuffed") {
      var crust = $("input[name=crust]:checked", "form").val();
      var crustPrice = parseInt(100);
    } else {
      var crust = $("input[name=crust]:checked", "form").val();
      var crustPrice = parseInt(100);
    }
    alert(crust);

    // var toppings = $("input[name=toppings]:checked", "form").val();

    if ($("input[name=small]:checked", "form").val() === "crispy") {
      var toppings = $("input[name=crust]:checked", "form").val();
      var toppingPrice = parseInt(200);
    } else if ($("input[name=crust]:checked", "form").val() === "stuffed") {
      var toppings = $("input[name=crust]:checked", "form").val();
      var toppingPrice = parseInt(200);
    } else {
      var toppings = $("input[name=crust]:checked", "form").val();
      alert(toppings);
      var toppingPrice = parseInt(200);
    }

    var street = $("input#street").val();
    alert(street);
    var estate = $("input#estate").val();
    alert(estate);
    var phoneDetails = $("input#phoneDetails").val();
    alert(phoneDetails);

    if ($("#checkbox").is(":checked")) {
      $(".list").text("your order will be delivered in a few minutes");
    } else {
      $(".list").text("you are free to get your order.");
    }

    var order = new WholeOrder();
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
    else{
        alert("your order is: + wholeOrder");
    }

    //   $("#size").click(function() {
    //     $("#crust").show();
    //     $("#size").hide();
    //   });
    //   $("#crust").click(function() {
    //     $("#toppings").show();
    //     $("#crust").hide();
    //   });

    //   $("#toppings").click(function() {
    //     $("#submit").show();
    //     $("#toppings").hide();
    //   });

    $("#checkbox").click(function() {
      $("#delivery").show();
    });
  });
});
