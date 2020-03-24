const yup = require('yup');
const {ROLES, CODENAME } = require('../utils/constans');

const PHONE_REG = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
const PASSWORD_REG = /\S/;

const createUserBodySchemes = yup.object().shape({
    phone: yup.string().matches(PHONE_REG, {message: 'Вы должны ввести номер телефона в формате: +380ХХХХХХХХХ'}).required(),
    email: yup.string().email('Некорректное значение e-mail адреса').required(),
    password: yup.string().matches(PASSWORD_REG).min(8, 'Пароль должен содержать не менее 8 символов'),
    role: yup.mixed().oneOf(ROLES, 'Тип учетной записи должен быть один из ' + JSON.stringify(ROLES)),
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    codeName: yup.mixed().oneOf(CODENAME, 'Кодовое значение должено быть один из ' + JSON.stringify(CODENAME)),
});

let paramsScheme = yup.number().positive().integer();

const createEnterpriseBodySchemes = yup.object().shape({
    title: yup.string().required(),
    codeName: yup.mixed().oneOf(CODENAME, 'Кодовое значение должено быть один из ' + JSON.stringify(CODENAME)),
    address: yup.string(),
    industry: yup.string(),
    corporation: yup.string(),
});

const createContactBodySchemes = yup.object().shape({
    phone: yup.string().matches(PHONE_REG, {message: 'Вы должны ввести номер телефона в формате: +380ХХХХХХХХХ'}).required(),
    email: yup.string().email('Некорректное значение e-mail адреса'),
    fullName: yup.string().trim().required(),
    position: yup.string().trim(),
    description: yup.string().trim(),
});

const createCommentBodySchemes = yup.object().shape({
    commentDate: yup.date().required(),
    description: yup.string().trim(),
});

const createCallBodySchemes = yup.object().shape({
    callDate: yup.date().required(),
    description: yup.string().trim(),
});

module.exports = {
    paramsScheme,
    createUserBodySchemes,
    createEnterpriseBodySchemes,
    createContactBodySchemes,
    createCommentBodySchemes,
    createCallBodySchemes,
};