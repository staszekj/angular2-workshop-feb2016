## Download

* git [https://git-scm.com/download](https://git-scm.com/download)
* node 5.5.x [https://nodejs.org/en/](https://nodejs.org/en/)
* Your favourite dev framework (WebStorm, Eclipse)

## Install

```bash
# clone our repo
git clone https://github.com/staszekj/angular2-workshop-feb2016.git

# change directory to our repo
cd angular2-workshop-feb2016

# install the repo with npm
npm install
```

## Git

```bash
# remove local changes
git reset --hard

# switch to branch
git checkout <master, stage1, stage2, etc>
```


## Build

```bash
# Prepare `dist` directory 
npm run build
```

## Run dist directory

```bash
# Prepare `dist` directory 
npm run server:prod
```
Go to: [http://localhost:8080](http://localhost:8080)

## Run dev mode

```bash
# start server and watching the code changes
npm start
# or
npm run server:dev
```
Go to: [http://localhost:3000](http://localhost:3000)

## Run tests

```bash
# run unit tests ( Chrome browser is required )
npm test
```


## Links

<a href="http://workshop.eltrue.com" target="_blank">Working application</a>  
<br>
<a href="https://docs.google.com/forms/d/1F5p51L3odByLJFABuBEmI8srDlO-7jND6jX8hOYrarg/viewform?c=0&w=1&usp=mail_form_link" target="_blank">After workshop. Survey</a>
<br>
<a href="https://docs.google.com/document/d/1xI-YBoQK9EQnInzbrYWRI3uqQn4OSCEj0tkCqp5A7_g/edit?usp=sharing" target="_blank">After workshop. Links to docs and comments</a>
