# @nodulus/logs




 logging component for nodulus.
  

   
[![NPM](https://nodei.co/npm/@nodulus/logs.png)](https://npmjs.org/package/@nodulus/logs)

 ![Alt text](https://travis-ci.org/nodulusteam/-nodulus-logs.svg?branch=master "build")
 ![Alt text](https://david-dm.org/nodulusteam/-nodulus-logs.svg "dependencies")
 


 ### install
 `npm install @nodulus/logs`
 
 
 ### usage
 ```
 var logs=require("@nodulus/logs");
 
 ```
 
 
 
 ### config file format 
 
 ```
{
  "transports": [
    {
      "winston.transports.File": {
        "name": "info-file",
        "filename": "filelog-info.log",
        "level": "info"
      }
    },
    {
      "winston.transports.File": {
        "name": "error-file",
        "filename": "filelog-error.log",
        "level": "error"
      }
    }
  ]
}
 
 ```
 ### set config file location
```
 SET CONFIG_PATH = '--config--path--'
 
```# -nodulus-logs
