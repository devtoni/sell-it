$('#menu-toggle').click(function (e) {
  e.preventDefault()
  $('#wrapper').toggleClass('toggled')
})

console.log('Hello')

/* range price */

var lowerSlider = document.querySelector('#lower')
var upperSlider = document.querySelector('#upper')

document.querySelector('#two').value = upperSlider.value
document.querySelector('#one').value = lowerSlider.value

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
  document.querySelector('#two').value = this.value
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
  document.querySelector('#one').value = this.value
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
