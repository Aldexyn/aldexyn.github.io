const apply = document.getElementById('apply');
const warning = document.getElementById('warning');
const use = document.getElementById('use');
const price = document.getElementById('price');
const earn = document.getElementById('earn');
apply.addEventListener('click', function () {
    const mileage = parseInt(use.value);
    if (mileage > 1800) {
        warning.hidden = false;
        use.value = 0;
    } else {
        price.textContent = (6000 - mileage).toLocaleString();
        earn.textContent = ((6000 - mileage) * 0.25).toLocaleString();
    }
})