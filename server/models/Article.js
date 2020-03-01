const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment');
const moment = require('moment');
const schema = mongoose.Schema({
  title: { type: String, required: true, validate: /\S+/ },  //文章标题

  articleContent: { type: Object, require: true }, //文章内容

  author: { type: String, required: true, validate: /\S+/ }, // 作者

  //文章来源：转载 原创 混合
  origin: { type: Number, default: 0 },

  // 文章关键字（SEO）
  keyword: { type: String, default: '' },

  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tag', required: true }],
  /* 文章分类 0 文章分享 2 视频教程 */
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category', required: true
  }],
  // 归档文章集合
  gather: { type: mongoose.Schema.Types.ObjectId, ref: 'gather' },
  img_url: { // 封面图
    type: String,
    default: ''
  },

  like_users: [{  // 点赞的用户
    id: {
      type: mongoose.Schema.Types.ObjectId
    }
  }],
  // 关联账户，通过关联的账户导出相应所写的文章
  // sssociatedAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },

  introduction: { type: String },  //文章简介
  draft: { type: Number, default: 0 }, // 是否为草稿，草稿为1
  addTime: {
    type: String,
    default: moment().format('YYYY-MM-DD HH:mm:ss')
  },  //添加时间

  viewCount: { type: Number, default: 0 }, //浏览总数

  likes: { // 收藏数
    type: Number,
    default: 0
  }
})

schema.plugin(autoIncrement.plugin, {
  model: 'Article',
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

module.exports = mongoose.model('Article', schema);
