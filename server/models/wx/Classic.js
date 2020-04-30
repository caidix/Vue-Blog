const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment');
const moment = require('moment');
const schema = mongoose.Schema({
  background: {
    type: String,
    default: ''
  },
  message: {
    type:String,
    required: true
  },
  content: {
    type: Object
  },
  likes: {
    type: Number,
    default: 0
  },
  isShow: {
    type: Boolean,
    default: true
  },
  createTime: {
    type: String,
    default: moment().format('YYYY-MM-DD HH:mm:ss')
  },  
})
schema.plugin(autoIncrement.plugin, {
  model: 'wxclassic',
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});
module.exports = mongoose.model('wxclassic', schema);