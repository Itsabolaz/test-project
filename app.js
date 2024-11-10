const isLogin = (user) => {
    return true;
}

const isRegister = (user) => {
    return true;
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

const getUser = () => true;

const testUserAccess = (user) => {
  if(user.role === 'authenticated'){
    console.log('User role is admin!')
  } else {
    console.log('User role is guest!')
  }
}