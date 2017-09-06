
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
   const url = `/user/delete/product/${id}`
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
   const self = $(this)
   const $parent = self.parent()
   const id = self.data('id')
   const inputsText = $parent.find('input[type=text]')
   const inputPrice = $parent.find('input[type=number]')
   const inputTextValue = $.map(inputsText, input => input.value)
   const inputPriceValue = $.map(inputPrice, input => input.value)
   const values = [...inputTextValue, ...inputPriceValue]
   const [title, description, price] = values
   const url = `/user/update/product/${id}`
   const method = 'PUT'
   const data = { price, title, description, id }
   $.ajax({url, method, data})
         .then(() => {
           swal('Edited!', 'Your article has been edited.', 'success')
           window.location.reload()
         })
         .catch((e) => console.log(e))
 })

/* UPDATE USER PROFILE */

 $('#edit-profile-form').on('submit', function (e) {
   e.preventDefault()
   const formData = new FormData($(this)[0])
   const url = '/user/update'
   const method = 'PUT'
   $.ajax(
     url,
     { method,
       enctype: 'multipart/form-data',
       data: formData,
       processData: false,
       contentType: false
     })
   .then((user) => {
     swal({
       type: 'success',
       title: `Perfect you've edit succesfully your profile!`,
       timer: 5000
     })
     window.location.href = `/profile/${user._id}`
   })
   .catch(() => {
     swal({
       type: 'error',
       title: `Something is wrong... :(`,
       timer: 5000
     })
     window.location.href = `/profile/${user._id}`
   })
 })

/* FILTER PRODUCTS */

 $('#filter-products-form').on('submit', function (e) {
   e.preventDefault()
   const data = convertNameValueFormToObject($(this))
   const query = $.param(data, true)
   window.location.href = `/products?${query}`
 })

 if ($('body').hasClass('register-site')) {
   const registerForm = $('#register-form')
   registerForm.on('submit', function (e) {
     e.preventDefault()
     const values = convertNameValueFormToObject(registerForm)
     getPosition()
      .then((position) => {
        const { latitude: lat, longitude: lon } = position.coords
        const geoLocation = {lon, lat}
        const url = '/register'
        const data = Object.assign({}, values, geoLocation)
        const method = 'POST'
        $.ajax({url, method, data})
        .then((value) => {
          swal({
            type: 'success',
            title: `Registered succesfully!`,
            timer: 5000
          })
          window.location.href = '/login'
        })
      })
      .catch((err) => {
        swal({
          type: 'error',
          title: `Email is registered!`,
          timer: 5000
        })
      })
   })
 }

 /* SEARCH BY TAG */

 $('.tag-p').on('click', function (e) {
   const value = $(this).text()
   window.location.href = `/products?category=${value}`
 })
 /* EDIT PROFILE */

 if ($('body').hasClass('edit-profile')) {
   $('#info-city-alert-button').on('click', function (e) {
     e.preventDefault()
     swal({
       type: 'info',
       title: `When you register, we geolocate your position, thus is not required to put your city, although, you are able to change it.`,
       confirmButtonText: 'I get it!'
     })
   })
   $('#info-username-alert-button').on('click', function (e) {
     e.preventDefault()
     swal({
       type: 'info',
       title: `Put an username is not mandatory, but is friendlier for other users`,
       confirmButtonText: 'I get it!'
     })
   })
 }

 function getPosition (options) {
   return new Promise(function (resolve, reject) {
     navigator.geolocation.getCurrentPosition(resolve, reject, options)
   })
 }

 function convertNameValueFormToObject (form) {
   const data = form.serializeArray().reduce((acc, input) => {
     acc[input.name] = input.value
     return acc
   }, {})
   return data
 }
