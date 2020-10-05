import moment from 'moment-jalaali';

export const months = [
    {},
    {
      name: 'فروردین',
      value: 1,
      isFull: true
    },
    {
      name: 'اردیبهشت',
      value: 2,
      isFull: true
    },
    {
      name: 'خرداد',
      value: 3,
      isFull: true
    },
    {
      name: 'تیر',
      value: 4,
      isFull: true
    },
    {
      name: 'مرداد',
      value: 5,
      isFull: true
    },
    {
      name: 'شهریور',
      value: 6,
      isFull: true
    },
    {
      name: 'مهر',
      value: 7,
      isFull: false
    },
    {
      name: 'آبان',
      value: 8,
      isFull: false
    },
    {
      name: 'آذر',
      value: 9,
      isFull: false
    },
    {
      name: 'دی',
      value: 10,
      isFull: false
    },
    {
      name: 'بهمن',
      value: 11,
      isFull: false
    },
    {
      name: 'اسفند',
      value: 12,
      isFull: false
    }
  ]
export function convertDateShowMonths(enDate) {
    moment.loadPersian({dialect: 'persian-modern'})
    const faDate = moment(enDate, 'YYYY-M-D HH:mm:ss').format('jYY/jM/jD').split('/');
    return `${faDate[2]} ${months[faDate[1]].name} ${faDate[0]}`
}
export function convertDate(date,toPersian) {
    if(toPersian === 'a'){
        const newDate = moment(date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jMM/jD').split('/');
        return {
            year : newDate[0],
            month: newDate[1],
            day: newDate[2] 
        }
    }else if(toPersian === 'b'){
      return moment(date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jMM/jDD')
    }
    return moment(`${date} 00:00:00`, 'jYYYY/jM/jD HH:mm:ss').format('YYYY-M-D')
}
export function numberWithSpacesPrice(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function numberCart(x) {
    return x.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ` - `);
}

export function days(isFull) {
    let days = [];
    let maxDays = isFull ? 32 : 31;
    for(let i =1; i<maxDays; i++){
        days.push(i)
    }
    return days
}

export function years() {
    let years = [];
    for(let i = 1320; i< 1399; i++){
        years.push(i)
    }
    return years
}
const  vmsNationalCode = (input) => {
  if (!/^\d{10}$/.test(input)
|| input=='0000000000'
|| input=='1111111111'
|| input=='2222222222'
|| input=='3333333333'
|| input=='4444444444'
|| input=='5555555555'
|| input=='6666666666'
|| input=='7777777777'
|| input=='8888888888'
|| input=='9999999999')
      return false;
  let check = parseInt(input[9]);
  let sum = 0;
  let i;
  for (i = 0; i < 9; ++i) {
      sum += parseInt(input[i]) * (10 - i);
  }
  sum %= 11;
  return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
}
export function validationForm(objForm) {
  const errors = [];
  let isValid = true;
  const patternMobile =  /^(\+98|0|)?9\d{9}$/i;

  let patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  Object.keys(objForm).forEach(key=>{
    if(objForm[key] === "" || objForm[key] === null && key !== "district" && key !== "unit" ){
      errors[key] = 'پر کردن فیلد اجباری است!';
      isValid = false;
    }
    if(key === "mobile" && !patternMobile.test(objForm[key]) ) {
      errors[key] = 'این شماره موبایل معتبر نمی‌باشد.'
      isValid = false;
    }
    if(key === "nationalCode" && !vmsNationalCode(objForm[key].toString() )) {
      errors[key] = 'کد ملی وارد شده معتبر نمی باشد!'
      isValid = false;
    }
    if(key === "nationalNumber" && !vmsNationalCode(objForm[key]) ) {
      errors[key] = 'کد ملی وارد شده معتبر نمی باشد!'
      isValid = false;
    }
    if(key === "email" && !patternEmail.test(objForm[key]) ) {
      errors[key] = 'ایمیل وارد شده معتبر نمی باشد!'
      isValid = false;
    }
    if(key === "phone" && objForm[key].length !== 11 ) {
      errors[key] = 'شماره تماس وارد شده معتبر نمی باشد!'
      isValid = false;
    }
    if(key === "postalCode" && objForm[key].toString().length !== 10 ) {
      errors[key] = 'کد پستی وارد شده معتبر نمی باشد!'
      isValid = false;
    }
    
  })

  return {
    errors: errors,
    isValid : isValid
  };
}