<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>login</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/join.css" />
</head>

<body>
    <div class="background">
        <div class="mobile-container">
            <!-- 뒤로가기 버튼 -->
			<form action="joinToLogin">
            <button class="back" type="button">
                <i class="fa-solid fa-xmark"></i>
            </button>
			</form>

            <!-- 가입 박스 -->
            <div class="container">
                <div class="join-box">
                    <div class="join-logo">
                        <img src="images/logo.png" alt="logo" />
                    </div>
                    <div class="login-greetings">
                        <!-- 입력 창이 바뀔때마다 멘트 변경 -->
                        <p>안녕하세요</p>
                        <p>가입하실 이메일을 입력해주세요</p>
                    </div>

                    <div class="join-form">
                        <form action="joinMember" method="post">
                            <!-- 이메일 입력 -->
                            <div class="input input-email">
                                <label for="email" class="form-label">E-mail을 입력해주세요</label>
                                <div class="input-group">
                                    <input type="text" name="user_id" class="form-control" id="email" />
                                    <button type="button" class="duplicate-check-btn">중복확인</button>
                                </div>
                                <p id="result" class="form-text"></p>
                            </div>

                            <!-- 생년월일 입력 -->
                            <div class="input input-birth">
                                <label class="form-label">생년월일을 입력해주세요</label>
                                <div class="input-birth-group">
                                    <input type="text" name="rrn_front" id="residentIdFront" maxlength="6" placeholder="YYMMDD" required
                                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                        class="form-control w-50" />
                                    <span class="hyphen">-</span>
                                    <input type="password" name="rrn_back_first" id="residentIdBack" maxlength="1" placeholder="1~4" required
                                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                        class="form-control w-25" />
                                    <span class="mask">******</span>
                                </div>
                            </div>

                            <!-- 닉네임입력 -->
                            <div class="input input-nickname">
                                <label for="nickname" class="form-label">사용하실 닉네임을 입력해주세요</label>
                                <div class="input-group">
                                    <input type="text" name="user_nick" class="form-control" id="nickname" />
                                    <button type="button" class="duplicate-check-btn">중복확인</button>
                                </div>
                                <p id="result" class="form-text"></p>
                            </div>

                            <!-- 비밀번호 입력 -->
                            <div class="input input-password">
                                <label for="password" class="form-label">비밀번호를 입력해주세요</label>
                                <input type="password" name="user_pw" class="form-control" id="password" />
                            </div>

                            <!-- 가입 버튼 -->
                            <div class="join-btn">
                                <button type="submit" class="btn btn-outline-primary">JOIN</button>
                            </div>
                        </form>

                        <!-- 소셜 회원가입 안내 -->
                        <div class="social-join">
                            <span>or</span>
                        </div>
                        <div class="google-join-form">
                            <!-- 구글 회원가입 폼 자리 -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

	<!-- Bootstrap JS -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
		
		<!-- 1) jQuery: integrity/crossorigin 제거 -->
		<script src="https://code.jquery.com/jquery-3.6.0.min.js">
		</script>

		<!-- 2) 이메일 중복체크 AJAX (jQuery 로드 후) -->
		<script type="text/javascript">
			$(function() {
				$('#dupBtn').on(
						'click',
						function() {
							const email = $('#email').val().trim();
							if (!email) {
								$('#result').text('이메일을 입력해주세요.').css('color',
										'red');
								return;
							}
							$.ajax({
								url : '/web/checkEmail',
								method : 'GET',
								data : {
									email : email
								},
								success : function(res) {
									if (res === 'true') {
										$('#result').text('사용 가능한 이메일 입니다.').css(
												'color', 'green');
									} else {
										$('#result').text('이미 사용 중인 이메일 입니다.').css(
												'color', 'red');
									}
								},
								error : function(err) {
									console.error('AJAX 요청 실패:', err);
									$('#result').text('서버 통신 중 오류가 발생했습니다.').css(
											'color', 'red');
								}
							});
						});
			});
		</script>
	</body>

	</html>