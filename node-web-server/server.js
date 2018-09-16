const express = require('express');

const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',() =>{
    return  new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) =>{
    return text.toUpperCase();
});
app.use(express.static(__dirname + '/public'));

app.set('view engine', hbs);

app.get('/', (req, res) => {
    res.render('home.hbs', {
        PageTitle: 'Its a home Page'
        
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        PageTitle: 'Its a new Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errormessage: 'unable to handle'
    })
})

app.listen(3000, () => {
    console.log("the port is listening");
})