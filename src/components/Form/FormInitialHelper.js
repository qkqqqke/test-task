import * as Yup from 'yup'

const regx = {
    name: /^[а-яА-Яa-zA-Z]{2,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
    text: /(?=^.{5,100}$)^(.+)$/
}

const userName = Yup.string()
    .matches(regx.name, "Кириллица латиница от 2 до 20 символов")
    .required('Введите имя')

const email = Yup.string()
    .matches(regx.email, "Формат example@mail.com")
    .required('Введите email')

const text = Yup.string()
.matches(regx.text, "Не более 100 символов")
.required('Введите текст')

export const schemas = {
    custom: Yup.object().shape({
        userName,
        email,
        text

    })
}

export const initialValues = {
    userName: '',
    email: '',
    text: ''
}

