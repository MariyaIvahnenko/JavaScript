const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
    },
  ],
};

function findValueByKey(companyName, companyObj) {
  for (const key in companyObj) {
    if (companyObj.hasOwnProperty(key)) {
      if (key === "name" && companyObj[key] === companyName) {
        return companyObj;
      }

      if (typeof companyObj[key] === "object") {
        const result = findValueByKey(companyName, companyObj[key]);
        if (result) {
          return result;
        }
      }
    }
  }

  return null;
}

const clients = ["Клієнт 1.2.3"]; // ввести номер клієнта для отримання інформації про нього

for (const clientName of clients) {
  const result = findValueByKey(clientName, company);
  if (result) {
    console.log("Інформація про " + clientName + ":", result);
  } else {
    console.log("Клієнт " + clientName + " не знайдений");
  }
}
