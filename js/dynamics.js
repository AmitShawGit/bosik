const url = "http://127.0.0.1:5500"


$('document').ready(function () {

    fetch('./web_data.json')
        .then(response => response.json())
        .then(data => {
            const deals = data.deals_of_the_day;

            const deals_carousel = $('#deals_carousel')

            deals.forEach(item => {
                const html = `
                
                <div class="item">
                <div class="card product-card">
                    <div class="card-body">
                        <div class="img-box">
                            <img src="./img/${item.product_img}" alt="image4" class="img-fluid">
                        </div>
                        <ul>
                            <li>${item.product_name}</li>
                            <li>$${item.selling_price}</li>
                            <li>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-line"></i> (${item.rating})
                            </li>
                        </ul>
                        <a href="product-view.html" class="btn btn-outline-dark w-100 add_to_cart" data-id="${item.id}" data-array="deals_of_the_day">Add to cart</a>
                    </div>

                </div>

            </div>
          
            `;



                deals_carousel.append(html)




            })


            deals_carousel.owlCarousel({
                loop: true,
                margin: 16,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    400: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                    1600: {
                        items: 4
                    }
                }
            })

        }
        )


 

})


$(document).on('click', '.add_to_cart', function(e) {
    
    // e.preventDefault();
    const id = $(this).data('id');
    const arrayName = $(this).data('array');

    
    localStorage.setItem('product_id', JSON.stringify(id));
    localStorage.setItem('arrayName', JSON.stringify(arrayName));
    
    // windows.location.href = `/product-view.html?id=${items}`
})