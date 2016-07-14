# color-tv recruitment task

Project is separaed into two modules: 
  - app - frontend part
  - ColorTv-BE - backend

To start app type in terminal:
  ```sh
$ npm install
```
 ```sh
$ bower install
```
 ```sh
$ gulp run
```

These commands help install packages and start two instances of server. Separated for webapp and yahoo weather proxy.

If you would like to test API - there are two methods: (quick examples for use with postman)
```sh
GET /single - param: zipCode - return weather for single city
  - localhost:8000/single?zipCode=2442047
```
```sh
GET /many - param: zipCodes - return weather for array of cities zip codes
  - localhost:8000/many?zipCodes=[2442047,2442047,2442047]
  ```
