
window.addEventListener('load', () => {
    const $ = (id) => document.getElementById(id);
    let empForm = $('empForm')
    empForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('8-Digit Employee ID:',  $('id').value);
        console.log('Full Name:', $('name').value);
        console.log('Digit Extension:', $('ext').value);
        console.log('Email:', $('email').value);
        console.log('Department:', $('department').value);
    });
});
