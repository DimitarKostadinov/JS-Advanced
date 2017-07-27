function bmiCalculator(name,age,weight,height) {
    let patient={
        name:name,
        personalInfo:{
            age:age,
            weight:weight,
            height:height
        }

    };
    let bmi=Math.round(weight/Math.pow(height/100,2));
    let status;
    switch(true){
        case bmi<18.5: status='underweight'; break;
        case bmi<25: status='normal'; break;
        case bmi<30: status='overweight'; break;
        case bmi>=30: status='obese'; break;
    }
    patient.BMI=bmi;
    patient.status=status;
    if(patient.status==='obese'){
        patient.recommendation='admission required';
    }
    return patient;
}
console.log(bmiCalculator('Honey Boo Boo', 9, 57, 137));