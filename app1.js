const joi = require("joi");

const arrayString = ["banana", "bacon", "cheese"];
const arrayObjects = [{ example: "example1" }, { example: "example2" }];
const userInput = {
  personalInfo: {
    streetadress: "123456789",
    city: "asia",
    state: "ka",
  },
  preferences: arrayString,
};
