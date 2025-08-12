// Constructor function
function Service(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}

$('#serviceForm').on('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  let isValid = true;

  // Grab input fields
  const $name = $('#serviceName');
  const $price = $('#servicePrice');
  const $category = $('#serviceCategory');

  // Reset borders
  $name.css('border', '');
  $price.css('border', '');
  $category.css('border', '');

  // Check for empty fields and highlight
  if ($name.val().trim() === '') {
    $name.css('border', '2px solid red');
    isValid = false;
  }
  if ($price.val().trim() === '') {
    $price.css('border', '2px solid red');
    isValid = false;
  }
  if ($category.val().trim() === '') {
    $category.css('border', '2px solid red');
    isValid = false;
  }

  // If valid, create Service object and reset form
  if (isValid) {
    const newService = new Service($name.val(), parseFloat($price.val()), $category.val());

    // You can now push newService to an array or display it
    console.log('Service registered:', newService);

    // Clear form
    $('#serviceForm')[0].reset();

    // Remove red borders
    $name.css('border', '');
    $price.css('border', '');
    $category.css('border', '');
  }
});