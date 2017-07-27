function validate() {
    let username=$('#username');
    let email=$('#email');
    let password=$('#password');
    let confirmPassword=$('#confirm-password');
    let companyCheckBox=$('#company');
    let companyNumber=$('#companyNumber');
    let companyInfo=$('#companyInfo');
    let validationDiv=$('#valid');
    let submitBtn=$('#submit');
    let isValid=true;

    companyCheckBox.on('change',function () {
        if (companyCheckBox.is(':checked')) {
            companyInfo.css('display','block');
        }else{
            companyInfo.css('display','none');

        }
    });
    submitBtn.on('click',function (ev) {
        ev.preventDefault();
        validateForm();
        validationDiv.css("display",isValid ? "block" : "none");
        isValid=true;
    });
    function validateForm() {
        validateInputWithRegex(username,/^[A-Za-z\d]{3,20}$/g);
        validateInputWithRegex(email,/^.*?\@.*?\..*$/g);
        if (password.val()===confirmPassword.val()) {

            validateInputWithRegex(password,/^\w{5,15}$/g);
            validateInputWithRegex(confirmPassword,/^\w{5,15}$/g);
        }else{
            confirmPassword.css('border','solid red');
            password.css('border','solid red');
            isValid=false;
        }
        if (companyCheckBox.is(':checked')){
            validateCompanyInfo();

        }
    }
    function validateCompanyInfo() {
        let numValue=Number(companyNumber.val());

        if(numValue>999 && numValue<=9999){
            companyNumber.css('border','none');
        }else{
            companyNumber.css('border','solid red');
            isValid=false;
        }
    }
    function validateInputWithRegex(input,regex) {
        if (regex.test(input.val())) {
            input.css('border','none');

        }else{
            input.css('border','solid red');
            isValid=false;

        }
    }

}
