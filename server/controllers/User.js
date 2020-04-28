const UserModel = require('../models/User');
const { returnClient, undoJwt, setToken, createSha256 } = require('../utils/utils')

const findOne = async (req, res, next) => {
  if (!req.headers.authorization) {
    returnClient(res, 401, -1, '登陆验证失败');
    return;
  }
  let token = req.headers.authorization;
  console.log(token)
  
  const { _id } = undoJwt(token);
  console.log(_id, token)
  let result = await UserModel.findById(_id);
  if (result) {
    returnClient(res, 200, 0, '个人信息获取成功', { introduce: result.introduce, username: result.username, avatar: result.avatar });
  } else {
    returnClient(res, 200, -1, '个人信息获取失败', result);
  }
}

const userList = async (req, res, next) => {
  let result = await UserModel.find();
  console.log(req.headers)
  if (result.length !== undefined) {
    returnClient(res, 200, 0, '信息列表获取成功', result);
  } else {
    returnClient(res, 200, -1, '信息列表获取失败', result);
  }
}

const register = async (req, res, next) => {
  let params = req.body;
  if (params.username) {
    let result = await UserModel.find({ username: params.username });
    if (result.length > 0) {
      returnClient(res, 200, -1, '用户名重复', result);
    } else {
      params.password = createSha256(params.password)
      console.log(params.password)
      let data = await UserModel.create(params)
      returnClient(res, 200, 0, '注册成功', data);
    }
  }
}

const login = async (req, res, next) => {
  const { username, password } = req.body;
  if (username) {
    let result = await UserModel.findOne({ username });
    if (result) {
      if (createSha256(password) === result.password) {
        let token = setToken(result._id);
        req.session.token = token;
        req.session.username = result.username;
        returnClient(res, 200, 0, '登陆成功', {
          token
        });
      } else {
        returnClient(res, 200, -1, '密码错误', result);
      }
    } else {
      returnClient(res, 200, -1, '不存在该用户', result);
    }
  }
}

const delUser = async (req, res, next) => {
  const { id } = req.body;
  console.log(id)
  if (id) {
    let result = await UserModel.findOne({ _id: id });
    if (result) {
      let data = await UserModel.findByIdAndRemove(id);
      returnClient(res, 200, 0, '删除成功', data);
    } else {
      returnClient(res, 200, -1, '无此用户', result);
    }
  }
}

module.exports = {
  findOne,
  userList,
  login,
  register,
  delUser
}