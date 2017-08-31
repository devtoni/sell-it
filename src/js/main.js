
 // const socket = io({transports: ['websocket']})

 $('#menu-toggle').click(function (e) {
   e.preventDefault()
   $('#wrapper').toggleClass('toggled')
 })

 $('#filterBtn').on('click', function () {
   $('.sidebar-products').toggle()
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
   const $parent = $(this).parent()
   const btnDeleteArticle = $parent.find('#btnDeleteArticle')
   const btnEdit = $parent.find('#btnEditOk')
   const pFromCard = $parent.find('.card-body > p')
   const inputsHidden = $parent.find('.input-div')
   $(this).toggleClass('position-input-toggle')
   btnEdit.toggle()
   pFromCard.toggle()
   inputsHidden.toggle()
   btnDeleteArticle.toggle()
 })

 $('.card-gallery').on('click', '#btnEditOk', function (e) {
   const $parent = $(this).parent()
   const id = $(this).data('id')
   const inputsText = $parent.find('input[type=text]')
   const inputPrice = $parent.find('input[type=number]')
   const inputTextValue = $.map(inputsText, input => input.value)
   const inputPriceValue = $.map(inputPrice, input => input.value)
   const values = [...inputTextValue, ...inputPriceValue]
   const [title, description, price] = values
   const url = `/api/profile/`
   const method = 'PUT'
   const data = { price, title, description, id }
   $.ajax({url, method, data})
  .then(() => {
    window.location.reload()
  })
  .catch((e) => console.log(e))
 })

 /* REGISTER FORM */

 $('#registerForm').on('submit', function (e) {
   return swal({
     type: 'success',
     title: 'User registered!'
   })
 })

 /* ALERTS */
 $('#save-changes').on('click', function () {
   return swal({
     type: 'success',
     title: 'Changes saved!'
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
     title: `That's all!`
   })
  .then(() => window.location.href = '/products')
 })

/* UPDATE USER PROFILE */

 $('.edit-profile-form').on('submit', function (e) {
   e.preventDefault()
   const data = convertNameValueFormToObject($(this))
   console.log(data)
   const url = '/api/user/edit/'
   const method = 'PUT'
   $.ajax({url, method, data})
   .then(() => window.location.href = '/profile')
   .catch(() => console.log('something wrong'))
 })

/* FILTER PRODUCTS */

 $('#filter-products-form').on('submit', function (e) {
   e.preventDefault()
   const values = convertNameValueFormToObject($(this))
   console.log(values)
 })

 var lowerSlider = document.querySelector('#lower')
 var upperSlider = document.querySelector('#upper')

 document.querySelector('#dos').value = upperSlider.value
 document.querySelector('#uno').value = lowerSlider.value

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
   document.querySelector('#dos').value = this.value
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
   document.querySelector('#uno').value = this.value
 }

  /* register event */
 function getPosition (options) {
   return new Promise(function (resolve, reject) {
     navigator.geolocation.getCurrentPosition(resolve, reject, options)
   })
 }

 function drawMap (lat, lon, mapId) {
   map = L.map(mapId).setView([lat, lon], 16)
   L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
     subdomains: 'abcd',
     maxZoom: 19
   }).addTo(map)
 }

 function convertNameValueFormToObject (form) {
   const data = form.serializeArray().reduce((acc, input) => {
     acc[input.name] = input.value
     return acc
   }, {})
   return data
 }
