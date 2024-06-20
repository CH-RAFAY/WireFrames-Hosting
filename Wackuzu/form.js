document.addEventListener('DOMContentLoaded', function() {
    const brandSelect = document.getElementById('brand');
    const modelSelect = document.getElementById('model');
    const yearSelect = document.getElementById('year');
    const viewReviewButton = document.getElementById('viewReview');

    const modelsByBrand = {
        'smart': ['Fortwo', 'Forfour', 'Roadster'],
        // Add more brands and models as needed
    };

    const years = ['2020', '2019', '2018', '2017', '2016'];

    brandSelect.addEventListener('change', function() {
        modelSelect.disabled = false;
        modelSelect.innerHTML = '<option value="" disabled selected>Select model</option>';
        const models = modelsByBrand[brandSelect.value];
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model.toLowerCase();
            option.textContent = model;
            modelSelect.appendChild(option);
        });
        yearSelect.disabled = true;
        yearSelect.innerHTML = '<option value="" disabled selected>Select first registration</option>';
        viewReviewButton.disabled = true;
    });

    modelSelect.addEventListener('change', function() {
        yearSelect.disabled = false;
        yearSelect.innerHTML = '<option value="" disabled selected>Select first registration</option>';
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        });
        viewReviewButton.disabled = true;
    });

    yearSelect.addEventListener('change', function() {
        viewReviewButton.disabled = false;
    });
});
