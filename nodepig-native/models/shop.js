const MySqlDataBase = require('./basedatabase');

//店铺
class Shop extends MySqlDataBase{
  constructor(table) {
    super(table);
  }
}


module.exports = Shop;
