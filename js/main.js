$(document).ready(function(){

  var btnFormConfirm = $('#btnFormConfirm');
  var inputFirstName = $('#inputFirstName');
  var inputLastName = $('#inputLastName');
  var inputGender;
  var inputDOB = $('#inputDOB');
  var resultTable = $('#tableResults');
  var resultTableContainer = $('#divTableResults');
  var sequence = 0;

  //warning messages variables
  var warningFirstName = $('#warningMsgFirstName');
  var warningLastName = $('#warningMsgLastName');
  var warningDOB = $('#warningMsgDOB');
  var warningGender = $('#warningMsgGender');
  var correctInput = [0,0,0,0];

/*
  Adding row to result table
*/
  btnFormConfirm.on('click', function(){


    var firstNameLength = $.trim(inputFirstName.val());
    var lastNameLength = $.trim(inputLastName.val());
    var dobLenght = $.trim(inputDOB.val());

    //controling length of input fields
    if(firstNameLength.length === 0){
      warningFirstName.text('Enter first name!');
      correctInput[0] = 0;
    }else{
      warningFirstName.text('');
      correctInput[0] = 1;
    }

    if(lastNameLength.length === 0){
      warningLastName.text('Enter last name!');
      correctInput[1] = 0;
    }else{
      warningLastName.text('');
      correctInput[1] = 1;
    }


    if ($("input[name='gender']:checked").length === 0) {
      warningGender.text('Choose gender!');
      correctInput[2] = 0;
    }else{
      inputGender = $("input[name='gender']:checked").val();
      warningGender.text('');
      correctInput[2] = 1;
    }

    if(dobLenght.length === 0){
      warningDOB.text('Choose date!');
      correctInput[3] = 0;
    }else{
      warningDOB.text('');
      correctInput[3] = 1;
    }

    //Adding row to table and showing table
    var sum = 0;
    for(var i = 0; i < correctInput.length; i++){
      sum += correctInput[i];
    }
    if(sum === 4){
      resultTableContainer.removeClass("hide");
      resultTable.append("<tr id='person" + sequence + "' data-gender='" + inputGender + "'><td>" + inputFirstName.val() + "</td>" +
        "<td>" + inputLastName.val() + "</td>" +
        "<td>" + $.trim(inputDOB.val()) + "</td>" +
        '<td class="icon"><span class="glyphicon glyphicon-trash remove-button"></span></td>' +
        "</tr>");
        sequence++;
    }

/*
  removing table row
*/
    $('.remove-button').on('click', function(){
      $(this).parent().parent().remove();
      //count how many children table results have
      var count = $("#tableResults > tbody > *").length;
      if(count === 1){
        resultTableContainer.addClass("hide");
      }
    });

/*
  choosing gender display
*/
    $('input[name="resultGender"]:radio').on('change', function() {
        var radioGender = $('input[name=resultGender]:checked').val();
        var findFemales = $('tr[data-gender="female"]');
        var findMales = $('tr[data-gender="male"]');

        if(radioGender === 'male'){
          findFemales.hide();
          findMales.show();
        }else if(radioGender === 'female'){
          findFemales.show();
          findMales.hide();
        }else{
          findFemales.show();
          findMales.show();
        }
    });

  });




});
