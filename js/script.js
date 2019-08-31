function Pizza(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
$(document).ready(function(){
    $("form#form").submit(function(event) {
        event.preventDefault();
var size=$("input[name=size]:checked","form").val();
alert(size)
var crust=$("input[name=crust]:checked","form").val();
alert(crust)
var toppings=$("input[name=toppings]:checked","form").val();
alert(toppings)





});
});