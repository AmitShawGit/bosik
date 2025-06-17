function renderCartItems() {
    let get_cart_items_from_storage = localStorage.getItem('addTocart');
    let parsed_data_from_storage = JSON.parse(get_cart_items_from_storage);



    parsed_data_from_storage.forEach((item, index) => {
        let html = `
        <tr>
            <td><img src="./img/${item?.product_img}" alt="shoe" class="img-fluid prod_img"></td>
            <td>
                <ul>
                    <li class="text-uppercase"><i>${item?.product_name}</i></li>
                    <li>Color: <strong>${item?.color}</strong></li>
                    <li>Size: <strong>${item?.size}</strong></li>
                </ul>
            </td>
            <td class="unit_price" data-price="${item?.selling_price}">$${item?.selling_price} X <span class="qty_val">1</span></td>
            <td><button class="btn btn-blue"><i class="ri-subtract-line decrement"></i></button> <span class="qty_val">1</span> <button class="btn btn-blue"><i class="ri-add-line increment"></i></button></td>
            <td class="total_price">${item?.selling_price} .00</td>
            <td><i onclick="delProduct(${item?.id})" class="ri-delete-bin-line"></i></td>
        </tr>`;

        $('.view_cart_table tbody').append(html)
    });

    updateCartSubtotal();
}

let qty;

$(document).on('click', '.increment', function () {
    let $row = $(this).closest('tr');
    let $qtySpan = $row.find('.qty_val').eq(1);
    let qty = parseInt($qtySpan.text());
    qty += 1;
    $qtySpan.text(qty);

    updateTotal($row, qty);
    updateCartSubtotal()
});

$(document).on('click', '.decrement', function () {
    let $row = $(this).closest('tr');
    let $qtySpan = $row.find('.qty_val').eq(1);
    let qty = parseInt($qtySpan.text());
    if (qty > 1) {
        qty -= 1;
        $qtySpan.text(qty);

        updateTotal($row, qty);
        updateCartSubtotal()
    }
});


function updateTotal($row, qty) {
    let unitPrice = parseFloat($row.find('.unit_price').data('price'));
    let newTotal = (unitPrice * qty).toFixed(2);
    $row.find('.total_price').text(`$${newTotal}`);

    $row.find('.unit_price .qty_val').text(qty);
}

function delProduct(id) {

    let get_cart_items_from_storage = localStorage.getItem('addTocart')

    let parsed_data_from_storage = JSON.parse(get_cart_items_from_storage);

    let getData = parsed_data_from_storage.filter(item => item.id !== id)

    localStorage.setItem('addTocart', JSON.stringify(getData))


    $('.view_cart_table tbody').empty();
    updateCartSubtotal();
    renderCartItems();
}


function updateCartSubtotal() {
    let subtotal = 0;
    $('.total_price').each(function () {
        let priceText = $(this).text().replace('$', '');
        subtotal += parseFloat(priceText);
    });
    $('#cart_subtotal').text(subtotal.toFixed(2));
}


$(document).ready(function () {
    updateCartSubtotal();
    renderCartItems();
});
