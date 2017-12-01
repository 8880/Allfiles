const MySqlDataBase = require('./basedatabase');

//用户
class User extends MySqlDataBase{
  constructor(table) {
    super(table);
  }

/**
查询此人是否存在
**/

  async find(name, pwd){
    let value = 'select username password from user where username = "' + name + '" and password = "' + pwd + '"';
    return super.getCon()(value);
  }
}


module.exports = User;
