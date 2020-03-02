module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  });
  const BlogController = require('../../controllers/Blog')
  app.use('/api/blog', router);
  router.get('/article/main', BlogController.articleList)
  router.get('/article/detail', BlogController.findOne)
  router.get('/article/categoryList', BlogController.categoryList)
  router.get('/article/tagList', BlogController.tagList)
  router.get('/gather/list', BlogController.gatherList)
  router.post('/gather/getArticle', BlogController.getArticleByGather)
  app.use(async (err, req, res, next) => {
    res.render('error')
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}