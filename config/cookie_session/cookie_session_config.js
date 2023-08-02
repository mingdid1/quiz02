const sessionConfig = {
    secret : "암호화 키",
    resave : false,
    saveUninitialized : true
};

module.exports = { sessionConfig };

/*
resave (만들기)
    - true : 세션이 저장되어있는 경우라도 새롭게 세션을 만듦
    - false : 세션이 저장되어있고, 동일한 세션이라면 새롭게 만들지 않음

saveUninitialized (저장)
    - true : 세션의 정보가 수정되던 아니던 무조건 다시 저장
    - false : 세션이 수정되면 저장, 그렇지 않으면 안함
*/