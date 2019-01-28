# Instagram 

# [Yestagram](https://instagram.yesdoing.xyz/)

## Introduction
Yestagram은 Instagram Clone Project입니다. 

## Tryout
<https://instagram.yesdoing.xyz/>

## Period
2018년 11월 ~ 2019년 1월

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
    - JavaScript(ES6)
    - React(JSX, Redux, Ducks, Thunks)
    - SCSS
    - Webpack(CRA default)
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