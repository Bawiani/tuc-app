const express = require('express');
const exphbs = require('express-handlebars');
const memberRouter = require('./routers/member');

const app = express();
const port = process.env.PORT || 3000;

//Setup handlebars and view location

app.set('view engine', 'hbs');
app.engine('hbs', exphbs.engine({

    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/layouts/partials',
    public: __dirname + '/views/layouts/public',
    extname: 'hbs',
    defaultlayout: 'index'
}));

app.use(memberRouter);

app.get('/', (req, res) => {
    res.render('register', {
        layout: 'index'
    });
});


app.listen(port, () => {
    console.log('Server up and running on port ' + port + ' !');
});