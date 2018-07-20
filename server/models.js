const db = require('../db/dbConfig')

module.exports = {
  findOneUser(username) {
    return db.any(`
      SELECT * FROM users
      WHERE username = $1
    `, username);
  },

  addUser(data) {
    return db.none(`
      INSERT INTO users
        (fullname, username, birthday, email, profilepic, pass_digest)
      VALUES
        ($/fullName/, $/username/, $/birthday/, $/email/, $/profilePic/, $/pass_digest/)
    `, data);
  },

  findInterests() {
    return db.many(`
      SELECT interests.label, interests.id, COUNT(userinterests.userid)
      FROM userinterests RIGHT OUTER JOIN interests
      ON userinterests.interestid = interests.id
      GROUP BY interests.label, interests.id
      ORDER BY COUNT(userinterests.userid)
    `);
  }
}
