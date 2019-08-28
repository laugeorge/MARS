// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    username: "georgelau",
    password: "password"
  },
  {
    username: "chrisuranus",
    password: "password"
  },
  {
    username: "shanekiajones",
    password: "password"
  },  {
    username: "poojachauhan",
    password: "password"
  },
  {
    username: "kimspiegel",
    password: "password"
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
