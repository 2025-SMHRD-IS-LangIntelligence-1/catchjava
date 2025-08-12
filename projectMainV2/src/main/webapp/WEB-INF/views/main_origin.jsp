<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>main</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="assets/css/main.css">
</head>

<body data-has-position="${hasPosition}">
<div class="background">
    <div class="mobile-container">
        <!-- 모달 오버레이 -->
        <div class="modal-overlay" id="Modal">

            <!-- 주포지션 모달 -->
            <div class="modal-content modal-step modal-step--main">
                <div class="modal-title">주포지션을 선택해주세요</div>
                <div class="modal-buttons--main">
                    <button type="button" class="position-option main-option" value="1">탑</button>
                    <button type="button" class="position-option main-option" value="2">정글</button>
                    <button type="button" class="position-option main-option" value="3">미드</button>
                    <button type="button" class="position-option main-option" value="4">원딜</button>
                    <button type="button" class="position-option main-option" value="5">서포터</button>
                    <button type="button" class="position-option main-option" value="6">올라운더</button>
                </div>
            </div>

            <!-- 부포지션 모달 -->
            <div class="modal-content modal-step modal-step--sub">
                <div class="modal-title">부포지션을 선택해주세요</div>
                <div class="modal-buttons--sub">
                    <button type="button" class="position-option sub-option" value="1">탑</button>
                    <button type="button" class="position-option sub-option" value="2">정글</button>
                    <button type="button" class="position-option sub-option" value="3">미드</button>
                    <button type="button" class="position-option sub-option" value="4">원딜</button>
                    <button type="button" class="position-option sub-option" value="5">서포터</button>
                </div>
                <div class="modal-skip-button">
                    <button class="skip">
                        SKIP
                        <i class="fa-solid fa-angles-right"></i>
                    </button>
                </div>
            </div>

            <!-- 시간대 선택 모달 -->
            <div class="modal-content modal-step modal-step--time">
                <div class="modal-title">주로 게임하는 시간대를 선택해주세요</div>
                <div class="day-buttons">
                    <button class="day-option" data-day="월">월</button>
                    <button class="day-option" data-day="화">화</button>
                    <button class="day-option" data-day="수">수</button>
                    <button class="day-option" data-day="목">목</button>
                    <button class="day-option" data-day="금">금</button>
                    <button class="day-option" data-day="토">토</button>
                    <button class="day-option" data-day="일">일</button>
                </div>
                <!-- 시간 선택 스크롤 피커 UI -->

                <form class="max-w-[16rem] mx-auto grid grid-cols-2 gap-4 form-time" action="updateAvailability" method="post">
                    <div>
                        <label for="start-time"
                               class="block mb-2 text-sm font-bold text-gray-900 text-center dark:text-white">Start
                            time</label>
                        <div class="relative">
                            <input type="time" id="start-time" name="available_start"
                                   class="font-bold bg-gray-50 border leading-none border-gray-300 text-gray-900 text-center text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                                   min="09:00" max="18:00" value="00:00" required />
                        </div>
                    </div>
                    <div>
                        <label for="end-time"
                               class="block mb-2 text-sm font-bold text-gray-900 text-center dark:text-white">End
                            time</label>
                        <div class="relative">
                            <input type="time" id="end-time" name="available_end"
                                   class="font-bold bg-gray-50 border leading-none border-gray-300 text-gray-900 text-center text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                                   min="09:00" max="18:00" value="00:00" required />
                        </div>
                    </div>
                </form>
                <!-- 선택된 요일을 ,로 합쳐서 담음 (예: 월,수,금) -->
                <input type="hidden" id="daysInput" name="available_days" value="">
                <div class="modal-actions">
                    <button class="btn btn-cancel">취소</button>
                    <button class="btn btn-save">저장</button>
                </div>
            </div>
        </div>
        <!-- 길드 생성 모달 -->
        <div class="modal-content modal-step modal-step--guildcreate">
            <div class="modal-title">새 길드 만들기</div>
            <form onsubmit="return handleQuickCreate(event)">
                <label class="form-label" for="guildName">길드 이름</label>
                <input id="guildName" type="text" class="form-control input-plain" placeholder="길드 이름"
                       maxlength="20" required>

                <label class="form-label" for="guildIntro">한 줄 소개</label>
                <input id="guildIntro" type="text" class="form-control input-plain" placeholder="예: 매너 환영!"
                       maxlength="30">

                <label class="form-label">필요 라인</label>
                <div class="line-select-buttons">
                    <button type="button" data-line="탑">탑</button>
                    <button type="button" data-line="정글">정글</button>
                    <button type="button" data-line="미드">미드</button>
                    <button type="button" data-line="원딜">원딜</button>
                    <button type="button" data-line="서포터">서포터</button>
                </div>

                <!-- 실제 데이터 전송용 hidden input -->
                <input type="hidden" id="guildNeed" name="guildNeed">

                <div class="modal-actions" style="display:flex;gap:10px;">
                    <button type="button" class="btn btn-cancel" onclick="closeGuildCreate()">취소</button>
                    <button type="submit" class="btn btn-save">만들기</button>
                </div>
            </form>
        </div>
    </div>
    <!-- 헤더 - 로고, 로그인(프로필) -->
    <header class="header">
        <div class="header__left"></div>
        <div class="header__center">
            <img src="images/logo.png" class="logo" alt="로고">
        </div>
        <div class="header__right">
            <c:if test="${empty member}">
                <a href="login" class="link--login">로그인</a>
            </c:if>
            <!-- 프로필 클릭 시 나오는 -->
            <c:if test="${not empty member}">
                <button class="button--profile" type="button">
                    <i class="fa-solid fa-circle-user"></i>
                </button>


                <div class="user-panel">
                    <div class="user-panel__header">
                        <button class="button--close" type="button">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                        <span class="user-panel__title">내정보</span>
                        <button class="button--settings" type="button">
                            <i class="fa-solid fa-gear"></i>
                        </button>
                    </div>
                    <div class="user-panel__info">
                        <button class="user-panel__profile-view-btn" type="button">
                            <i class="fa-solid fa-circle-user"></i>
                        </button>
                        <div class="user-panel__top">
                            <span class="user-panel__nickname">유저 닉네임</span>
                            <span class="user-panel__gameprofile">포지션: 미드 / 정글</span>
                            <span class="user-panel__gameprofile">게임 시간대: 오후 6시 ~ 10시</span>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="user-panel__menu">
                        <a href="../HTML/edit-profile.html">개인정보 수정</a>
                        <a href="#">최근 본 글</a>
                        <a href="#">고객센터</a>
                        <a href="logout">로그아웃</a>
                    </div>
                </div>
            </c:if>
        </div>
    </header>
    <!-- 네비게이션 바 -->
    <nav class="nav-bar">
        <div class="nav-bar__item btn-home"><a href="#" class="nav-bar__link">홈</a></div>
        <div class="nav-bar__item btn-guild"><a href="#" class="nav-bar__link">길드</a></div>
    </nav>
    <main>
        <section class="main-section">
            <!-- esports 경기 일정 -->
            <section class="section esports-schedule">
                <div class="section__title">
                    <p>Esports 경기 일정</p>
                </div>
                <!-- <div class="calendar"></div> -->
                <div class="calendar">
                    <button class="calendar__day" data-date="2025-07-29">29<br>Tue</button>
                    <button class="calendar__day" data-date="2025-07-30">30<br>Wed</button>
                    <button class="calendar__day" data-date="2025-07-31">31<br>Thu</button>
                    <button class="calendar__day calendar__day--highlight" data-date="2025-08-01">1<br>Fri</button>
                    <button class="calendar__day" data-date="2025-08-02">2<br>Sat</button>
                    <button class="calendar__day" data-date="2025-08-03">3<br>Sun</button>
                    <button class="calendar__day" data-date="2025-08-04">4<br>Mon</button>
                </div>
                <div class="schedule-header">
                    <div class="schedule-header__title">League of Legend</div>
                    <div class="schedule-header__category">
                        <button class="category__toggle">리그</button>
                        <div class="category__list">
                            <div class="category__row">
                                <span class="category__item">1</span>
                                <span class="category__item">2</span>
                                <span class="category__item">3</span>
                                <span class="category__item">4</span>
                                <span class="category__item">5</span>
                            </div>
                            <div class="category__row">
                                <span class="category__item">6</span>
                                <span class="category__item">7</span>
                                <span class="category__item">8</span>
                                <span class="category__item">9</span>
                                <span class="category__item">10</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="schedule-box">
                    <div class="match">
                        <div class="match-header">
                            <div class="match__time">today, 5:00 PM</div>
                            <button class="match__result-button">경기결과</button>
                        </div>
                        <div class="match__content">
                            <div class="team">
                                <div class="team__logo"><img src="#" alt="GEN 로고"></div>
                                <div class="team__name">GEN</div>
                                <div class="team__score"><span>0</span></div>
                            </div>
                            <div class="vs">vs</div>
                            <div class="team">
                                <div class="team__logo"><img src="#" alt="KT 로고"></div>
                                <div class="team__name">KT</div>
                                <div class="team__score"><span>0</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- esports 뉴스 -->
            <section class="section esports-news">
                <div class="section__title">
                    <p>Esports 뉴스</p>
                </div>
                <div class="news-category">
                    <button class="news-category__button">All</button>
                    <button class="news-category__button">T1</button>
                    <button class="news-category__button">GEN</button>
                    <button class="news-category__button">DK</button>
                </div>
                <div class="news">
                    <div class="news__card">
                        <div class="news__header">
                            <img src="images/히나.webp" alt="뉴스 이미지" class="news__image">
                            <div class="news__meta">
                                <h4 class="news__title">뉴스 제목</h4>
                                <div class="news__time">
                                    <img src="images/time.png" alt="시계 아이콘">
                                    <span>1h ago</span>
                                </div>
                            </div>
                        </div>
                        <div class="news__body">뉴스 내용</div>
                    </div>
                </div>
            </section>
        </section>
        <!-- 길드 페이지 -->
        <section class="guild-section">
            <!-- 길드 없을 때 -->
            <div class="guild-section--none">
                <!-- 게임프로필 미작성시 길드 페이지 들어오면 작성 -->
                <div class="game-profile-intro">
                    <div class="game-profile-form">
                        <div class="guild-profile-title">
                            <p>길드에 참여하려면 먼저</p>
                            <p>나만의 게임 프로필 만들어 주세요!</p>
                        </div>
                        <form name="gameProfileForm" id="gameProfileForm" action="createPosition" method="post">
                            <div class="game-profile-form-input">
                                <!-- 게임 닉네임 -->
                                <div class="input input-name">
                                    <label for="user_game_nick" class="form-label">게임 닉네임을 입력해주세요</label>
                                    <input type="text" class="form-control" id="user_game_nick"
                                           name="user_game_nick"
                                           placeholder="소환사이름#0000" required/>
                                </div>
                                <!-- hidden input: 서버 전송용 -->
                                <input type="hidden" id="PositionInput" name="user_position1" value="">
                                <!-- 주포지션 -->
                                <button type="button" class="input input-line">
                                    <div class="input-line-box">
                                        <div class="input-line-question">
                                            <span class="line line-question">주/부포지션을 선택해주세요</span>
                                            <span class="line my-line">주포지션 : ㅇㅇ</span>
                                        </div>
                                        <i class="fa-solid fa-angle-right input-position-btn"></i>
                                    </div>
                                </button>

                                <!-- hidden input: 서버 전송용 -->
                                <input type="hidden" id="mainPositionInput" name="user_position2" value="">
                                <!-- 시간대 선택 -->
                                <button type="button" class="input input-time">
                                    <div class="input-time-box">
                                        <div class="input-time-question">
                                            <span class="time time-question">주로 게임하는 시간대를 골라주세요!</span>
                                            <span class="time my-time">주 시간대 : ㅇㅇ</span>
                                        </div>
                                        <i class="fa-solid fa-angle-right input-time-btn"></i>
                                    </div>
                                </button>

                                <!-- 저장 버튼 -->
                                <div class="save-btn">
                                    <button type="submit" class="btn-outline-primary">저장</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="guild-find">
                    <div class="guild-section__title">
                        <P>길드 찾기</P>
                    </div>
                    <div class="guild-search">
                        <form class="guild-search__form" action="" method="get">
                            <input class="guild-search__input" type="text" name="" placeholder="길드를 입력하세요">
                            <button class="guild-search__button" type="submit">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                    <div class="divider"></div>
                    <div class="guild-list">
                        <div class="guild-card">
                            <div class="guild-card__header">
                                <img src="images/guild-icon.png" class="guild-card__icon">
                                <div class="guild-card__top">
                                    <div class="guild-card__info">
                                        <img src="images/guild-tier.png" class="guild-card__tier-icon">
                                        <span class="guild-card__name">길드 이름</span>
                                        <span class="guild-card__count">1/5</span>
                                    </div>
                                    <span class="guild-card__leader">(길드 개설자 이름)의 길드</span>
                                </div>
                            </div>
                            <div class="guild-card__body">
                                <span class="guild-card__intro">길드 한줄 소개</span>
                                <span class="guild-card__need">필요 라인</span>
                            </div>
                            <div class="sigh-up-btn-wrapper">
                                <button class="sign-up-btn">가입</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 길드 있을 때 -->
            <div class="guild-section--have">
                <div class="guild-page">
                    <div class="guild-scroll-area">
                        <div class="guild-header">
                            <img src="images/guild-icon.png" class="guild-own__icon">
                            <div class="guild-own__meta">
                                <div class="guild-own__info">
                                    <span class="guild-own__name">길드 이름</span>
                                    <span class="guild-own__count">1/5</span>
                                </div>
                                <div class="guild-own__tier">
                                    <img src="images/guild-tier.png" class="guild-own__tier-icon">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="2"
                                             aria-valuemin="0" aria-valuemax="5">
                                            2승
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="guild-own__notice">
                            <div class="notice-box">
                                <span class="notice-box__title">공지제목</span>
                                <div class="divider"></div>
                                <span class="notice-box__content">공지내용</span>
                            </div>
                        </div>
                        <!-- 길드 매칭 버튼 길드장만 볼 수 있음 -->
                        <div class="guild-matching-button-wrapper">
                            <button class="matching-button">매칭</button>
                        </div>
                        <!-- 로딩 오버레이 -->
                        <div class="loading-overlay">
                            <div class="loading-spinner"></div>
                            <p>매칭 대기 중...</p>
                        </div>
                        <!-- 매칭 수락 모달 -->
                        <div id="matchOverlay" class="modal-overlay">
                            <div class="match-card" role="dialog" aria-modal="true"
                                 aria-labelledby="matchTitle">
                                <header class="match-card__header">
                                    <div class="match-card__title">
                                        <img src="guild-tier.png" alt="" class="match-card__emblem" />
                                        <h3 id="matchTitle" class="match-card__name">상대 길드 이름</h3>
                                    </div>
                                </header>

                                <div class="match-card__body">
                                    <div class="match-card__stats">
                                        <span class="pill">전적 <b>10승 2패</b></span>
                                        <span class="pill">평균 티어 <b>골드 III</b></span>
                                    </div>
                                    <p class="match-card__desc">즐겜해요 😊 매너 플레이 환영!</p>
                                </div>

                                <footer class="match-card__actions">
                                    <button class="btn btn--secondary">거절</button>
                                    <button class="btn btn--primary">수락</button>
                                </footer>
                            </div>
                        </div>

                        <div class="guild-members">
                            <span class="guild-members__title">길드 멤버</span>
                            <div class="guild-members__list">
                                <!-- 반복되는 멤버 카드 -->
                                <div class="guild-member">
                                    <img src="images/profile.jpg" class="guild-member__profile" />
                                    <div class="guild-member-info">
                                        <div class="guild-member-top">
                                            <img src="images/guild-tier.png" class="guild-member__tier" />
                                            <span class="guild-member__name">이름</span>
                                            <span class="guild-member__role">길드장</span>
                                        </div>
                                        <div class="guild-member-lines">
                                            <span class="guild-member__line-main">주라인 : 미드</span>
                                            <span class="guild-member__line-sub">부라인 : 원딜</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="guild-member">
                                    <img src="images/profile.jpg" class="guild-member__profile" />
                                    <div class="guild-member-info">
                                        <div class="guild-member-top">
                                            <img src="images/guild-tier.png" class="guild-member__tier" />
                                            <span class="guild-member__name">이름</span>
                                            <span class="guild-member__role">길드원</span>
                                        </div>
                                        <div class="guild-member-lines">
                                            <span class="guild-member__line-main">주라인 : 미드</span>
                                            <span class="guild-member__line-sub">부라인 : 원딜</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="guild-member">
                                    <img src="images/profile.jpg" class="guild-member__profile" />
                                    <div class="guild-member-info">
                                        <div class="guild-member-top">
                                            <img src="images/guild-tier.png" class="guild-member__tier" />
                                            <span class="guild-member__name">이름</span>
                                            <span class="guild-member__role">길드원</span>
                                        </div>
                                        <div class="guild-member-lines">
                                            <span class="guild-member__line-main">주라인 : 미드</span>
                                            <span class="guild-member__line-sub">부라인 : 원딜</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="guild-member">
                                    <img src="images/profile.jpg" class="guild-member__profile" />
                                    <div class="guild-member-info">
                                        <div class="guild-member-top">
                                            <img src="images/guild-tier.png" class="guild-member__tier" />
                                            <span class="guild-member__name">이름</span>
                                            <span class="guild-member__role">길드원</span>
                                        </div>
                                        <div class="guild-member-lines">
                                            <span class="guild-member__line-main">주라인 : 미드</span>
                                            <span class="guild-member__line-sub">부라인 : 원딜</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="guild-member">
                                    <img src="images/profile.jpg" class="guild-member__profile" />
                                    <div class="guild-member-info">
                                        <div class="guild-member-top">
                                            <img src="images/guild-tier.png" class="guild-member__tier" />
                                            <span class="guild-member__name">이름</span>
                                            <span class="guild-member__role">길드원</span>
                                        </div>
                                        <div class="guild-member-lines">
                                            <span class="guild-member__line-main">주라인 : 미드</span>
                                            <span class="guild-member__line-sub">부라인 : 원딜</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section class="match-section">
            <header class="match-header">

            </header>

            <!-- 레드 진형 -->
            <section class="guild-block guild-block--red">
                <div class="guild-summary">
                    <div class="guild-summary__header">
                        <img src="images/guild-icon.png" class="guild-summary__emblem" alt="">
                        <div class="guild-summary__meta">
                            <h3 class="guild-summary__name">우리 길드 이름</h3>
                            <div class="guild-summary__pills">
                                <span class="pill">전적 <b>12승 4패</b></span>
                                <span class="pill">평균 티어 <b>플래 IV</b></span>
                            </div>
                            <!-- <p class="guild-summary__note">멘트(옵션)</p> -->
                        </div>
                    </div>
                </div>

                <section class="roster">
                    <h4 class="roster__title">레드 진형 라인업</h4>
                    <ul class="roster__list">
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임1</span>
                                <span class="member-tier">
                                            <img src="images/guild-tier.png">
                                            골드 I
                                        </span>
                                <span class="member-line">주라인: 미드 / 부라인: 원딜</span>
                            </div>
                        </li>
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임2</span>
                                <span class="member-tier">
                                            <img src="#">
                                            골드 II
                                        </span>
                                <span class="member-line">주라인: 탑 / 부라인: 정글</span>
                            </div>
                        </li>
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임3</span>
                                <span class="member-tier">
                                            <img src="#">
                                            플래티넘 IV
                                        </span>
                                <span class="member-line">주라인: 원딜 / 부라인: 서포터</span>
                            </div>
                        </li>
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임4</span>
                                <span class="member-tier">
                                            <img src="#">
                                            골드 III
                                        </span>
                                <span class="member-line">주라인: 정글 / 부라인: 미드</span>
                            </div>
                        </li>
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임5</span>
                                <span class="member-tier">
                                            <img src="#">
                                            실버 I
                                        </span>
                                <span class="member-line">주라인: 서포터 / 부라인: 탑</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>

            <!-- VS -->
            <div class="vs-sep">VS</div>

            <!-- 블루 진형 -->
            <section class="guild-block guild-block--blue">
                <div class="guild-summary">
                    <div class="guild-summary__header">
                        <img src="images/guild-icon.png" class="guild-summary__emblem" alt="">
                        <div class="guild-summary__meta">
                            <h3 class="guild-summary__name">상대 길드 이름</h3>
                            <div class="guild-summary__pills">
                                <span class="pill">전적 <b>10승 6패</b></span>
                                <span class="pill">평균 티어 <b>골드 I</b></span>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="roster">
                    <h4 class="roster__title">블루 진형 라인업</h4>
                    <ul class="roster__list">
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임A</span>
                                <span class="member-tier">
                                            <img src="#">
                                            플래티넘 IV
                                        </span>
                                <span class="member-line">주라인: 미드 / 부라인: 원딜</span>
                            </div>
                        </li>
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임B</span>
                                <span class="member-tier">
                                            <img src="#">
                                            골드 I
                                        </span>
                                <span class="member-line">주라인: 탑 / 부라인: 정글</span>
                            </div>
                        </li>
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임C</span>
                                <span class="member-tier">
                                            <img src="#">
                                            골드 II
                                        </span>
                                <span class="member-line">주라인: 원딜 / 부라인: 서포터</span>
                            </div>
                        </li>
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임D</span>
                                <span class="member-tier">
                                            <img src="#">
                                            실버 II
                                        </span>
                                <span class="member-line">주라인: 정글 / 부라인: 미드</span>
                            </div>
                        </li>
                        <li class="member-card">
                            <img src="profile.jpg" alt="프로필" class="member-profile">
                            <div class="member-info">
                                <span class="member-name">닉네임E</span>
                                <span class="member-tier">
                                            <img src="#">
                                            브론즈 I
                                        </span>
                                <span class="member-line">주라인: 서포터 / 부라인: 탑</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
            <footer class="match-actions">
                <button class="btn btn--secondary">취소</button>
                <button class="btn btn--primary">확정</button>
            </footer>
        </section>
    </main>
