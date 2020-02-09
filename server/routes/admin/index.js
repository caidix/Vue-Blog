module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  });
  const authMiddleware = require('../../middleware/auth')
  const multer = require('multer')
  const MAO = require('multer-aliyun-oss');
  const upload = multer({
    // dest: __dirname + '/../../uploads',
    storage: MAO({
      config: {
        region: 'oss-cn-shenzhen',
        accessKeyId: 'LTAI4FfVfczPBGL2VySPtXG7',
        accessKeySecret: 'LAKbIGrSxsDlxAi7GGnwjh54H6upsr',
        bucket: 'cd-blog'
      }
    })
  })

  let adminArticle = require('../../controllers/Article');
  let adminCategory = require('../../controllers/Category');
  let adminTag = require('../../controllers/Tag');

  app.use('/api/admin', authMiddleware(), router);

  // 文章路由
  router.post('/article/add', adminArticle.add);
  router.post('/article/edit', adminArticle.editArticle);
  router.post('/article/upload', upload.single('file'), adminArticle.alioss_update);
  router.get('/article/list', adminArticle.list);
  router.get('/article/findOne', adminArticle.findOne);
  router.delete('/article/delOne/:id', adminArticle.delOne);

  // 分类路由
  router.get('/category/add', adminCategory.add)
  router.get('/category/list', adminCategory.list)
  router.get('/category/del', adminCategory.del)
  router.post('/category/edit', adminCategory.edit)

  // 标签路由
  router.get('/tag/add', adminTag.add)
  router.get('/tag/list', adminTag.list)
  router.get('/tag/del', adminTag.del)
  router.post('/tag/edit', adminTag.edit)

  // 错误反馈
  app.use(async (err, req, res, next) => {
    res.render('error')
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
};