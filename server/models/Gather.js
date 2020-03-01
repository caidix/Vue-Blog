const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const moment = require('moment')

const gatherSchma = new mongoose.Schema({
  name: { type: String, required: true, validate: /\S+/ },
  desc: { type: String, default: '' },
  // 创建日期
  create_time: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },

  // 最后修改日期
  update_time: { type: String, default: moment().format('YYYY-MM-DD HH:mm:ss') },
  img: { type: String, default: '' }
})
gatherSchma.virtual('article', {
  localField: '_id',
  foreignField: 'gather',
  justOne: false,
  ref: 'Article'
})
gatherSchma.plugin(autoIncrement.plugin, {
  model: 'gather',
  field: 'id',
  startAt: 1,
  incrementBy: 1
})

module.exports = mongoose.model('gather', gatherSchma);