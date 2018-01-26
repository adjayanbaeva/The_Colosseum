// User interface logic
$(document).ready(function(){
  $("form#yourOptions").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("select#pizzaSize").val();
  })
})

// Business logic
function pizza(size, toppings){
  this.size=size;
  this.toppings=toppings;
  this.quantityOfToppings
}

// Prototype
pizza.prototype.price=function(){
  var price = 9;
  if this.size==="Small" {
    price+=5;
  } else if (this.size==="Medium"){
    price+=3;
  } else {
    price+=0
  }

  
