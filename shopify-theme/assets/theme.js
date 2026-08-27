document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var navWrapper = document.querySelector('.site-nav-wrapper');
  if (toggle && navWrapper) {
    toggle.addEventListener('click', function () {
      var open = navWrapper.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Product page: variant price sync
  var variantSelect = document.querySelector('[data-variant-select]');
  if (variantSelect) {
    variantSelect.addEventListener('change', function () {
      var option = variantSelect.selectedOptions[0];
      var priceEl = document.querySelector('[data-product-price]');
      var idInput = document.querySelector('[data-variant-id]');
      if (option && priceEl && option.dataset.price) {
        priceEl.textContent = option.dataset.price;
      }
      if (option && idInput) {
        idInput.value = option.value;
      }
      var button = document.querySelector('[data-add-to-cart]');
      if (button) {
        var available = option.dataset.available === 'true';
        button.disabled = !available;
        button.textContent = available
          ? button.dataset.labelAdd
          : button.dataset.labelSoldOut;
      }
    });
  }

  // Product page: thumbnail click swaps main image
  document.querySelectorAll('[data-thumb]').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var main = document.querySelector('[data-main-image]');
      if (main) main.src = thumb.dataset.thumb;
    });
  });
});
