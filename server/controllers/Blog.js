const ArticleModel = require('../models/Article');
const CategoryModel = require('../models/Category');
const TagModel = require('../models/Tag');
const { returnClient, splitParams } = require('../utils/utils')
const articleList = async (req, res, next) => {
  let { _id, page, limit } = splitParams(req.url);
  let params = {};
  if (_id) {
    params.tags = _id;
  }

  await ArticleModel.countDocuments(params
  ).then(async count => {
    await ArticleModel.find(params)
      .skip(Number((page - 1) * limit))
      .limit(Number(limit))
      .populate('category')
      .sort({ id : -1 })
      .then(data => {
        let response = {
          data,
          count
        }
        returnClient(res, 200, 0, '获取成功', response)
      })
  }).catch((err) => {
    returnClient(res, 200, -1, err)
  })
}

const findOne = async (req, res, next) => {
  let params = splitParams(req.url);
  const queryOptions = {
    populate: 'category'
  }
  await ArticleModel.findOne({ id: params.id }).setOptions(queryOptions).then(data => {
    returnClient(res, 200, 0, '获取成功!', data)
  }).catch(err => {
    returnClient(res, 200, -1, err)
  })
}

const categoryList = async (req, res, next) => {
  await CategoryModel.find({}, {}).populate('parent').limit().then((data) => {
    returnClient(res, 200, 0, '获取成功', data)
  }).catch((err) => {
    returnClient(res, 200, -1, err)
  })
}

const tagList = async (req, res, next) => {
  await TagModel.find({}, {}).populate('parent').limit().then((data) => {
    returnClient(res, 200, 0, '获取成功', data)
  }).catch((err) => {
    returnClient(res, 200, -1, err)
  })
}

const articleFromTag = async (req, res, next) => {
  console.log(req.body)
  const { id } = req.body;
  await TagModel.aggregate([
    {
      $match: {
        _id: id
        // $or: [
        //   { name: 'Vue' }, { name: 'React' }
        // ]
      }
    },
    {
      $lookup: {
        from: 'articles',
        localField: '_id',
        foreignField: 'tags',
        as: 'articleList',
      }
    }
  ]).then(data => {
    returnClient(res, 200, 0, '获取成功', data)
  }).catch((err) => {
    returnClient(res, 200, -1, err)
  })
}

module.exports = {
  articleList,
  findOne,
  categoryList,
  tagList,
}