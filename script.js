
$(document).ready(function(){
    $(".hide-errors").click(function(){
        $(".error").hide();
    });


   
        // school id regex
    let nam = '^([a-zA-Z]){3}\.([0-9]){3}\.([0-9]){0,4}$'
    nam = new RegExp(nam)
    // end school id regex
    $(".error").hide();
    $('#student-check').hide();   
    // let schoolIdError = true;
    $('#studentid').keyup(function () {
        validateSchoolID();
    });

    function validateSchoolID() {
        let studentid = $('#studentid').val();
        if (!studentid.match(nam)){
            $(".error").show();
            $('#student-check').show();
            $('#studentid').css('backgroundColor', 'red');
            
        }else{
            $(".error").hide();
            $('#studentid').css('backgroundColor', 'lime');
            $('#student-check').show();
        }
      }

    // first name regex max 15
    let fname = '^([a-zA-Z]){3,15}$';
    fname = new RegExp(fname)
    $(".error").hide();
    $('#name-check').hide();   
    // let schoolIdError = true;
    $('#Firstname').keyup(function () {
        validateFullname();
    });

    function validateFullname() {
        let fullnameid = $('#Firstname').val();
        if (!fullnameid.match(fname)){
            $(".error").show();
            $('#name-check').show();
            $('#Firstname').css('backgroundColor', 'red');
        }else{
            $(".error").hide();
            $('#name-check').hide();
            $('#Firstname').css('backgroundColor', 'lime');
        }
      }
    // end first name regex max 15

    // last name regex max 25
    let lname = '^([a-zA-Z]){3,25}$';
    lname = new RegExp(lname)
    $(".error").hide();
    $('#lname-check').hide();   
    // let schoolIdError = true;
    $('#Lastname').keyup(function () {
        validateLastname();
    });

    function validateLastname() {
        let lastnameid = $('#Lastname').val();
        if (!lastnameid.match(lname)){
            $(".error").show();
            $('#lname-check').show();
            $('#Lastname').css('backgroundColor', 'red');
        }else{
            $(".error").hide();
            $('#Lastname').css('backgroundColor', 'lime');
            // $('#lname-check').hide();
        }
      }
    // end last name regex max 25

    // last name regex max 6 - 10
    let uname = '^([a-zA-Z]){6,10}$';
    uname = new RegExp(uname)
    $(".error").hide();
    $('#uname-check').hide();   
    // let schoolIdError = true;
    $('#Username').keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameid = $('#Username').val();
        if (!usernameid.match(uname)){
            $(".error").show();
            $('#uname-check').show();
            $('#Username').css('backgroundColor', 'red');
        }else{
            $(".error").hide();
            $('#uname-check').hide();
            $('#Username').css('backgroundColor', 'lime');
        }
      }
    // end last name regex 

    // last email regex max 6 - 8
    let email = '^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$';
    // antony12_3muriithi@&%g+mail.com+
    email = new RegExp(email)
    $(".error").hide();
    $('#email-check').hide();   
    // let schoolIdError = true;
    $('#Email').keyup(function () {
        validateEmail();
    });

    function validateEmail() {
        let emailid = $('#Email').val();
        if (!emailid.match(email)){
            $(".error").show();
            $('#email-check').show();
            $('#Email').css('backgroundColor', 'red');
        }else{
            $(".error").hide();
            $('#email-check').hide();
            $('#Email').css('backgroundColor', 'lime');
        }
      }
    // end email regex 
    
    // password regex max 6 - 10
    let pass = '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,8}$';
    pass = new RegExp(pass)
    $(".error").hide();
    $('#password-check').hide();   
    // let schoolIdError = true;
    $('#Password').keyup(function () {
        validatePassword();
    });

    function validatePassword() {
        let passwordid = $('#Password').val();
        if (!passwordid.match(pass)){
            $(".error").show();
            $('#password-check').show();
            $('#Password').css('backgroundColor', 'red');
        }else{
            $(".error").hide();
            $('#password-check').hide();
            $('#Password').css('backgroundColor', 'lime');
        }
      }
    // end last name regex 

    // phone number regex
    let phonereg = "\\(\\d{3}\\)\\s\\d{3}-\\d{4}";
    phonereg = new RegExp(phonereg)
    $(".error").hide();
    $('#phone-check').hide();   
    // let schoolIdError = true;
    $('#Phone').keyup(function () {
        validatePhone();
    });

    function validatePhone() {
        let phoneid = $('#Phone').val();
        if (!phoneid.match(phonereg)){
            $(".error").show();
            $('#phone-check').show();
            $('#Phone').css('backgroundColor', 'red');
        }else{
            $(".error").hide();
            $('#phone-check').hide();
            $('#Phone').css('backgroundColor', 'lime');
        }
      }

    function addressValues(){
        let street = $('#Street').val();
        let city = $('#City').val();
        let province = $('#Province').val();
        if (street === '' || city === '' || province === ''){
            $(".error").show();
            $('#address-check').show();
        }

    }
    
    // phone number regex

});
