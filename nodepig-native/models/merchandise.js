const MySqlDataBase = require('./basedatabase');

//商品
class Merch extends MySqlDataBase{
  constructor(table) {
    super(table);
  }
}


module.exports = Merch;
