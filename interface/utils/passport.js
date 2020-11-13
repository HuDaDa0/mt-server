const passport = require('koa-passport')
const LocalStrategy = require('passport-local')
const UserModel = require('../../dbs/models/users')

passport.use(new LocalStrategy(async function(username, password, done){
  let where = {
    username
  };
  let result = await UserModel.findOne(where)
  if(result != null){
    if(result.password === password){
      return done(null, result)
    }else{
      return done(null, false, '密码错误')
    }
  }else{
    return done(null, false, '用户不存在')
  }
}))

passport.serializeUser(function(user, done){
  //此处设置session中保存用户的信息,这里保存user；
  done(null, user)
})

passport.deserializeUser(function(user,done){
  return done(null, user)
})

module.exports = passport
