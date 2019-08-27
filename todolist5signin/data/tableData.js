// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    first_name: "george",
    last_name: "lau",
    password: "password"
  },
  {
    first_name: "chris",
    last_name: "uranus",
    password: "password"
  },
  {
    first_name: "shanekia",
    last_name: "jones",
    password: "password"
  },  {
    first_name: "pooja",
    last_name: "chauhan",
    password: "password"
  },
  {
    first_name: "kim",
    last_name: "spiegel",
    password: "password"
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
