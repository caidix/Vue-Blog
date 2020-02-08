const ArticleModel = require('../models/Article');
const { splitParams, returnClient } = require('../utils/utils')
const moment = require('moment');


const alioss_update = async (req, res, next) => {
  const file = req.file
  returnClient(res, 200, 0, '添加成功!', { url: file.url })
}
const add = async (req, res, next) => {
  let data = req.body;
  data.addTime = moment(data.addTime || '').format('YYYY-MM-DD HH:mm:ss')
  if (req.session.id) {
    data.sssociatedAccount = req.session.id;
  }
  await ArticleModel.create(data).then(data => {
    if (data) {
      returnClient(res, 200, 0, '添加成功!', data)
    } else {
      returnClient(res, 200, -1, '未知错误')
    }
  })
}
const list = async (req, res, next) => {
  let GET = splitParams(req.url);
  let params = GET.getContent ? {} : { articleContent: false };
  // if (!GET['userId'] && res.session.id) {
  //   GET['userId'] = res.session.id;
  // }
  const queryOptions = {
    populate: ['category']
  }

  // let findconf = GET['userId'] ? { sssociatedAccount: GET['userId'] } : {}
  // if (GET._id) {
  //   findconf.tags = { $in: info._id }
  // }
  await ArticleModel.find({}, params)
    .setOptions(queryOptions).limit().skip(0).then(data => {
      returnClient(res, 200, 0, '获取文章列表成功!', data)
    }).catch(err => {
      returnClient(res, 200, -1, err)
    })
}
const findOne = async (req, res, next) => {
  let params = splitParams(req.url);
  const queryOptions = {
    populate: 'category'
  }
  await ArticleModel.findById(params.id).setOptions(queryOptions).then(res => {
    returnClient(res, 200, 0, '获取成功!', data = res)
  }).catch(err => {
    returnClient(res, 200, -1, err)
  })
}

const delOne = async (req, res, next) => {
  let params = req.params;
  await ArticleModel.findByIdAndRemove(params.id).then(res => {
    returnClient(res, 200, 0, '删除成功!', data = res)
  }).catch(err => {
    returnClient(res, 200, -1, err)
  })
}

const editArticle = async (req, res, next) => {
  let data = req.body;
  await ArticleModel.findOneAndUpdate({ _id: data._id }, data).then((data) => {
    returnClient(res, 200, 0, '修改成功!', data)
  }).catch(err => {
    returnClient(res, 200, -1, err)
  })
}

module.exports = {
  add,
  list,
  findOne,
  delOne,
  editArticle,
  alioss_update
}