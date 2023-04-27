// Helper function to add product to cart
function addToCart(productId, quantity) {
  jQuery.post('/cart/add.js', {
    quantity: quantity,
    id: productId
  });
}

// Helper function to close popup and add selected option to cart
function closePopupAndAddToCart() {
  var selectedOption = jQuery('input[name="wgshipping"]:checked').val();
  if (selectedOption === 'option1') {
    addToCart('7974437159225', 1); // product id for shipping sku 1
  } else if (selectedOption === 'option2') {
    addToCart('7974438666553', 1); // product id for shipping sku 2
  }
  jQuery('.wg-popup').fadeOut();
}

// Show popup when add to cart is clicked for specified SKUs
jQuery('.product-form__cart-submit [type="submit"]').on('click', function() {
  var productSku = jQuery('.product-form__input[name="id"]').val();
  if (productSku === '7409302' || productSku === '7409002') {
    jQuery('.wg-popup').fadeIn();
  }
});

// Close popup and add selected option to cart when radio button is clicked
jQuery('input[name="wgshipping"]').on('click', closePopupAndAddToCart);

// Close popup when close button is clicked
jQuery('.wg-popup__close-btn').on('click', function() {
  jQuery('.wg-popup').fadeOut();
});
