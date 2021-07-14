var btn = $("#addBtn")
var input = $("#input")
var box = $('#box') 

var arr = []
var sto = localStorage.getItem("storageArr")

if(sto){
  arr = JSON.parse(sto)
}


init()
function init() {
  box.empty()
  for(var i = 0;i<arr.length;i++){
    

    box.append('<div class="item" id="item'+i+'">'+
    '<span class="span'+i+'">√</span>'+
    '<p onclick="changeState('+i+')">'+arr[i]+'</p>'+
    '<div onclick="deletethis('+i+')" class="delete">✖️</div>'+
  '</div>')
  }
}


function add() {
  var value = input.val() 
  if(!value)return
  if(arr.indexOf(value) !== -1){
    alert('输入重复')
    return
  }
  arr.push(value)
  localStorage.setItem("storageArr",JSON.stringify(arr))
  init()
  input.val('')
}

btn.click(add)

input.keydown(function (e) {
  if(e.keyCode==13)
  add()
  
})

function changeState(index) {

  var spani = $(".span"+index)
  var itemi = $("#item"+index)

  var str = spani.css("display")
  if (str == "none"){
    spani.css("display","inline")
    itemi.attr("class","item true")
    itemi.css("background-color","#ddd")

  }else{
    spani.css("display","none")
    itemi.attr("class","item")
    itemi.css("background-color","#f3f3f3")

  }
  
}

function deletethis(index) {
  arr.splice(index,1)
  localStorage.setItem("storageArr",JSON.stringify(arr))
  init()
}