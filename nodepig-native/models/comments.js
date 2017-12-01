const MySqlDataBase = require('./basedatabase');

//评论表
class Connent extends MySqlDataBase{
  constructor(table) {
    super(table);
  }
}


module.exports = Connent;
