const fs = require("fs");

class UsersService {
  filePath = `${process.cwd()}/src/data/users.json`;

  getUsers() {
    return new Promise((res, rej) => {
      fs.readFile(this.filePath, (err, data) => {
        if (err) {
          return res(false);
        }
        return res(JSON.parse(data));
      });
    });
  }

  createUser(data) {
    return new Promise((res, rej) => {
      fs.writeFile(this.filePath, JSON.stringify(data), (err, response) => {
        if (err) return res(false);

        return res({ message: "User created." });
      });
    });
  }

  updateUser(data) {
    return new Promise((res, rej) => {
      fs.writeFile(this.filePath, JSON.stringify(data), (err, response) => {
        if (err) return res(false);

        return res({ message: "User updated." });
      });
    });
  }

  deleteUser(data) {
    return new Promise((res, rej) => {
      fs.writeFile(this.filePath, JSON.stringify(data), (err, response) => {
        if (err) return res(false);

        return res({ message: "User deleted." });
      });
    });
  }
}

module.exports = new UsersService()