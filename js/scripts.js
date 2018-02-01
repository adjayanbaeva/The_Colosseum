
// Business logic
function Pizza(size, toppings){
  this.size=size;
  this.toppings=toppings;
  this.quantityOfToppings = [];
  this.price = 7;
}

// Prototype
Pizza.prototype.Calcprice = function(){
  var price = 7;
  if (this.size==="Small") {
    this.price+=2;
  } else if (this.size==="Medium"){
    this.price+=4;
  } else if(this.size==="Large") {
    this.price+=6
  }

  if (this.quantityOfToppings.length===0) {
    this.price += 2;
  }else{
    this.price +=this.quantityOfToppings.length;
  }

  return this.price;
};



// User interface logic
$(document).ready(function(){
  $("form#yourOptions").submit(function(event){
    event.preventDefault();

    var pizzaSize = $("select#pizzaSize").val();
    var newOrder = new Pizza(pizzaSize);

    $("input:checkbox[name=toppings]:checked").each(function(){
      newOrder.quantityOfToppings.push($(this).val());
      // var selectedToppings = $(this).val();
      //  newOrder.toppings.push(selectedToppings)
      //  console.log(selectedToppings)

    });
$(".totalPrice").text(newOrder.Calcprice());
  })
})
