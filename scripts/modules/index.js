module.exports = function (app) {
  require('./admin-ctrl')(app);
  require('./main-ctrl')(app);
  require('./locations-ctrl')(app);
  require('./sites-ctrl')(app);
  require('./current-spot')(app);
  require('./config')(app);
}
