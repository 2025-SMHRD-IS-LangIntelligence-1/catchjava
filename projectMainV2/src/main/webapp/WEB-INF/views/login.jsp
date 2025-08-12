<%@ page language="java"
         contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
 <!DOCTYPE html>
 <html lang="en">

 <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <title>Login</title>
     <link rel="stylesheet" href="assets/css/login.css" />
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
 </head>

 <body>
     <div class="background">
         <div class="mobile-container">
             <!-- 뒤로가기 버튼 -->
			 <form action="loginToMain">
             <button class="back" type="button">
                 <i class="fa-solid fa-xmark"></i>
             </button>
			 </form>
             <!-- 로그인 박스 -->
             <div class="container">
                 <div class="login-box">
                     <div class="login-logo">
                         <img src="images/logo.png" alt="logo" />
                     </div>
                     <div class="login-greetings">
                         <p>안녕하세요</p>
                         <p>같이할 팀을 만나기 위해서는<br>로그인이 필요해요!</p>
                     </div>

                     <div class="login-form">
                         <form action="loginMember" method="post">
                             <!-- 이메일 입력 -->
                             <div class="input input-email">
                                 <label for="email" class="form-label">E-mail을 입력해주세요</label>
                                 <div class="input-group">
                                     <input type="text" name="user_id" class="form-control" id="email" />
                                 </div>
                                 <p id="result" class="form-text"></p>
                             </div>

                             <!-- 비밀번호 입력 -->
                             <div class="input input-password">
                                 <label for="password" class="form-label">비밀번호를 입력해주세요</label>
                                 <input type="password" name="user_pw" class="form-control" id="password" />
                             </div>

                             <div class="forgot-password">
                                 <a href="#">Forgot password?</a>
                             </div>

                             <!-- 로그인 버튼 -->
                             <div class="login-btn">
                                 <button type="submit" class="btn btn-outline-primary">Login</button>
                             </div>
                         </form>

                         <div class="another-login-form">
                             <span class="or-text">- Or sign in with -</span>
                             <div class="google-login-form">
                                 <!-- 구글 로그인 폼 -->
                             </div>
                         </div>
                     </div>
                     <div class="question-join">
                         <span>Don't have an account? <a href="signUpBtn">Sign up</a></span>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </body>

 </html>