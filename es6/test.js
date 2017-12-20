"use strict";

/** es6新增的變數指派方式 */
const sentences = [
  { subject: "Javascript", verb: "is", object: "great" },
  { subject: "Elephants", verb: "are", object: "large" }
];

/** log出所有的引數 */
function say({ subject, verb, object }) {
  console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
  say(s);
}
