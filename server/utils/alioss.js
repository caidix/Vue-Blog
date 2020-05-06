const multer = require("multer");
const MAO = require("multer-aliyun-oss");
const upload = multer({
  // dest: __dirname + '/../../uploads',
  storage: MAO({
    config: {
      region: "oss-cn-shenzhen",
      accessKeyId: "LTAI4FfVfczPBGL2VySPtXG7",
      accessKeySecret: "LAKbIGrSxsDlxAi7GGnwjh54H6upsr",
      bucket: "cd-blog",
    },
  }),
});
const uploadWechat = multer({
  // dest: __dirname + '/../../uploads',
  storage: MAO({
    config: {
      region: "oss-cn-shenzhen",
      accessKeyId: "LTAI4FfVfczPBGL2VySPtXG7",
      accessKeySecret: "LAKbIGrSxsDlxAi7GGnwjh54H6upsr",
      bucket: "cd-wechat",
    },
  }),
});

module.exports = {
  upload,
  uploadWechat
}