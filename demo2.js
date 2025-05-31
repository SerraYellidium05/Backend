


const express=require('express');
const app=express();

// using

const control=require('./router/control');
app.use(express.json());//extract data and put in request
app.use('/api',control);// Mount all routes from 'control.js' under the path '/api'






const PORT=process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})


/*

Connections:

app.js imports the control.js router.

It uses app.use('/api', control) to attach the router to /api, so all routes defined in control.js are prefixed with /api.







*/