</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
<script src="assets/js/main.js"></script>
<script>
    (function () {
        // --- Main form wiring (positions) ---
        const mainForm = document.getElementById('gameProfileForm');
        if (mainForm) {
            const hp1 = document.getElementById('PositionInput');
            const hp2 = document.getElementById('mainPositionInput');

            document.querySelectorAll('.main-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    hp1.value = btn.value;
                    const prev = document.querySelector('.line.my-line');
                    if (prev) prev.textContent = '주포지션 : ' + btn.textContent.trim();
                });
            });
            document.querySelectorAll('.sub-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    hp2.value = btn.value;
                });
            });

            mainForm.addEventListener('submit', function (ev) {
                if (!hp1.value) {
                    ev.preventDefault();
                    alert('주포지션을 선택해주세요.');
                    return false;
                }
            });
        }

        // --- Availability form wiring (days/time) ---
        const availForm = document.getElementById('availabilityForm');
        if (availForm) {
            const daysHidden = document.getElementById('daysHidden');
            const dayButtons = document.querySelectorAll('.day-option');

            dayButtons.forEach(btn => {
                btn.setAttribute('type', 'button');
                btn.addEventListener('click', () => btn.classList.toggle('active'));
            });

            availForm.addEventListener('submit', function (ev) {
                const daysCsv = Array.from(dayButtons)
                    .filter(b => b.classList.contains('active'))
                    .map(b => b.value)
                    .join(',');
                daysHidden.value = daysCsv; // 예: "월,수,금"
                // 입력값은 name="available_start", name="available_end"에서 그대로 전송됨
            });
        }
    })();
</script>
</body>

</html>