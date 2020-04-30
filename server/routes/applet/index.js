module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  });
  const WxClassicController = require('../../controllers/WxClassic')
  app.use('/api/applet', router);
  router.get('/classic/create', WxClassicController.createClassic)
  router.get('/classic/query', WxClassicController.queryClassic)
  app.use(async (err, req, res, next) => {
    res.render('error')
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}