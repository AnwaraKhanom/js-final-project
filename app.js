// ///increment part of product one
const priceOfProductOne = parseFloat(document.getElementById("price-one").innerHTML);
const incrementOne = document.getElementById("increment-one");
incrementOne.addEventListener('click',function(){
    const quantityOne = parseFloat(document.getElementById("quantity-one").value);
    const priceOne = parseFloat(document.getElementById("price-one").innerHTML);
    
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
     const total = parseFloat(document.getElementById("total").innerHTML);

    document.getElementById("quantity-one").value = quantityOne + 1;
    document.getElementById("price-one").innerHTML = priceOne + priceOfProductOne;
    document.getElementById("subtotal").innerHTML = subTotal + priceOfProductOne;
    document.getElementById("total").innerHTML = document.getElementById("subtotal").innerHTML;
})

// ///decrement part of product one
const decrementOne = document.getElementById("decrement-one");
decrementOne.addEventListener('click',function(){
    if(document.getElementById("quantity-one").value > 0){
        const quantityOne = parseFloat(document.getElementById("quantity-one").value);
        const priceOne = parseFloat(document.getElementById("price-one").innerHTML);

        const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
        const total = parseFloat(document.getElementById("total").innerHTML);

        document.getElementById("quantity-one").value = quantityOne - 1;
        document.getElementById("price-one").innerHTML = priceOne - priceOfProductOne;
        document.getElementById("subtotal").innerHTML = subTotal - priceOfProductOne;
        document.getElementById("total").innerHTML = document.getElementById("subtotal").innerHTML;
    }
})

// ///increment part of product two
const priceOfProductTwo = parseFloat(document.getElementById("price-two").innerHTML);
const incrementTwo = document.getElementById("increment-two");
incrementTwo.addEventListener('click',function(){
    const quantityTwo = parseFloat(document.getElementById("quantity-two").value);
    const priceTwo = parseFloat(document.getElementById("price-two").innerHTML);
    
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
     const total = parseFloat(document.getElementById("total").innerHTML);

    document.getElementById("quantity-two").value = quantityTwo + 1;
    document.getElementById("price-two").innerHTML = priceTwo + priceOfProductTwo;
    document.getElementById("subtotal").innerHTML = subTotal + priceOfProductTwo;
    document.getElementById("total").innerHTML = document.getElementById("subtotal").innerHTML;
})

// ///decrement part of product two
const decrementTwo = document.getElementById("decrement-two");
decrementTwo.addEventListener('click',function(){
    if(document.getElementById("quantity-two").value > 0){
        const quantityTwo = parseFloat(document.getElementById("quantity-two").value);
        const priceTwo = parseFloat(document.getElementById("price-two").innerHTML);

        const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
        const total = parseFloat(document.getElementById("total").innerHTML);

        document.getElementById("quantity-two").value = quantityTwo - 1;
        document.getElementById("price-two").innerHTML = priceTwo - priceOfProductTwo;
        document.getElementById("subtotal").innerHTML = subTotal - priceOfProductTwo;
        document.getElementById("total").innerHTML = document.getElementById("subtotal").innerHTML;
    }
})

// ///removing part of product one
const removeOne = document.getElementById("remove-one");
removeOne.addEventListener("click",function(){
    document.getElementById("product-one").style.display = "none" ;
    const priceOne = parseFloat(document.getElementById("price-one").innerHTML);
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
    const total = parseFloat(document.getElementById("total").innerHTML);

    document.getElementById("subtotal").innerHTML = subTotal - priceOne;
    document.getElementById("total").innerHTML = document.getElementById("subtotal").innerHTML;
})

// ///removing part of product two
const removeTwo = document.getElementById("remove-two");
removeTwo.addEventListener("click",function(){
    document.getElementById("product-two").style.display = "none" ;
    const priceTwo = parseFloat(document.getElementById("price-two").innerHTML);
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
    const total = parseFloat(document.getElementById("total").innerHTML);

    document.getElementById("subtotal").innerHTML = subTotal - priceTwo;
    document.getElementById("total").innerHTML = document.getElementById("subtotal").innerHTML;
})