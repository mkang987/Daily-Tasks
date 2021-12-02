//Clock in header
setInterval(function () {
  $('#currentDay').html(moment().format('dddd MMMM Do YYYY, h:mm:ss a'))
}, 1000);

var containerEl = $(".container")
var currentHour = parseInt(moment().format("HH"))

//Set the label and hours
var hours = ["4AM", "5AM", "6AM", "7AM", "8AM","9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"]
var checkNow = "";

hours.forEach((value, index) => {
  var newRow = $("<div>").attr("class", "row")

  var newP = $("<p>").attr("class", "col-1 hour").text(value)
  var newText = $("<textarea>").attr("placeholder", "Insert Task Here").val(localStorage.getItem(value))
  if(index + 4 < currentHour){
      newText.attr("class", "col-10 past")
  }else if(index + 4 == currentHour){
      newText.attr("class", "col-10 present")
  }else {
      newText.attr("class", "col-10 future")
  }
  newText.focus(changeBackGround)
  newText.focusout(changeBackGroundBack)
  var newBtn = $("<button>").attr("class", "col-1 btn saveBtn far").text(" save")
  newBtn.on("click", textSave)

  newRow.append(newP)
  newRow.append(newText)
  newRow.append(newBtn)

  containerEl.append(newRow)
});

// save daily task to local storage
function textSave() {
  let value = $(this).prev().val()
  let key = $(this).prev().prev().text()

  localStorage.setItem(key, value)
}

// Change background color of the block based on time 
function changeBackGroundBack() {
  $(this).attr("class", "col-10 " + checkNow)
}


function changeBackGround() {
  checkNow = $(this).attr("class").split(" ")[1]
  $(this).attr("class", "col-10")
}
