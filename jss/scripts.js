console.log('external Js')
const Weight = document.getElementById('input-Weight');
const Age = document.getElementById('input-Age');
const Heigh = document.getElementById('input-Heigh');
const resultBMIElement = document.querySelector('.result-BMI');
const categoryBMIElement = document.querySelector('.category-BMI');
const dataUserElement = document.querySelector('data-user .Age');
const genderElement = document.querySelector('data-user .Gender');

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
    event.preventDefault(); 

    const Hg = parseFloat(Heigh.value)/ 100;
    const Wg = parseFloat(Weight.value);
    const Ag = parseFloat(Age.value, 10);

    if (Weight.value==0 || Heigh.value==0) {
        alert ("Please enter valid values for weight and height")
        return;
    }

    let bmi = Wg / (Hg * Hg);
    bmi = bmi.toFixed(1);

    resultBMIElement.textContent = bmi;
    categoryBMIElement.textContent = '${klasifikasi(parseFloat(bmi))}';
    dataUserElement.textContent ='$(Ag)';
    genderElement.textContent = gender.value;
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
document.getElementById('form-submit').addEventListener('submit', Submitbmi);
document.getElementById('reset-button').addEventListener('click',resetForm);