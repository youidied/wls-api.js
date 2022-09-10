# wls-api.js

wls-api.js is node wrapper for WLS api system 

# Installation
To install **wls-api.js**, run:
>
>```
>npm install wls-api.js
>```

# Example Usage

```js
const WlsAPI = require('wls-api.js');
const wls = new WlsAPI

wls.RegByName("you_i_died").then((result => console.log(result)));
```
