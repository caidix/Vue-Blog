module.exports = options => {
  const { undoJwt, returnClient } = require('../utils/utils')
  const UserModel = require('../models/User')


  return async (req, res, next) => {
    let token = req.headers.authorization || '';
    if (token) {
      const { _id } = undoJwt(token);
      if (!_id) {
        returnClient(res, 403, 0, '请先登录!');
      }
      let result = await UserModel.findById(_id);
      if (!result) {
        returnClient(res, 403, 0, '请先登录!');
      }
      return next()
    } else {
      returnClient(res, 403, 0, '请先登录!');
    }
  }
}