
// -- function for best price -- 
// function bestPrice(id){
//     const bestPriceOf = document.getElementById(id);
//     bestPriceOf.innerText = '0';
// }

const totalPrice = document.getElementById('total-price');
const totalPriceText = totalPrice.innerText;

const discountTotal = document.getElementById('discount-total');
// const discountTotalText = discountTotal.innerText;

const promoInput = document.getElementById('promo-input');
// ---------------------------------------------------------------------------- variable Declaration ---------------------- 


// ---------------------------------------------------------- function for extra price --
function addPrice(id) {
    return document.getElementById(id);
};


// ----------------------------------------------------------- total price function --

function allTotal() {
    const memoryPrice = document.getElementById('memory-price').innerText;
    const storagePrice = document.getElementById('storage-price').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    return parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryCost) + 1299;
};

//  --------------------------------------------------------------EventHandle Part-------------------------------------------------

// ------------------------------------------------------------------------- memory event handaler --

document.getElementById('memory-8GB').addEventListener('click', function () {
    const extraMemory = addPrice('memory-price');
    extraMemory.innerText = '0';

    const total = allTotal();
    totalPrice.innerText =total

    discountTotal.innerText = total;


});

    // memory - 16GB handler -------------------------------------------------

document.getElementById('memory-16GB').addEventListener('click', function () {
    const extraMemory = addPrice('memory-price');
    extraMemory.innerText = '180';

    const total = allTotal();

    totalPrice.innerText =total;
    discountTotal.innerText = total;

});

// ------------------------------------------------------------------------ storage event handaler -- 

document.getElementById('storage-256GB').addEventListener('click', function () {
    const extraMemory = addPrice('storage-price');
    extraMemory.innerText = '0';

    const total = allTotal();

    totalPrice.innerText =total;
    discountTotal.innerText = total;

});

    //sotorage - 512GB Handler --------------------------------------------------

document.getElementById('storage-512GB').addEventListener('click', function () {
    const extraMemory = addPrice('storage-price');
    extraMemory.innerText = '100';

    const total = allTotal();

    totalPrice.innerText =total;
    discountTotal.innerText = total;

});
    
    // sotrage 1TB handler ---------------------------------------------------

document.getElementById('storage-1TB').addEventListener('click', function () {
    const extraMemory = addPrice('storage-price');
    extraMemory.innerText = '180';

    const total = allTotal();

    totalPrice.innerText =total;
    discountTotal.innerText = total;

});



// -- delivery cost event handler -- ------------------------------------------
document.getElementById('delivery-free').addEventListener('click', function () {
    const extraMemory = addPrice('delivery-cost');
    extraMemory.innerText = '0';

    const total = allTotal();

    totalPrice.innerText =total;
    discountTotal.innerText = total;

});

    // delivery charge 20 handler ----------------------------------------------

document.getElementById('delivery-charge').addEventListener('click', function () {
    const extraMemory = addPrice('delivery-cost');
    extraMemory.innerText = '20';

    const total = allTotal();

    totalPrice.innerText =total;
    discountTotal.innerText = total;

});



// const discountTotalText = discountTotal.innerText;
// console.log(discountTotalText);

//------------------------------------------------------------------------- Total discount Price event handle 

document.getElementById('promo-button').addEventListener('click',function(){

    if(promoInput.value == 'stevekaku'){
        const totalAmount = parseInt(totalPrice.innerText);
        const discountAmount = (totalAmount /100)*20; 
        const totalDiscontAmount = totalAmount - discountAmount;
        discountTotal.innerText = totalDiscontAmount;
    }
    else{
        discountTotal.innerText = 'please Input Valid Promo Code';
    }

    promoInput.value = '';
})




