var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dmitro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru",
  },
];

// Перевірка доменів gmail.com та yahoo.com
var trustedDomainRegex = /@(gmail\.com|yahoo\.com)$/;

// Валідації перед символом @
var simpleValidationRegex = /^[\w\d]+(?:\.[\w\d]+)?@/;

var trustedEmails = arr.reduce(function (result, emailObj) {
  if (
    trustedDomainRegex.test(emailObj.email) &&
    simpleValidationRegex.test(emailObj.email)
  ) {
    result[result.length] = emailObj.email;
  }
  return result;
}, []);

console.log(trustedEmails);
