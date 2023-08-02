const oracledb = require("oracledb");
const dbConfig = require("../../../config/database/db_config");
oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;
/*
    - oracledb.outFormat -
    설정하지 않으면 2차원 배열로 들어오기 때문에 key,value
    를 사용할 수 없다. [[값, 값, 값] [값, 값, 값]..]
    설정하면 1차원 배열에 [{}, {}...] 형식으로 들어온다
    즉, key,value를 사용해 정보를 가져올 수 있다
*/

const getMember = async(id) => {
    const con = await oracledb.getConnection(dbConfig);
    const sql = `select * from members02 where id='${id}'`;

    let member;
    try{
        member = await con.execute(sql);
    }catch(err){
        console.log(err);
    }
    return member;
}

const memberList= async() => {
    const con = await oracledb.getConnection(dbConfig);
    const sql = `select * from members02`;

    return (await con.execute(sql)).rows;
}

module.exports = { getMember, memberList };