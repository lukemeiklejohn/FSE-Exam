$("#sneaker-table").tabulator({     
  layout:"fitColumns", //fit columns to width of table (optional)
  tooltips:true, // set tooltips to true or false   
  pagination:"local", //'local' or 'remote'. local loads all the data and then paginate while remote loads upon ajax call
  paginationSize:7, // number of rows before applying pagination
  movableColumns:true, // allows columns to be moved around
  resizableRows:true, // allows rows to be resize'  
    columns:[ //Define Table Columns
        {title:"Brand", field:"Brand", width:150},
        {title:"Style", field:"Style"},
        {title:"Color", field:"Color", align:"left"},
        {title:"Price", field:"Price"},
        {title:"Date", field:"Date", sorter:"date"},
    ],        
});

var localdata = sneakers

$("#sneaker-table").tabulator("setData",localdata);      

  $("#download-button").on("click", function(){
    $("#sneaker-table").tabulator("download", "csv", "Your owned sneakers.csv");
});

$(document).ready(function() {
  $("#btn").click(function(e){
    //  var jsonData = localdata;
   var formData = $("#myform").serializeArray();
  console.log(formData);

  var returnArray = {};
  for (var i = 0; i < formData.length; i++){
    returnArray[formData[i]['name']] = formData[i]['value'];
  }

  
  console.log('returnArray',returnArray)
  localdata[localdata.length] = returnArray
  //  $.each(returnArray, function() {
  //       if (jsonData[this.name]) {
  //          if (!jsonData[this.name].push) {
  //              jsonData[this.name] = [jsonData[this.name]];
  //          }
  //          jsonData[this.name].push(this.value || '');
  //      } else {
  //          jsonData[this.name] = this.value || '';
  //      }


  //  });
   console.log(localdata[localdata.length-1])
   console.log(localdata);
    // $.ajax(
    // {
    //     url : "action.php",
    //     type: "POST",
    //     data : jsonData,

    // });
    e.preventDefault(); 
});
});

// const form = document.querySelector('form')
// const ul = document.querySelector('ul')
// const button = document.querySelector('button')
// const input = document.getElementById('item')
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem('items'))

// const liMaker = text => {
//   const li = document.createElement('li')
//   li.textContent = text
//   ul.appendChild(li)
// }

// form.addEventListener('submit', function(e) {
//   e.preventDefault()

//   itemsArray.push(input.value)
//   localStorage.setItem('items', JSON.stringify(itemsArray))
//   liMaker(input.value)
//   input.value = ''
// })

// data.forEach(item => {
//   liMaker(item)
// })

// button.addEventListener('click', function() {
//   localStorage.clear()
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild)
//   }
// })