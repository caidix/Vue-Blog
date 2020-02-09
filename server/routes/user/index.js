module.exports = app => {
  const express = require('express');
  const router = express.Router({
    mergeParams: true
  });

  let UserController = require('../../controllers/User');
  app.use('/api/user', router);
  router.post('/register', UserController.register);
  router.post('/login', UserController.login);
  router.post('/userList', UserController.userList);
  router.post('/delUser', UserController.delUser);
  router.post('/findOne', UserController.findOne);
  // 错误反馈
  app.use(async (err, req, res, next) => {
    res.render('error')
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}