module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  });
  const WxClassicController = require('../../controllers/WxClassic')
  const { uploadWechat } = require("../../utils/alioss");
  app.use('/api/applet', router);
  router.get('/classic/create', WxClassicController.createClassic)
  router.get('/classic/query', WxClassicController.queryClassic)
  router.get('/classic/update', WxClassicController.updateClassic)
  router.post('/classic/upload',uploadWechat.single('file'), WxClassicController.uploadWechat)
  app.use(async (err, req, res, next) => {
    res.render('error')
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}