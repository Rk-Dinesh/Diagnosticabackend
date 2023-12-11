const app = require('./app')

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Welcome");
}); 

app.get('/dashboard',(req,res)=>{
    res.send("THis is homepage");
}); 

app.get('/patient',(req,res)=>{
    res.send("Patient page");
}); 
app.get('/doctors',(req,res)=>{
    res.send("doctorpage");
});

app.get('/view',(req,res)=>{
    res.send("THis is view");
}); 

app.get('/form',(req,res)=>{
    res.send("THis is form");
}); 

app.get('/updateform',(req,res)=>{
    res.send("THis is updateform");
}); 

app.get('/profile',(req,res)=>{
    res.send("THis is profile");
}); 


app.get('/step1',(req,res)=>{
    res.send("THis is step1");
}); 

app.get('/step2',(req,res)=>{
    res.send("THis is step2");
}); 
app.get('/step3',(req,res)=>{
    res.send("THis is step3");
}); 
app.get('/step4',(req,res)=>{
    res.send("THis is step4");
}); 
app.get('/step5',(req,res)=>{
    res.send("THis is step5");
}); 
app.get('/step6',(req,res)=>{
    res.send("THis is step6");
}); 
app.get('/step7',(req,res)=>{
    res.send("THis is step7");
}); 
app.get('/step8',(req,res)=>{
    res.send("THis is step8");
}); 

app.get('/forgotpassword',(req,res)=>{
    res.send("THis is forgotpassword");
}); 
app.get('/otpvreify',(req,res)=>{
    res.send("THis is otpverify");
}); 
app.get('/resetpassword',(req,res)=>{
    res.send("THis is resetpassword");
}); 


app.listen(port,()=>{
    console.log(`Server Listening on port:${port}`)
});