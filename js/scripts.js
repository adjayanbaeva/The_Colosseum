
// Business logic
function Pizza(size, toppings){
  this.size=size;
  this.toppings=toppings;
  this.quantityOfToppings = [];
  this.price;
}

// Prototype
pizza.prototype.price=function(){
  var price = 7;
  if this.size==="Small" {
    this.price+=2;
  } else if (this.size==="Medium"){
    this.price+=4;
  } else if(this.size==="Large") {
      price+=6
  }

  if (this.quantityOfToppings.length===0{
    price += 1;
  }else{
    price +=this.quantityOfToppings.length;
  }

  return price;
};



// User interface logic
$(document).ready(function(){
  $("form#yourOptions").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("select#pizzaSize").val();
    var newOrder = new Pizza(pizzaSize);


  })
})
