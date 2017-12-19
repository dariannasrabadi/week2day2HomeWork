const initExpress = require('express');
const expressFunc = initExpress();
const port = 43770;

expressFunc.use(initExpress.static('server/public'));

expressFunc.listen(port, ()=>{
    console.log('This is now up on: ', port);
    
});

