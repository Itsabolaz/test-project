const isLogin = (user) => {
    return true;
}

const isRegister = (user) => {
    return true;
}
const getMe = (user) => {
    return 'User';
}

const addCourse = (course) => {
    return true;
}

const showNumber = (num) => {
    console.log(num)
}

const handleFormError = (errors) => {
    if(errors.length > 0) {
        console.log('There is something wrong with this form!')
    } else {
        console.log('your input is currect :) thanks.')
    }
}