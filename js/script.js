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
Address.prototype.totalCost= function() {
    return (totalCost=1500);
};





$(document).ready(function () {
    $("form#form").submit(function (event) {
        event.preventDefault();
        var size = $("input[name=size]:checked", "form").val();
        alert(size);
        var crust = $("input[name=crust]:checked", "form").val();
        alert(crust);
        var toppings = $("input[name=toppings]:checked", "form").val();
        alert(toppings);
        var delivery = $("input[name=delivery]:checked", "form").val();
        alert(delivery)

        var street = $("input#street").val();
        alert(street);
        var estate = $("input#estate").val();
        alert(estate);
        var phoneDetails = $("input#phoneDetails").val();
        alert(phoneDetails);



        
    });

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

    $("#checkbox").click(function () {
        $("#delivery").show();
    });
});
