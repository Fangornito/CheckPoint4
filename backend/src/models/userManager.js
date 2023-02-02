const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findUserInfoByName(name) {
    return this.connection.query(
      `select id, name, role, hashed_password from ${this.table} where name = ?`,
      [name]
    );
  }
}
module.exports = userManager;
