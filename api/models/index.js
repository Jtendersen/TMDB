const Users = require("./Users.js");
const Favorites = require("./Favorites.js");

Users.hasMany(Favorites);
Favorites.belongsTo(Users);
