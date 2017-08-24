$('#menu-toggle').click(function (e) {
  e.preventDefault()
  $('#wrapper').toggleClass('toggled')
})

$('#search-form-home').on('submit', (e) => {
  e.preventDefault()
  window.location = '/products'
})
console.log('Hello')

/* range price */

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

var dragBox = document.getElementById('add-product')

function drop_handler (ev) {
  console.log('Drop')
  ev.preventDefault()
  // If dropped items aren't files, reject them
  var dt = ev.dataTransfer
  if (dt.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < dt.items.length; i++) {
      if (dt.items[i].kind == 'file') {
        var f = dt.items[i].getAsFile()
        dragBox.innerHTML = '... file[' + i + '].name = ' + f.name
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < dt.files.length; i++) {
      console.log('... file[' + i + '].name = ' + dt.files[i].name)
    }
  }
}

function dragover_handler (ev) {
  console.log('dragOver')
  // Prevent default select and drag behavior
  ev.preventDefault()
}

function dragend_handler (ev) {
  console.log('dragEnd')
  // Remove all of the drag data
  var dt = ev.dataTransfer
  if (dt.items) {
    // Use DataTransferItemList interface to remove the drag data
    for (var i = 0; i < dt.items.length; i++) {
      dt.items.remove(i)
    }
  } else {
    // Use DataTransfer interface to remove the drag data
    ev.dataTransfer.clearData()
  }
}

var me = {}
me.avatar = 'https://lh6.googleusercontent.com/-lr2nyjhhjXw/AAAAAAAAAAI/AAAAAAAARmE/MdtfUmC0M4s/photo.jpg?sz=48'

var you = {}
you.avatar = 'https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg'

function formatAMPM (date) {
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours || 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes
  var strTime = hours + ':' + minutes + ' ' + ampm
  return strTime
}

// -- No use time. It is a javaScript effect.
function insertChat (who, text, time = 0) {
  var control = ''
  var date = formatAMPM(new Date())

  if (who == 'me') {
    control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="' + me.avatar + '" /></div>' +
                            '<div class="text text-l">' +
                                '<p>' + text + '</p>' +
                                '<p><small>' + date + '</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>'
  } else {
    control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>' + text + '</p>' +
                                '<p><small>' + date + '</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' + you.avatar + '" /></div>' +
                  '</li>'
  }
  setTimeout(
        function () {
          $('.message').append(control)
        }, time)
}

function resetChat () {
  $('ul').empty()
}

$('.mytext').on('keyup', function (e) {
  if (e.which == 13) {
    var text = $(this).val()
    if (text !== '') {
      insertChat('me', text)
      $(this).val('')
    }
  }
})

// -- Clear Chat
resetChat()

// -- Print Messages
insertChat('me', 'Hello Tom...', 0)
insertChat('you', 'Hi, Pablo', 1500)
insertChat('me', 'What would you like to talk about today?', 3500)
insertChat('you', 'Tell me a joke', 7000)
insertChat('me', 'Spaceman: Computer! Computer! Do we bring battery?!', 9500)
insertChat('you', 'LOL', 12000)
