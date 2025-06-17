

$('document').ready(function () {
    let get_id_from_local_storage = localStorage.getItem('product_id');
    let get_arrayName_from_local_storage = localStorage.getItem('arrayName');

    const array_name = JSON.parse(get_arrayName_from_local_storage);

    fetch('./web_data.json')
        .then(response => response.json())
        .then(data => {

            let specific_array = data?.[array_name]



            for (let i = 0; i < specific_array.length; i++) {
                if (specific_array[i].id == get_id_from_local_storage) {
                    let items = specific_array[i]




                    let html =
                        `
<div class="col-lg-6">
<div class="img-box">
    <img src="./img/${items.product_img}" alt="shirt" class="img-fluid">
</div>
</div>
<div class="col-md-6">
<ul class="product-details">
    <li class="product_name">${items.product_name}</li>
    <li class="hashtags">#justhere</li>
    <li class="ratings"><span>4.5 <i class="ri-star-fill"></i> </span>&nbsp; 300 Ratings & 160
        Reviews</li>
    <li class="special_price">Special Price</li>
    <li class="price">$${items.selling_price} <s>$${items.price}</s> <span class="discount">${items.saving}</span></li>
    <li class="bank_tag">
        <ul>
            <li><i class="ri-bookmark-fill"></i> Bank offers and Discounts <a
                    href="#"><strong>T&C </strong></a></li>
            <li><i class="ri-bookmark-fill"></i> Special Price Get extra 35% off (price
                inclusive of cashback/coupon) <a href="#"><strong>T&C </strong></a></li>
        </ul>
    </li>

</ul>
<div class="d-flex align-center justify-content-around">
<a href="javascript:void(0)" class="btn btn-red buy_now" data-product='${JSON.stringify(items)}'>Buy Now</a>
<a href="javascript:void(0)" class="btn btn-outline-dark add_to_cart" data-product='${JSON.stringify(items)}'>Add to Cart</a>
</div>

<hr>
<h6>Description</h6>
<p class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived
    not only five centuries, but also the leap into electronic typesetting, remaining
    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop publishing software like
    Aldus PageMaker including versions of Lorem Ipsum</p>
</div>

`
                    // displaying the whole HTML 
                    $('.product-view .row').append(html)


                }
            }
        })
        .catch(error => console.error('Error fetching JSON:', error));
});


$(document).on('click', '.buy_now', function () {
    let set_data_for_cart = $(this).attr('data-product');
    try {
        let parsedData = JSON.parse(set_data_for_cart);
        console.log("buy_now", parsedData);

        let existingCart = JSON.parse(localStorage.getItem("addTocart")) || [];
        if (!Array.isArray(existingCart)) existingCart = [];

        existingCart.push(parsedData);
        localStorage.setItem("addTocart", JSON.stringify(existingCart));

        // window.location.href = "https://amitshawgit.github.io/bosik/cart.html";
        window.location.href = "/cart.html";
    } catch (e) {
        console.error("Failed to parse product data (buy_now):", e);
    }
});

$(document).on('click', '.add_to_cart', function () {
    let set_data_for_cart = $(this).attr('data-product');
    try {
        let parsedData = JSON.parse(set_data_for_cart);
       

        let existingCart = JSON.parse(localStorage.getItem("addTocart")) || [];

        console.log("add_to_cart", existingCart);

     


        if (!Array.isArray(existingCart)) existingCart = [];

        existingCart.push(parsedData);
        localStorage.setItem("addTocart", JSON.stringify(existingCart));

    } catch (e) {
        console.error("Failed to parse product data (add_to_cart):", e);
    }
});


