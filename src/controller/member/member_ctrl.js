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

const registerView = (req, res)=> {
    res.render("member/register_view",  { username : req.session.username});
}

const register = async (req, res)=> {
    console.log("register: ", req.body);
    let msg = await ser.insert(req.body);
    res.send(msg);
}

const memberView = async (req,res) =>{
    console.log("memberView ctrl: ", req.params);
    const member = await ser.getMember(req.params);
    console.log("controller memberview: ", member);
    res.render("member/member_view",{member, username : req.session.username});
}

const modifyView = async(req, res)=> {
    console.log("ctrl modify: ", req.query);
    const member = await ser.getMember(req.query);
    console.log("ctrl modify: ", member);
    res.render("member/modify_view", { username : req.session.username, member});
}

const modify = async (req, res)=>{
    console.log("modify : ", req.body);

    const msg = await ser.modify(req.body);
    res.send(msg);
}

const deleteMember = async (req,res) =>{
    const msg = await ser.deleteMember(req.params);
    res.send(msg);
}

module.exports = { login, loginCheck, logout, list ,
        registerView, register, modifyView, modify, memberView, deleteMember};