function CustomObject() {
  this.data = {};
}

CustomObject.prototype = {
  constructor: CustomObject,

  setProperty: function (propertyName, value) {
    this.data[propertyName] = value;
  },

  getProperty: function (propertyName) {
    return this.data[propertyName];
  },

  getInfo: function () {
    console.log(this.data);
  },
};

const obj = new CustomObject();
obj.setProperty("property1", "Value1");
obj.setProperty("property2", "Value2");
obj.setProperty("property3", "Value3");
obj.getInfo(); // obj.getInfo() об'єкт, що виводить правильну властивість

obj.setProperty("newProperty1", "new 1");
obj.setProperty("newProperty2", "new 2");
obj.setProperty("newProperty3", "new 3");
obj.getInfo(); // Об'єкт, що виводить всі властивості, включаючи щойно додану.
