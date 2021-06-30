let Role = {
    Admin:"admin",
    Basic:"basic"
} 
let project={
      p1:{
          first:"build a website  p1",
          second:"build a fish tank",
          third: "watch the flash"
        },
        p2:{
            first:"build a website  p2",
            second:"build a fish tank",
            third: "watch the flash"
        },
        p3:{
            first:"build a website  p3",
            second:"build a fish tank",
            third: "watch the flash"
        }

  }
let User = [
    {
      name:"matthew",
      role:Role.Admin
    },
    {
      name:"john",
      role:Role.Basic,
      proj:project.p3,
    },
    {
      name:"mohn",
      role:Role.Basic,
      proj:project.p1,
      
  
    },
    {
      name:"nohn",
      role:Role.Basic,
      proj:project.p2,
    }
  ]
 

//console.log(User.find(e=> e.name == "mohn" ))
  
module.exports ={
    Role,
    User,
}