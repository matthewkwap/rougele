let{ Role, User} = require('./role')
//admin eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWF0dGhldyIsIlJvbGUiOiJhZG1pbiIsImlhdCI6MTYxOTk4Mzg5OH0.z_akFnKrNu-x8c1Y6vu28lZ7vQn3EO27u0erD6hWfzc
//john eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsIlJvbGUiOiJiYXNpYyIsImlhdCI6MTYxOTk4Mzk4N30.jcsPYA5jRTLlNM-0bvs7mFtR4B0tD6n5dcaq3BjloMs
function Adminauth(req,res,next){
    
    if(req.user.Role !== Role.Admin ){
        res.sendStatus(401)
        res.send("Not a Admin")
    }
    next()
}

function setauth(req,res,next){
    let a = req.params.name
    req.userd = User.find(e=> e.name == a)
    if(req.userd == null){
        res.sendStatus(404)
    }
    next()
    
}

function canview(user,proj){                         
     console.log(user.Role ,Role.Admin + "dad")
  return(
      user.Role === Role.Admin || user.name === proj.name
  )
}
function authp(req,res,next){
    console.log(!canview(req.user,req.userd))

    if(!canview(req.user,req.userd)){
         
         return res.send("not allowed")

    }
    next()

}
module.exports = {
    Adminauth,
    authp,
    canview,
    setauth
}