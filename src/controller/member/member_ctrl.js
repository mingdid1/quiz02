const ser = require("../../service/member/member_service");

const login = (req, res)=> {
    res.render("member/login", {username : req.session.username});
}

// 비동기방식 -> 동기방식으로 바꿔줘야함 (async사용)
const loginCheck = async(req, res)=> {
    console.log("===ctrl logincheck ===");
    console.log(req.body);
    const msgPack = await ser.loginCheck(req.body);

    console.log("msgPack : ", msgPack);
    console.log("msgPack.result : ", msgPack.result);
    if(msgPack.result === 0){
        req.session.username = req.body.id;
    }
    res.send(msgPack.msg);
}

const logout = (req, res)=> {
    req.session.destroy();	// session 삭제
    res.clearCookie("isLogin");	// cookie 삭제
    res.redirect("/");
}

const list = async(req, res)=>{
    const mList = await ser.memberList();
    
    res.render("member/list", {username : req.session.username, list : mList});
    // header파일이 .ejs에 들어가기때문에 다 작성해줘야함
    // cookie설정해주면 header파일 쓸 때마다 안넣어줘도 됨
}

module.exports = { login, loginCheck, logout, list };