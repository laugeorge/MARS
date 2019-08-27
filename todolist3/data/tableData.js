// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    taskName: "Plant some potato",
    personToPerform: "Shanekia"
  },

  {
    taskName: "Plant more potato",
    personToPerform: "Kim"

  },
  {
    taskName: "Send text to Earth",
    personToPerform: "Chris"

  },
  {
    taskName: "Rover maintance",
    personToPerform: "Pooja"

  },
  {
    taskName: "Dump the trash",
    personToPerform: "George"

  },
  {
    taskName: "Call parents",
    personToPerform: "Chris"

  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
