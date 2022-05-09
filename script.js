"use strict";

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

const nameKey = "Name";

// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends."
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     `Wrong request! Choose between firstName, lastName, age, job, and friends.`
//   );
// }

const bestFriend = prompt(
  "Who is Jonas' best friend? Choose from Michael, Peter or Steven."
);

if (
  bestFriend === "Michael" ||
  bestFriend === "Peter" ||
  bestFriend === "Steven"
) {
  console.log(
    ` ${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${bestFriend}.`
  );
} else {
  console.log(
    `Wrong input! ${bestFriend} is not one of Jonas' friends. Please choose between Michael, Peter or Steven.`
  );
}
