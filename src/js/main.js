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

/* preview card */

let contentTitle = $('#input-title').val()
$('#input-title').on('keyup', function () {
  contentTitle = $('#input-title').val().replace(/\\n/g, '<br />')
  $('#preview-title').text(contentTitle)
})
let contentDescription = $('#input-title').val()
$('#input-description').on('keyup', function () {
  contentDescription = $('#input-description').val().replace(/\\n/g, '<br />')
  $('#preview-description').text(contentDescription)
})
let contentPrice = $('#input-price').val()
$('#input-price').on('keyup', function () {
  contentPrice = $('#input-price').val().replace(/\\n/g, '<br />')
  $('#preview-price').text(contentPrice + ' €')
})

$.uploadPreview({
  input_field: '#image-upload',   // Default: .image-upload
  preview_box: '#image-preview',  // Default: .image-preview
  label_field: '#image-label',    // Default: .image-label
  label_default: 'Choose File',   // Default: Choose File
  label_selected: 'Change File',  // Default: Change File
  no_label: false                 // Default: false
})

/* */

/* preview btn for mobile view */

$('#previewBtn').on('click', function () {
  $('#add-product-form').toggle()
})

/* delete article */

$('.card-gallery').on('click', '#btnDeleteArticle', function (e) {
  console.log('hola')
  const id = $(this).data('id')
  const url = `/api/profile/${id}`
  const method = 'DELETE'
  $.ajax({url, method})
  .then(() => {
    $(this).parent().remove()
  })
})

/* edit article */

$('.card-gallery').on('click', '#btnEdit', function (e) {
  const btnDeleteArticle = $(this).parent().find('#btnDeleteArticle')
  const pFromCard = $('.card-body > p')
  const inputsHidden = $(this).parent().find('.input-div')
  const btnEdit = $(this).parent().find('#btnEditOk')
  $(this).toggleClass('position-input-toggle')
  btnEdit.toggle()
  pFromCard.toggle()
  inputsHidden.toggle()
  btnDeleteArticle.toggle()
})

$('.card-gallery').on('click', '#btnEditOk', function (e) {
  const id = $(this).data('id')
  const inputsText = $('.card-gallery').find('input[type=text]')
  const inputTextValue = $.map(inputsText, input => input.value)
  const [ price, title, description ] = inputTextValue
  const url = `/api/profile/`
  const method = 'PUT'
  const data = { price, title, description, id}
  $.ajax({url, method, data})
  .then(() => {
    const btnDeleteArticle = $('#btnDeleteArticle')
    const pFromCard = $('.card-body > p')
    const inputsHidden = $('.card-gallery').find('.input-div')
    const btnEdit = $('#btnEditOk')
    btnEdit.toggle()
    pFromCard.toggle()
    inputsHidden.toggle()
    btnDeleteArticle.toggle()
    window.location.reload()
  })
})

/* register event */
var getPosition = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

$('#registerForm').on('submit', function (e) {
  e.preventDefault()
  getPosition()
  .then((position) => {
    return {lat: position.coords.latitude, lon: position.coords.longitude }
  })
  .then((position) => {
    const formProperties = $(this).serializeArray().reduce((acc, input) => {
      acc[input.name] = input.value
      return acc
    }, {})
    const data = Object.assign({}, position, formProperties)
    return data
  })
  .then((data) => {
    const url = '/register/'
    const method = 'POST'
    $.ajax({url, method, data})
  })
  .catch((err) => {
    console.error(err.message)
  })
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
