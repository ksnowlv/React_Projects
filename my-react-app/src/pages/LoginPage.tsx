import React from "react"
import "./LoginPage.css"


const handleLoginPageOnClick = (eventName: string) => {
  console.log(eventName + " click");
};

const LoginPage: React.FC = () => {

  const handleLoginClick = () => handleLoginPageOnClick("login");

  const handleRegisterClick = () => handleLoginPageOnClick("register");

  const handleWechatClick = () => handleLoginPageOnClick("wechat")
  const handleQQClick = () => handleLoginPageOnClick("qq");
  const handleWeiboClick = () => handleLoginPageOnClick("weibo");

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="login_page/app_logo.png" alt="LoginPage AppLogo" className="logo" />
      </div>
      <p className="app">测试App</p>
      <div className="input-container">
        <div className="input-wrapper">
          <img src="login_page/account.png" alt="Username Icon" />
          <input type="text" placeholder="请输入账号" />
        </div>
      </div>
      <div className="input-container">
        <div className="input-wrapper">
          <img src="login_page/password.png" alt="Password Icon" />
          <input type="password" placeholder="请输入密码"  />
        </div>
      </div>
      <button className="login-button" onClick={handleLoginClick}>登陆</button>
      <button className="register-button" onClick={handleRegisterClick}>注册</button>
      <p className="other-login-text">其它登陆方式</p>
      <div className="social-icons">
        <img src="login_page/wechat.png" alt="WeChat" onClick={handleWechatClick} />
        <img src="login_page/qq.png" alt="QQ" onClick={handleQQClick} />
        <img src="login_page/weibo.png" alt="Weibo" onClick={handleWeiboClick} />
      </div>

    </div>
  )
};

export default LoginPage;