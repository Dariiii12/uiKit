$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
});
$("#demo_0").ionRangeSlider({
    min: 0,
    max: 1000,
    from: 0,
    to: 1000,
    step: 1,            // default 1 (set step)
    type: "double",
});
$("#demo-price").ionRangeSlider({
    values: ['XS', 'S', 'M', 'L', 'XL'],
    from: 2,
    step: 1,
    type: "single",
});
$('#form').submit(function (event) {
    let formData = {};
    event.preventDefault();
    [...$('#form input')].forEach(function (item, i, arr) {
        let objectKey = $(item).attr('data-field-type');
        let objectValue = $(item).val()
        formData[objectKey] = {
            value: objectValue,
            valid: null
        };
        if (objectKey === 'email') {
            formData[objectKey].valid = validEmail(objectValue)
        }
        if (objectKey === 'login') {
            formData[objectKey].valid = validLogin(objectValue)
        }
        if (objectKey === 'password') {
            formData[objectKey].valid = validPassword(objectValue)
        }

    });
    if (!equallyPassword()) {
        alert('Поля пароль1 и пароля2 не совпадают!')
    }
});

function validEmail(email) {
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

function validLogin(login) {
    const re = /^[a-z]{6,}$/;
    return re.test(String(login));
}

function validPassword(password) {
    let re = /^[A-Za-z]{6,24}$/;
    return re.test(String(password));
}

function equallyPassword() {
    const input1 = $('#form input[data-field-type="password"]');
    const input2 = $('#form input[data-field-type="password-2"]');
    return input1.val() === input2.val();
}
