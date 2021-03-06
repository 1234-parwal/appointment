const express = require('express');
const path = require('path');
const pageRouter = require('./routes/pages');
const app = express();


app.use(express.urlencoded({ extended: false }));




app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use('/', pageRouter);



app.use((req, res, next) => {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
})


app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});



app.get('/', function(req, res) {
    res.render('index');
});



app.listen(5000, () => {
    console.log('server is running...');
});

module.exports = app;