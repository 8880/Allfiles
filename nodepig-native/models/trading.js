const MySqlDataBase = require('./basedatabase');

//交易
class Thrading extends MySqlDataBase{
  constructor(table) {
    super(table);
  }
}


module.exports = Thrading;
