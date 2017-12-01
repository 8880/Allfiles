const mysql = require('mysql');


/**
以线程池的方式去操作...
**/

const Con = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'mynode'
});

/**
使用Promise封装mysql
**/
let query = function(sql, values){
  return new Promise((resolve, reject)=> {
    Con.getConnection(function(err, connection){
      if (err) {
        reject(err);
      }else {
        connection.query(sql, values, (err, rows)=> {
          if (err) {
            reject(err);
          }else {
            resolve(rows);
          }
        });
      }
    });
  });
}

let value;

/**
作为数据库基类
**/

class MySqlDataBase{

  constructor(table) {
    this.table = table;
    this.con = Con;
  }


/**
一个map值...
**/

  async add(map){
    value = `INSERT INTO ${this.table} SET ?`;
    // value = 'INSERT INTO ' + this.table + ' SET ?';
    return await query(value, map);
  }

/**
查询所有
**/

  async queryAll(getResult){
    value = 'SELECT * FROM ' + this.table;
  }



/**
field1: 新的值
field2: 条件
**/

  async update(field1,field2){
    value = 'UPDATE ' + this.table + ' SET ' + field1 + ' = Where ' + field2 + ' = ?';
  }

/**
filed: 条件
**/

  async del(filed){
    value = 'DELETE FROM ' + this.table + ' WHERE ' + filed + ' = ? ';
  }

/**
根据mmp返该对象
该mmap只接收一个属性
**/
  async getThis(mmap){
    let key;
    for (let s in mmap) {
      key = s;
    }
    value = 'select * from ' + this.table + ' where ' + key + ' = "' + mmap[key] + '"';
    let res = await query(value);
    return res[0];
  }


/**
查找是否有符合条件的信息
**/
  async find(){

  }

/**
如果想重写  可以使用该方法   返回数据库对象...
**/
  getCon(){
    if (query) {
      return query;
    }else {
      return null;
      }
    }

}



module.exports = mysql;
module.exports = MySqlDataBase;
