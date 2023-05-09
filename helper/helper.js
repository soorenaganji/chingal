// GETS THE DATE OF BIRTH FROM THE API AND CALCULATES THE USER AGE
const calcAge = (date) => {
  const dob = date;
  const birthDate = new Date(dob);
  const ageInMilliseconds = Date.now() - birthDate.getTime();
  const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365.25;
  const age = Math.floor(ageInYears);
  // LAST CHECK TO ENSURE THAT AGE IS VALID
  if(isNaN(age)){
    return ""
  }else{
      return age
  }
};
// IT GETS THE PERSIAN DIGITS FROM THE CLIENT IN THE AGE INPUT AND CONVERTS IT TO ENGLISH DIGIT TO BE VALID AS WE SEND IT TO THE BACKEND
function persianToEnglish(str) {
  const persianDigits = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < 10; i++) {
    str = str.replace(persianDigits[i], englishDigits[i]);
  }

  return str;
}
// THIS ONE DOES THE OPISITE OF THE "calcAge" FUNCTION , IT GETS THE AGE AND CALCULATES THE DATE OF BIRTH
const ageToDate = (ageString) => {
  const ageInEnglish = persianToEnglish(ageString);
  const age = parseInt(ageInEnglish);
  const today = new Date();
  const year = today.getFullYear() - age;
  const month = today.getMonth();
  const day = today.getDate();
  const birthDate = new Date(year, month, day);
  if(ageString == ""){
   return "" 
  }
  return birthDate.toISOString();
};
// THIS FUNC CALIBRATES THE FORM AFTER USING
const resetFormData = (setNewUserData) => {
  setNewUserData({
    name: "",
    avatar : "",
    phoneNumber: "",
    country: "",
    city: "",
    email: "",
    street: "",
    zipcode: "",
    dateOfBirth: "",
  });

}
// IT GETS THE SEARCHED PHRASE IN THE SEARCHBAR FROM THE CLIENT AND FILTERS USERS NAMES
// WHEN THE SEARCH BAR VALUE IS AN EMPTY STRING , ALL DATA INCLUDE "" SO THAT WOULD BE ALL USERS
const filterBySearchedPhrase = (data , searchedPhrase) => {
  const searchedUsers = [];
  data.map((user) => {
    if (user.name.toLowerCase().includes(searchedPhrase.toLowerCase())) {
        searchedUsers.push(user);
        return
    }
  });
  return searchedUsers
}

const validateParametters = (parametter) => {
  if (!!parametter){
    return parametter
  }else{
    return "وارد نشده"
  }
}

export { calcAge , ageToDate , resetFormData , filterBySearchedPhrase , validateParametters };
