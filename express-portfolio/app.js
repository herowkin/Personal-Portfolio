// Core deps
const createError   = require('http-errors');
const express       = require('express');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');
const fs            = require('fs');

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// App
const app = express();

// ---- Load site data once and expose to all views ----
const dataPath = path.join(__dirname, 'data', 'siteData.json');
const site = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
app.locals.site = site;                    // use as `site` in EJS
app.use((req, res, next) => {              // optional: allow `req` in views (for ?sent=1)
  res.locals.req = req;
  next();
});

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404
app.use((req, res, next) => next(createError(404)));

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error   = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
