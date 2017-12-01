const MySqlDataBase = require('./basedatabase');

//标签
class Tag extends MySqlDataBase{
  constructor(table) {
    super(table);
  }


}

module.exports = Tag;
