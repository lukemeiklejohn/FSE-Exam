//Custom filter example
function customFilter(data){
  return data.car && data.rating < 3;
}

//Trigger setFilter function with correct parameters
function updateFilter(){

  var filter = $("#filter-field").val() == "function" ? customFilter : $("#filter-field").val();

  if($("#filter-field").val() == "function" ){
      $("#filter-type").prop("disabled", true);
      $("#filter-value").prop("disabled", true);
  }else{
      $("#filter-type").prop("disabled", false);
      $("#filter-value").prop("disabled", false);
  }

  $("#sneaker-table").tabulator("setFilter", filter, "like", $("#filter-value").val());
}

//Update filters on value change
$("#filter-field, #filter-type").change(updateFilter);
$("#filter-value").keyup(updateFilter);

//Clear filters on "Clear Filters" button click
$("#filter-clear").click(function(){
  $("#filter-field").val("");
  $("#filter-type").val("=");
  $("#filter-value").val("");

  $("#sneaker-table").tabulator("clearFilter");
});

$("#sneaker-table").tabulator({     
  layout:"fitColumns", //fit columns to width of table (optional)
  tooltips:true, // set tooltips to true or false   
  pagination:"local", //'local' or 'remote'. local loads all the data and then paginate while remote loads upon ajax call
  paginationSize:10, // number of rows before applying pagination
  movableColumns:true, // allows columns to be moved around
  resizableRows:true, // allows rows to be resize'  
  columns:[ //Define Table Columns
      {title:"Brand", field:"Brand", width:150, validator:["string","required","minLength:4"]},
      {title:"Style", field:"Style", validator:["string","required","minLength:4"]},
      {title:"Color", field:"Color", align:"left", validator:["string","required","minLength:3"]},
      {title:"Price", field:"Price", validator:["required","integer", "min:0"]},
      {title:"Date", field:"Date", sorter:"Date", validator:"required"},
  ],  
        
});

var localdata = sneakers
$("#sneaker-table").tabulator("setData",localdata);      

  $("#download-button").on("click", function(){
    $("#sneaker-table").tabulator("download", "csv", "Your owned sneakers.csv");
});


document.getElementById("btn").addEventListener("click", function(e){
  var formData = $("#myform").serializeArray();
  // var isValid = $("#myform").isValid();
  
  console.log(formData);

  
  var returnArray = {};
  var invalidForm = 0
  for (var i = 0; i < formData.length; i++){
    returnArray[formData[i]['name']] = formData[i]['value'];
    if(formData[i]['value'].length == 0) {invalidForm+=1};
  }

  console.log('returnArray',returnArray)
  localdata[localdata.length] = returnArray
  
  if(invalidForm == 0) {
    $("#sneaker-table").tabulator("setData",localdata)


    console.log(localdata[localdata.length-1])
    console.log(localdata);
  }
  
});


// $(document).ready(function() {
//   $("#btn").click(function(e){
    
//   var formData = $("#myform").serializeArray();
  
//   console.log(formData);

  
//   var returnArray = {};
//   for (var i = 0; i < formData.length; i++){
//     returnArray[formData[i]['name']] = formData[i]['value'];
//   }

  
//   console.log('returnArray',returnArray)
//   localdata[localdata.length] = returnArray
//   $("#sneaker-table").tabulator("setData",localdata)
//   //  $.each(returnArray, function() {
//   //       if (jsonData[this.name]) {
//   //          if (!jsonData[this.name].push) {
//   //              jsonData[this.name] = [jsonData[this.name]];
//   //          }
//   //          jsonData[this.name].push(this.value || '');
//   //      } else {
//   //          jsonData[this.name] = this.value || '';
//   //      }


//   //  });
//    console.log(localdata[localdata.length-1])
//    console.log(localdata);
//     // $.ajax(
//     // {
//     //     url : "action.php",
//     //     type: "POST",
//     //     data : jsonData,

//     // });
//     e.preventDefault(); 
// });
// });

