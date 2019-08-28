// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    taskName: "Plant some potato",
    user_id: "Shanekia"
  },
  {
    taskName: "Plant more potato",
    user_id: "Kim"
  },
  {
    taskName: "Send text to Earth",
    user_id: "Chris"
  },
  {
    taskName: "Rover maintance",
    user_id: "Pooja"
  },
  {
    taskName: "Dump the trash",
    user_id: "George"
  },
  {
    taskName: "Call parents",
    user_id: "Chris"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
