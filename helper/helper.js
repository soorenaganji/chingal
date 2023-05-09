const calcAge = (date) => {
  const dob = date;
  const birthDate = new Date(dob);
  const ageInMilliseconds = Date.now() - birthDate.getTime();
  const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365.25;
  const age = Math.floor(ageInYears);
  if(isNaN(age)){
    return ""
  }else{
      return age
  }
};

function persianToEnglish(str) {
  const persianDigits = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < 10; i++) {
    str = str.replace(persianDigits[i], englishDigits[i]);
  }

  return str;
}

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



export { calcAge , ageToDate , resetFormData , filterBySearchedPhrase  };
