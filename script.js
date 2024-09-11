document.getElementById('calculateBtn').addEventListener('click', function() {
    
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    const bmi = (weight / (height ** 2)).toFixed(2);

    let bmiValue = '';
    if (bmi < 18.5) {
        bmiValue = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiValue = 'Normal Weight';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        bmiValue = 'Overweight';
    } else if (bmi >= 30.0) {
        bmiValue = 'Obesity';
    }

    document.getElementById('bmiResult').textContent = bmiValue;
});
