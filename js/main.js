$(document).ready(function(){

  var btnFormConfirm = $('#btnFormConfirm');
  var inputFirstName = $('#inputFirstName');
  var inputLastName = $('#inputLastName');

  btnFormConfirm.on('click', function(){
    console.log('btn OK clicked');

    var firstNameLength = $.trim(inputFirstName.val());
    var lastNameLength = $.trim(inputLastName.val());


    if(firstNameLength.length === 0){
      console.log("Enter first name!");
    }else{
      console.log(inputFirstName.val() + "\n" + firstNameLength.length);
    }

    if(lastNameLength.length === 0){
      console.log("Enter last name!");
    }else{
      console.log(inputLastName.val() + "\n" + lastNameLength.length);
    }


    if ($("input[name='gender']:checked").length === 0) {
      console.log("Choose gender!");
    }else{
      var inputGender = $("input[name='gender']:checked").val();
      console.log(inputGender);
    }


  });



});
