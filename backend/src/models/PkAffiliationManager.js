const AbstractManager = require("./AbstractManager");

class PkAffiliationManager extends AbstractManager {
  static table = "pk_affiliation";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(pkAffiliation) {
    return this.connection.query(
      `delete from ${this.table} where product_id = ? and keyword_id = ?`,
      [pkAffiliation.product_id, pkAffiliation.keyword_id]
    );
  }

  insert(pkAffiliation) {
    return this.connection.query(
      `insert into ${this.table} (product_id, keyword_id) values (?, ?)`,
      [pkAffiliation.product_id, pkAffiliation.keyword_id]
    );
  }
}

module.exports = PkAffiliationManager;
