# kanban

> Kanban Realtime useing Vue & Firebase  
> Access My Kanban Here https://vuevire.firebaseapp.com/

## File and Folder Structure
```
.  
├── README.md  
├── build  
│   ├── build.js  
│   ├── check-versions.js  
│   ├── utils.js  
│   ├── dev-client.js  
│   ├── vue-loader.conf.js  
│   ├── webpack.base.conf.js  
│   ├── webpack.dev.conf.js  
│   └── webpack.prod.conf.js  
├── config  
│   ├── dev.env.js  
│   ├── index.js  
│   └── prod.env.js  
├── dist  
│   ├── index.html  
│   └── static  
│       ├── css  
│       └── js  
├── index.html  
├── package.json  
├── src  
│   ├── App.vue  
│   ├── assets  
│   │   └── logo.png  
│   ├── components  
│   │   ├── BoardCard.vue  
│   │   ├── ButtonModalDetails.vue  
│   │   ├── ContentBackLog.vue  
│   │   ├── ContentDoing.vue  
│   │   ├── ContentDone.vue  
│   │   ├── ContentToDo.vue  
│   │   ├── DetailsDataModal.vue  
│   │   ├── Home.vue  
│   │   ├── TheAddModal.vue  
│   │   └── TheNavBar.vue  
│   ├── firebase  
│   │   └── index.js  
│   ├── main.js  
│   ├── router  
│   │   └── index.js  
│   └── vuex  
│       └── index.js  
└── static  
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
