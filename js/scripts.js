console.log('external Js');


//Klasfikasi hasil BMI
function klasfikasiBMI(bmi){
    if (bmi<18.5){
        return "Underweight";
    }else if (bmi < 25){
        return "Normal (Ideal)";
    }else if (bmi < 30){
        return "Overweight";
    } else {
        return "Obesity";
    }
}

//Perhitungan dan menampilkan hasil pada html page 
function hitungBmi(event){
    const Weight = document.getElementById("Weight").value;
    const Age = document.getElementById("Age").value;
    const Heigh = document.getElementById("Heigh").value;
    const resultBMIElement = document.querySelector(".result-BMI");
    // start 
    // const categoryBMIElement = document.querySelector(".category-BMI");
    const dataUserElement = document.getElementById("Umur");
    const gender = document.getElementsByName("gender");
    const genderElement = document.getElementById("jkel");
    // end 
    event.preventDefault(); 
    const Hg = parseFloat(Heigh)/ 100;
    const Wg = parseFloat(Weight);
    const Ag = parseFloat(Age, 10);
    if (Weight.value==0 || Heigh.value==0) {
        alert ("Please enter valid values for weight and height")
        return;
    }

    let bmi = Wg / (Hg * Hg);
    bmi = bmi.toFixed(1);
    resultBMIElement.textContent = bmi;
    // categoryBMIElement.textContent = '${klasifikasi(parseFloat(bmi))}';
    dataUserElement.textContent = Ag;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) genderElement.textContent = gender[i].value;
    }
    // end 
}

//Reset Button 
function resetForm() {
    document.getElementById('bmi-form').reset();
    resultBMIElement.textContent = '0.0';
    categoryBMIElement.textContent = '';
    dataUserElement.textContent = '';
    genderElement.textContent = '';
}

//Event Submit dan Reset
// document.getElementById('form-submit').addEventListener('submit', Submitbmi);
// document.getElementById('reset-button').addEventListener('click',resetForm);