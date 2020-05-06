const CategoryModel = require('../models/Category');
const { splitParams, returnClient } = require('../utils/utils')
const moment = require('moment')
const add = async (req, res, next) => {
  let GET = splitParams(req.url);
  if (GET.name) {
    await CategoryModel.find({ name: GET.name }).then(async data => {
      if (data.length > 0) {
        returnClient(res, 200, -1, '已有该分类,请重新设定。', data)
      } else {
        if (GET.parent === '') {
            delete GET['parent'];
        }
        await CategoryModel.create({
          ...GET,
          update_time: moment().format('YYYY-MM-DD h:mm:ss')
        }).then(data => {
          returnClient(res, 200, 0, '添加成功!')
        }).catch((err) => {
          returnClient(res, 200, -1, err)
        })
      }
    })
  } else {
    returnClient(res, 400, -1, '未知错误，请重试')
  }
}

const list = async (req, res, next) => {
  // await CategoryModel.find().populate('parent').limit().then((data) => {
  //   returnClient(res, 200, 0, '获取成功', data)
  // }).catch((err) => {
  //   returnClient(res, 200, -1, err)
  // })
  const { page, limit } = splitParams(req.url);
  console.log(page, limit)
  await CategoryModel.countDocuments().then((count) => {
    CategoryModel.find()
      .skip(Number((page - 1) * limit))
      .limit(Number(limit))
      // .populate("parent")
      .then((data) => {
        returnClient(res, 200, 0, "获取成功", { data, total: count });
      })
      .catch((err) => {
        returnClient(res, 200, -1, err);
      });
  });
}

const edit = async (req, res, next) => {
  const { id, name, desc } = req.body;
  await CategoryModel.update({ id }, {
    "$set": { name, desc, update_time: moment().format('YYYY-MM-DD h:mm:ss') }
  }).then((data) => {
    returnClient(res, 200, 0, '修改成功!', data)
  }).catch((err) => {
    returnClient(res, 200, -1, err)
  })
}

const del = async (req, res, next) => {
  let GET = splitParams(req.url);
  if (GET.id) {
    await CategoryModel.findOneAndRemove({ id: GET.id }).then(({ name, update_time }) => {
      returnClient(res, 200, 0, '删除成功!', data = { name, update_time })
    }).catch((err) => {
      returnClient(res, 200, -1, err)
    })
  } else {
    returnClient(res, 400, -1, '未知错误，请重试')
  }
}

module.exports = {
  add,
  list,
  edit,
  del
}