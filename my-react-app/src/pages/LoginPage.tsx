import React from "react"
import "./LoginPage.css"

const LoginPage: React.FC = () => {

  function handleLoginClick() {
    console.log("login click")
  }

  function handleRegisterClick() {
    console.log("register click")
  }

  function handleWechatClick() {
    console.log("wechat click")
  }

  function handleQQClick() {
    console.log("QQ click")
  }

  function handleWeboClick() {
    console.log("Weibo click")
  }

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="login_page/app_logo.png" alt="LoginPage AppLogo" className="logo" />
      </div>
      <p className="app">测试App</p>
      <div className="input-container">
        <div className="input-wrapper">
          <img src="login_page/account.png" alt="Username Icon" />
          <input type="text" placeholder="请输入账号" className="inputField" />
        </div>
      </div>
      <div className="input-container">
        <div className="input-wrapper">
          <img src="login_page/password.png" alt="Password Icon" />
          <input type="password" placeholder="请输入密码" className="inputField passwordField" />
        </div>
      </div>
      <button className="login-button" onClick={handleLoginClick}>登陆</button>
      <button className="register-button" onClick={handleRegisterClick}>注册</button>
      <p className="other-login-text">其它登陆方式</p>
      <div className="social-icons">
        <img src="login_page/wechat.png" alt="WeChat" onClick={handleWechatClick} />
        <img src="login_page/qq.png" alt="QQ" onClick={handleQQClick} />
        <img src="login_page/weibo.png" alt="Weibo" onClick={handleWeboClick} />
      </div>

    </div>
  )
};

export default LoginPage;