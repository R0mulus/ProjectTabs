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


  btnFormConfirm.on('click', function(){


    var firstNameLength = $.trim(inputFirstName.val());
    var lastNameLength = $.trim(inputLastName.val());
    var dobLenght = $.trim(inputDOB.val());

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

    var sum = 0;
    for(var i = 0; i < correctInput.length; i++){
      sum += correctInput[i];
    }
    if(sum === 4){
      resultTableContainer.removeClass("hide");
      resultTable.append("<tr id='person" + sequence + "'><td>" + inputFirstName.val() + "</td>" +
        "<td>" + inputLastName.val() + "</td>" +
        "<td>" + $.trim(inputDOB.val()) + "</td>" +
        '<td class="icon"><span class="glyphicon glyphicon-trash remove-button"></span></td>' +
        "</tr>");
    }

    $('.remove-button').on('click', function(){
      $(this).parent().parent().remove();

    });

  });




});
