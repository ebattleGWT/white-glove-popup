function showPopup() {
  var cartItems = JSON.parse(localStorage.getItem('cart'));
  var popup = document.getElementById('wgPopup');
  var radioBtn1 = document.getElementById('radio-1');
  var radioBtn2 = document.getElementById('radio-2');
  var popupClosed = localStorage.getItem('popupClosed');

  if (!popupClosed) {
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i].sku === '7409302' || cartItems[i].sku === '7409002') {
        popup.style.display = 'block';
      }
    }

    radioBtn1.addEventListener('click', function() {
      addProductToCart('44860701573433');
      popup.style.display = 'none';
      localStorage.setItem('popupClosed', true);
    });

    radioBtn2.addEventListener('click', function() {
      addProductToCart('44867378872633');
      popup.style.display = 'none';
      localStorage.setItem('popupClosed', true);
    });
  }
}

function addProductToCart(productId) {
  var form = document.createElement('form');
  form.method = 'POST';
  form.action = '/cart/add';
  form.enctype = 'multipart/form-data';
  
  var input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'id';
  input.value = productId;
  
  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
}

showPopup();
