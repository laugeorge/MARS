// Requiring bcrypt for password hashing
var bcrypt = require("bcryptjs");


// Creating our User model
// Set it as export because we will need it required on the server
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        job_title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // The username cannot be null, and must be unique
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.NOW,
            allowNull: false
        }, 
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: DataTypes.NOW,
        }
    });

    // Creating a custom method for our User model. 
    //This will check if an unhashed password entered by the 
    //user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };


    // Before a User is created, we will automatically hash their password
    User.beforeCreate("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};

