const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static(__dirname + '/public'));



app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/index', (req, res)=>{
    res.render('index', {
        autor:'America Chavarria',
        title:'INICIO',
        year: new Date().getFullYear()
    });
});

app.get('/vangogh', (req, res)=>{
    res.render('vicent',{
        autor:'America Chavarria',
        title:'VINCENT VANGOGH',
        year: new Date().getFullYear()
    });
});

app.get('/edvard', (req, res)=>{
    res.render('edvard', {
        autor:'America Chavarria',
        title:'EDVARD MUNCH',
        year: new Date().getFullYear()
    });
});

app.get('/Davinci', (req, res)=>{
    res.render('leonardo', {
        autor:'America Chavarria',
        title:'LEONARDO DAVINCI',
        year: new Date().getFullYear()
    });
});

app.get('/rivera', (req, res)=>{
    res.render('diego', {
        autor:'America Chavarria',
        title:'DIEGO RIVERA',
        year: new Date().getFullYear()
    });
});

app.get('/picasso', (req, res)=>{
    res.render('pablo', {
        autor:'America Chavarria',
        title:'PABLO PICASSO',
        year: new Date().getFullYear()
    });
});
app.listen(3000,()=>{
  console.log("Escuchando al puerto 3000");
});