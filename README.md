# Instagram 

# [Yestagram](https://instagram.yesdoing.xyz/)

## Introduction
Yestagram은 Instagram Clone Project입니다. 

## Tryout
<https://instagram.yesdoing.xyz/>

## Period
2018년 11월 ~ 2019년 1월

## Architecture
- <details>
  <summary>미리보기</summary>
  <div markdown="1">
  <img src="https://cloudcraft.co/view/39798db5-21f6-4ebf-968c-d0b0fe3f3463?key=_yTft9psUrK9gSV7HG7MJw"/>
  </div>
  </details>

## Feature
- Show Feed Image
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">

    </div>
    </details>
- Explore User
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">
    <img src="https://drive.google.com/open?id=1CscR-6jya5CQ5cjgrYefdEBgZc_WYZqY"/>
    </div>
    </details>
- Show User Profile
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">
    <img src="https://drive.google.com/open?id=1RjtDaf3GCBqGkMnthy0AQIQbQNHvVAGP" />
    </div>
    </details>
- Show Notification
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">

    </div>
    </details>
- Search User / Image
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">
    <img src="https://drive.google.com/open?id=1MaYWrDq51VL9snBzx7c4xNtQ0VBClkO4"/>
    </div>
    </details>
- Like / UnLike
- Add Comment
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">
    <img src="https://drive.google.com/open?id=1aOY0jEwgtFfccXgTI5IdiLHaP47zjxhj"/>
    </div>
    </details>
- Follow / UnFollow
- Upload Image
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">
    
    </div>
    </details>
- Show Detail Image
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">
        
    </div>
    </details>
- Show follower / following 
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">
    <img src="https://drive.google.com/open?id=1fEgcpZAx_c3zLb2vTCoCOvB8fU18Yr7u" />
    </div>
    </details>
- Login / SignUp
  - <details>
    <summary>미리보기</summary>
    <div markdown="1">
    <img src="https://drive.google.com/open?id=1D2Nim7cii_uBBwbXR9QMWPh8_u2laRYD" />
    <img src="https://drive.google.com/open?id=1ww6r9Dvp8FaqkDhrtYtOL0FiArTm3th7" />
    </div>
    </details>
- Facebook Login

## Prerequisites
- Chrome Browser(권장)

## Installation
```
git clone https://github.com/kimkyeseung/polyshaper.git
pipenv shell
pipenv install 
cd instagram/
python manage.py makemigrations && python manage.py migrate
python manage.py runserver

cd frontend/
yarn install 
yarn start
```

## Tech Stack
- Frontend
    - JavaScript(ES6+)
    - React(JSX, Redux, Ducks, Thunks)
    - Scss, CSS-Module
    - Webpack
    - NodeJS
    - Yarn
- Backend
    - Python(3.7), pipenv
    - Django(Django, Django-REST-Framework, Django-REST-auth, Cookiecutter Django)
    - PostgreSQL
- Project Managing: Trello
- VSC: Git(Github)

## Deployment
- AWS의 Elastic beanstalk, RDS, S3, EC2, Route53을 사용하여 배포하였습니다. 

## Planning
- Trello를 이용하여 일정을 관리하여 진행하였습니다. 