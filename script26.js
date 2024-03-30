function expect(val) {
  return {
    toBe: function (expected) {
      if (expected === val) {
        console.log("true");
      } else {
        throw new Error("not equal")
      }
    },

    notToBe: function (unExpected) {
      if (val !== unExpected) {
        console.log("true");
      } else {
        throw new Error("equal")
      }
    },
  };
}
try {
  expect(5).toBe(5);
} catch (error) {
  console.error(error.message);
}

// function expect(val) {
//     return {
//       toBe: function (expected) {
//         if (val === expected) {
//           return true;
//         } else {
//           throw new Error("Not Equal");
//         }
//       },

//       notToBe: function (unexpected) {
//         if (val !== unexpected) {
//           return true;
//         } else {
//           throw new Error("Equal");
//         }
//       }
//     };
//   }
