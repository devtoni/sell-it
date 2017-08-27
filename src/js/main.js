$('#menu-toggle').click(function (e) {
  e.preventDefault()
  $('#wrapper').toggleClass('toggled')
})

$('#sub').on('submit', (e) => {
  e.preventDefault()
  window.location.href = '/products'
})

$('#filterBtn').on('click', function () {
  $('.sidebar-products').toggle()
})

$('#sub-log').on('submit', (e) => {
  e.preventDefault()
  window.location.href = '/profile'
})
$('#sub-reg').on('submit', (e) => {
  e.preventDefault()
  window.location.href = '/login'
})

$('.btn-edit').on('click', function () {
  return swal({
    type: 'info',
    title: 'Edición activada!',
    text: 'Puedes cambiar tu nombre, e imagen, y también editar tus artículos!'
  })
})

$('#save-changes').on('click', function () {
  return swal({
    type: 'success',
    title: 'Cambios guardados!'
  })
})
$('#mobile-search-form').on('submit', function (e) {
  e.preventDefault()
  window.location.href = '/products'
})
$('#search-icon-navbar').on('click', function (e) {
  $('.search-bar-nav-mobile').fadeToggle(750)
 // window.location.href = '/products'
})
/* range price */

$('#add-product-form').on('submit', function (e) {
  return swal({
    type: 'success',
    title: 'Ya esta!',
    text: 'Ahora ya puedes ver tu artículo'
  })
  .then(() => window.location.href = '/products')
})

var lowerSlider = document.querySelector('#lower')
var upperSlider = document.querySelector('#upper')

document.querySelector('#two2').value = upperSlider.value
document.querySelector('#one1').value = lowerSlider.value

var lowerVal = parseInt(lowerSlider.value)
var upperVal = parseInt(upperSlider.value)

upperSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value)
  upperVal = parseInt(upperSlider.value)

  if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4
    if (lowerVal == lowerSlider.min) {
      upperSlider.value = 4
    }
  }
  document.querySelector('#two2').value = this.value
}

lowerSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value)
  upperVal = parseInt(upperSlider.value)
  if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4
    if (upperVal == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 4
    }
  }
  document.querySelector('#one1').value = this.value
}
