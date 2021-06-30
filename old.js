let Role = {
    Admin:"admin",
    Basic:"basic"
  } 
  let User = [
    {
      name:"matthew",
      role:Role.Admin
    },
    {
      name:"john",
      role:Role.Basic,
     
    },
    {
      name:"mohn",
      role:Role.Basic,
  
      
  
    },
    {
      name:"nohn",
      role:Role.Basic,
     
    }
  ]
  
  console.log(User);
  
  User[0].name = "nj"
  
  let t = User.find(e=> e.name == "mohn" )
  
  t.role = "maisc"
  
  
  console.log(User);
  
  if (chek.rows[0].exists) {
    let search = await pool.query(`SELECT * FROM ${h.rows[j].postid}Likes`)
    let dat = {
      name:h.rows[i].name,
      data: h.rows[i].data,
      datecreated: h.rows[i].datecreated,
      owner: h.rows[i].owner,
      postid:h.rows[i].postid,
      comments: h.rows[i].comments,
      liked: true,
      likes: search.rowCount,
    }
    post.push(dat)
  
  
  }else{
    let search = await pool.query(`SELECT * FROM ${h.rows[j].postid}Likes`)
    let dat = {
      name:h.rows[i].name,
      data: h.rows[i].data,
      datecreated: h.rows[i].datecreated,
      owner: h.rows[i].owner,
      postid:h.rows[i].postid,
      comments: h.rows[i].comments,
      liked: false,
      likes: search.rowCount,
    }
       post.push(dat)
  }
  
  
    
  try {
    let posts = await pool.query('SELECT * FROM Users ')
    for(let i = 0;i <= posts.rowCount- 1;i++){
      // let uspot = await pool.query(`SELECT * FROM ${}Posts`)
      
      let h = await pool.query(`SELECT * FROM ${posts.rows[i].username}Posts WHERE data like '%${search}%';`)
      likes.push(h.rows)
      for(let j = 0; j <=h.rowCount; j++){
      
        let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${person}Likes WHERE  Postid = $1);`, [h.rows[j].postid])
       
          let search = await pool.query(`SELECT * FROM ${h.rows[j].postid}Likes`)
          let dat = {
            name:h.rows[i].name,
            data: h.rows[i].data,
            datecreated: h.rows[i].datecreated,
            owner: h.rows[i].owner,
            postid:h.rows[i].postid,
            comments: h.rows[i].comments,
            liked: chek.rows[0].exists,
            likes: search.rowCount,
          }
          post.push(dat)
  
  
        
          
        
  
       
       res.send(post)
        
      }
      
      console.log(h.rowCount)
      
  
    }
  } catch (error) {}
  
  res.json(likes)
  
  // let likes = []
      // let k = userd.rows.map(e => {
      //   return e.postid
      // })
      // for (let i = 0; i < k.length; i++) {
  
  
  
      //   let search = await pool.query(`SELECT * FROM ${k[i]}Likes `)
      //   let ks = await pool.query(`SELECT * FROM ${auth.username}Likes`)
      //   console.log(ks.rowCount)
      //   // let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}Likes WHERE  Postid = $1);`, [data.id])
      //   // if(check.rows[0].exists){
  
      //   // }
      //   // console.log(chek)
  
      //   let kol = {
      //     id: k[i],
      //     likes: search.rowCount,
      //     likedby: search.rows
  
      //   }
      //   likes.push(kol)
  
      // }
  
      // res.send(likes)










      if (aa.rowCount <= 0) {

      } else {
          let g = await pool.query(`SELECT * FROM ${aa.rows[j].userid}Posts`)
      
          console.log(aa.rows[j].userid)
          for (let k = 0; k < g.rowCount; k++) {
              // g.rows.sort((a, b) => {
                  
              //     return Date.parse(a.datecreated) - Date.parse(b.datecreated)
              // })
              // posts.push({
              //     name:a.rows[i].username,
              //     values:g.rows[k]
              // })
              // console.log(g.rows)
             





          }
          console.log(posts)

          // for (let j = 0; j <= a.rowCount - 1; j++) {

          //     if (typeof aa.rows[j] === 'undefined') {

          //     } else {
          //         posts.push(aa.rows[j])
          //     }
          //     // let g = await pool.query(`SELECT * FROM ${aa.rows[j].userid}Posts`)
          //     // for (let k = 0; k < g.rowCount - 1; k++) {
          //     //     posts.push(g.rows[k])
          //     // }

          // }

      }
      console.log(posts)

  }

  // console.log(aa.rows)
  // if (aa.rowCount <= 0) {

  // } else {
  //     for (let j = 0; j <= a.rowCount - 1; j++) {

  //         if (typeof aa.rows[j] === 'undefined') {

  //         } else {
  //             posts.push(aa.rows[j])
  //         }
  //         // let g = await pool.query(`SELECT * FROM ${aa.rows[j].userid}Posts`)
  //         // for (let k = 0; k < g.rowCount - 1; k++) {
  //         //     posts.push(g.rows[k])
  //         // }

  //     }
  // }


























  require('dotenv').config();

let express = require('express');
const http = require("http");
let app = express();
const cors = require('cors')
let jwt = require('jsonwebtoken')
let crypto = require('crypto')

const server = http.createServer(app);


const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});






// let { Adminauth, canview, setauth, authp } = require('./auth')
// let { Role, User } = require('./role')

const fileUpload = require('express-fileupload');
var pg = require('pg');
// const pool = require('./db')
let fs = require('fs')
var path = require('path');
const e = require('cors');
const { query } = require('express');

const testFolder = './pictures/';
// const io = require("socket.io")();

// const deleteTod =  pool.query(`DELETE  FROM meiceLikes WHERE Postid = $1`,["meiceb0a589dc8542a5fab7f"])
// let fb = async()=>{
// let userd =  await pool.query(`SELECT * FROM Users WHERE Username = $1`, ["davice"])
// console.log(userd)
// }
// fb()
// const newTodo = pool.query("DROP TABLE Users;");
// const newTod = pool.query("CREATE TABLE Users(Userid VARCHAR(455),Username VARCHAR(255) ,Name VARCHAR(255),Password VARCHAR(255),Imageid VARCHAR(455) );");

/*"CREATE TABLE Accounts(
  Userid int,
  Name VARCHAR(255),
  Password VARCHAR(255),
  Date VARCHAR(255),

  );
*/
async function mai() {
  // const newTodo = pool.query("DROP TABLE kwapyonghatice63b7fd6237a42305587153bf8151cb0daa5c3617communt;");

  // kwapyonghatice63b7fd6237a42305587153bf8151cb0daa5c3617communt
  let h = await pool.query("SELECT * FROM Users")
  // console.log(h.rows)
  // let r = await pool.query(`DELETE FROM kwapyongmessages WHERE name = $1`,["Matthew Kwapyong"])

  for (let i = 0; i <= h.rowCount - 1; i++) {
    const book = await pool.query(`CREATE TABLE ${h.rows[i].username}modPosts(
      Name VARCHAR(255),
      Data VARCHAR(255),
      Datecreated VARCHAR(255),
      owner VARCHAR(455),
      Postid VARCHAR(455),
      comments VARCHAR(455)
  );`);



  }
  let usere = await pool.query(`SELECT * FROM kwapyongfollowing`)
  console.log(usere)


  // SELECT * FROM Users WHERE Username = $1
  //  const deleteTodo = await pool.query(`DELETE FROM Users WHERE Username= $1`, ["1erf324e2ice"])

  // let post = await pool.query(`UPDATE Users SET bio = $1  WHERE Username = $2`, [`hi 
  // daddadadam
  // dadad from coaajjjadjjdajdjadjajdajj
  // aaaaaaaaaaaaaaa
  // aaaaaaaaaaaaaaaaaaaaaaaaaaaa
  // aaaaaaaaaaaaaaaaaaaaaaaaa
  // aaaaaaaaaaaaaaaaaaaaaa
  // aaaaaaaaaaaaaaaaaaaaaadjo`,"kwapyong"])

}
// mai

//middleware

const { Pool } = require("pg");
const pool = new Pool({
 
  connectionString: "postgres://mahfewzyixkdwp:5d7686e236af10a8ac72b4a3317af82082641a855f07145d255a00174dcb7080@ec2-52-86-25-51.compute-1.amazonaws.com:5432/df4es6piu5t5df",
  ssl: {
    rejectUnauthorized: false
  }
});

// let g = pool.query(`CREATE TABLE Users(Userid VARCHAR(455),Username VARCHAR(255) ,Name VARCHAR(255),Password VARCHAR(255),Imageid VARCHAR(455) );`,(err,res)=>{
//   if (err) {
//     console.log("Error - Failed to select all from Users");
//     console.log(err);
// }
// else{
//     console.log(res.rows);
// }
// })
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '/')));
app.use(fileUpload());


async function users(me) {


  let posts = []
  let g = pool.query(`SELECT * FROM ${me}following`,(err,res)=>{
    if (err) {
      console.log("Error - Failed to select all from Users");
      console.log(err);
  }
  else{
      console.log(res.rows);
  }
  })

  let aa = await pool.query(`SELECT * FROM ${me}following`)
  for (let j = 0; j <= aa.rowCount - 1; j++) {
    let g = await pool.query(`SELECT * FROM ${aa.rows[j].userid}Posts`,(err,res)=>{

    })
    let ga = await pool.query(`SELECT * FROM ${me}Posts`)
    for (let i = 0; i < g.rowCount; i++) {

      posts.push(g.rows[i])
      posts.push(ga.rows[i])
    }
  }
  posts.sort((a, b) => {
    return Date.parse(a.datecreated) - Date.parse(b.datecreated)
  })
  let h = await pool.query(`DELETE FROM ${me}modPosts;`)
  posts.forEach(async (post) => {
    let pst = await pool.query(`INSERT INTO ${me}modPosts (Name,Data,Datecreated,owner,Postid ,comments) VALUES($1,$2,$3,$4,$5,$6)`, [post.name, post.data, post.datecreated, post.owner, post.postid, post.comments])
  })
}

app.get('/l/:la', async (req, res) => {
  let j = req.params.la;
  let k = await pool.query(`SELECT * FROM ${j}Posts`)

  // console.log(k)
  res.send(k)


})



app.get('/pics/:name', async (req, res) => {
  let name = req.params.name

  fs.readFile(`${testFolder}${name}`, async (err, data) => {
    if (err) {
      res.status(404)

      res.send("file isnt found")
    }
    res.send(data)

  })
  // fs.readdir(testFolder, (err, files) => {
  //   console.log(files)
  //   res.send(files);
  // })
})
app.get("/:user/photo", async (req, res) => {
  let data = req.params.user
  let userd = await pool.query(`SELECT * FROM Users WHERE Username = $1`, [data])
  let leth = userd.rows[0].imageid
  console.log(leth)
  fs.readFile(`${testFolder}${leth}`, (err, data) => {
    if (err) {
      res.status(404)

      res.send("file isnt found")
    }

    res.send(data)

  })


})
app.get("/t", authenticateToken, async (req, res) => {
  let h = await pool.query("SELECT * FROM Users WHERE name like '%goat%';")
  // let h= await pool.query(`SELECT * FROM Users WHERE Userid = $1`, [data.id])

  // console.log(h)
  res.send(req.data)
})

app.get('/art', async (req, res) => {

  const allTodos = await pool.query(`SELECT * FROM Users `)
  res.json(allTodos.rows)

})
app.get('/art/:u', async (req, res) => {
  let g = req.params.u
  const allTodos = await pool.query(`SELECT * FROM ${g}following `)
  res.send(allTodos.rows)
})
// app.get()
app.post('/search-posts', async (req, res) => {
  let search = req.body.data
  let person = req.body.person
  let posts = []
  let post = await pool.query('SELECT * FROM Users')
  for (let i = 0; i <= post.rowCount - 1; i++) {
    // let h = await pool.query(`SELECT * FROM ${post.rows[i].username}Posts`)
    try {
      let b = await pool.query(`SELECT * FROM ${post.rows[i].username}Posts WHERE data like '%${search}%';`)
      if (b.rowCount !== 0) {
        for (let j = 0; j <= b.rowCount - 1; j++) {
          let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${person}Likes WHERE  Postid = $1);`, [b.rows[j].postid])
          let cheek = await pool.query(`SELECT EXISTS(SELECT * FROM ${person}bookmark WHERE  Postid = $1);`, [b.rows[j].postid])

          let search = await pool.query(`SELECT * FROM ${b.rows[j].postid}Likes`)
          let commenta = await pool.query(`SELECT * FROM ${b.rows[j].postid}comments`)
          let dat = {
            name: b.rows[j].name,
            data: b.rows[j].data,
            datecreated: b.rows[j].datecreated,
            owner: b.rows[j].owner,
            postid: b.rows[j].postid,
            comment: b.rows[j].comments,
            comments: commenta.rowCount,
            liked: chek.rows[0].exists,
            likes: search.rowCount,
            book: cheek.rows[0].exists
          }
          posts.push(dat)
        }
      }
    } catch (error) {
      console.log(error)



    }

  }
  //  res.send(posts)
  res.send(posts)
})

app.post('/search-users', async (req, res) => {
  let search = req.body.data
  let pers = "baice"
  // console.log(req.body)
  let dat = []
  try {
    let h = await pool.query(`SELECT * FROM Users WHERE username like '%${search}%';`)
    // console.log(h) 
    // console.log(h.rows[4].userid)
    for (let i = 0; i <= h.rows.length - 1; i++) {
      //  console.log(h.row)
      let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${pers}following WHERE userid = $1);`, [h.rows[i].username])
      // let h = await pool.query(`SELECT * FROM ${}bio;`)

      let ddat = {
        userid: h.rows[i].userid,
        name: h.rows[i].name,
        username: h.rows[i].username,
        imageid: h.rows[i].imageid,
        bio: h.rows[i].bio,
        following: chek.rows[0].exists
      }
      dat.push(ddat)
    }
  } catch (error) {
    // break
    console.log("error at search x" + error)
  }
  res.send(dat)
})
app.get('/user-data/:id', authenticateToken, async (req, res) => {
  let data = req.params.id
  let auth = req.data
  let userd = await pool.query(`SELECT * FROM Users WHERE Username = $1`, [data])
  let chek = await pool.query(`SELECT * FROM ${userd.rows[0].username}following;`)
  let usere = await pool.query(`SELECT * FROM ${userd.rows[0].username}followers`)
  let cheak = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}following WHERE userid = $1);`, [userd.rows[0].username])
  // console.log(userd.rows)
  let j;
  if (userd.rows[0].imageid === null) {
    j = {
      img: "p6",
      name: userd.rows[0].name,
      uname: userd.rows[0].username,
      foll: chek.rowCount,
      fli: usere.rowCount,
      bio: userd.rows[0].bio,
      following: cheak.rows[0].exists
    }
  } else {
    j = {
      img: userd.rows[0].imageid,
      name: userd.rows[0].name,
      uname: userd.rows[0].username,
      foll: chek.rowCount,
      fli: usere.rowCount,
      bio: userd.rows[0].bio,
      following: cheak.rows[0].exists
    }
  }
  res.send(j)
})

app.get('/admin-data', authenticateToken, async (req, res) => {
  let data = req.data
  //console.log(data.username)
  let userd = await pool.query(`SELECT * FROM Users WHERE Username = $1`, [data.username])
  let user = await pool.query(`SELECT * FROM ${data.username}following`)
  let usere = await pool.query(`SELECT * FROM ${data.username}followers`)

  // console.log(userd.rows)
  let j;
  if (userd.rows[0].imageid === null) {
    j = {
      img: "p6",
      name: userd.rows[0].name,
      uname: userd.rows[0].username,
      following: user.rows,
      followers: usere.rows
    }
  } else {
    j = {
      img: userd.rows[0].imageid,
      name: userd.rows[0].name,
      uname: userd.rows[0].username,
      following: user.rowCount,
      followers: usere.rowCount
    }


  }


  res.send(j)
})

app.post('/create-post', authenticateToken, async (req, res) => {
  let data = req.data;
  let go = req.body
  console.log(go)
  let d = crypto.randomBytes(10).toString('hex')
  let lop = `${data.username}${d}`

  let post = await pool.query(`INSERT INTO ${data.username}Posts (Name,Data,Datecreated,owner,Postid ,comments) VALUES($1,$2,$3,$4,$5,$6)`, [data.username, go.data, go.date, data.username, lop, `${lop}comments`])
  let comt = await pool.query(`CREATE TABLE ${lop}comments(
    Name VARCHAR(255),
    Data VARCHAR(255),
    Datecreated VARCHAR(255),
    owner VARCHAR(455),
    commentid VARCHAR(455)
);`)
  // let post = await pool.query(`INSERT INTO ${data.username}Posts (Name,Data,Datecreated,owner,Postid ,comments) VALUES($1,$2,$3,$4,$5,$6)`, [data.username, go.data, go.date, data.username, lop, `${lop}comments`])

  let com = await pool.query(`CREATE TABLE ${lop}Likes(Name VARCHAR(255));`)

  // let r = await pool.query(`SELECT * FROM ${data.usename}followers`)
  // for(let i = 0 ; i < r.rowCount;i++){
  //   let post = await pool.query(`INSERT INTO ${r.rows[i].username}Home (Name,Data,Datecreated,owner,Postid ,comments) VALUES($1,$2,$3,$4,$5,$6)`, [data.username, go.data, go.date, data.username, lop, `${lop}comments`])


  // }
  users(data.username)
  res.send("works")
})
app.post("/undolike-post", authenticateToken, async (req, res) => {
  let data = req.body
  let auth = req.data

  const deleteTodo = await pool.query(`DELETE FROM ${data.id}Likes WHERE Name = $1`, [auth.username])
  let userd = await pool.query(`SELECT * FROM ${auth.username}Posts `)
  let likes = []
  let k = userd.rows.map(e => {
    return e.postid
  })
  for (let i = 0; i < k.length; i++) {


    let search = await pool.query(`SELECT * FROM ${k[i]}Likes `)
    let kol = {
      id: k[i],
      likes: search.rowCount,
      likedby: search.rows

    }
    likes.push(kol)

  }

  res.send(likes)



})
//meice5e1c35d879ef0077a407
//meice9d97d04afbd6d498cc5f

app.post('/post-likes', authenticateToken, async (req, res) => {
  let data = req.body
  let auth = req.data
  let h = await pool.query(`SELECT * FROM ${data.postid}Likes`)
  // console.log(data)
  let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}Likes WHERE  Postid = $1);`, [data.postid])


  res.send({ a: h.rowCount, liked: chek.rows[0].exists })

})
app.post('/like-post', authenticateToken, async (req, res) => {
  let data = req.body
  let auth = req.data
  // console.log(data)
  // let liked()

  let check = await pool.query(`SELECT EXISTS(SELECT * FROM ${data.id}Likes WHERE Name = $1);`, [auth.username])

  if (check.rows[0].exists) {
    const deleteTodo = await pool.query(`DELETE FROM ${data.id}Likes WHERE Name = $1`, [auth.username])
    const deleteTod = await pool.query(`DELETE FROM ${auth.username}Likes WHERE Postid = $1`, [data.id])
    let userd = await pool.query(`SELECT * FROM ${data.id}Likes `)
    let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}Likes WHERE  Postid = $1);`, [data.postid])

    res.send({ a: userd.rowCount, liked: false })

  } else {
    const com = await pool.query(`INSERT INTO ${auth.username}Likes (Postid) VALUES($1)`, [data.id])
    const deleteTodo = await pool.query(`INSERT INTO ${data.id}Likes (Name) VALUES($1)`, [auth.username])

    let userd = await pool.query(`SELECT * FROM ${data.id}Likes `)
    let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}Likes WHERE  Postid = $1);`, [data.postid])

    res.send({ a: userd.rowCount, liked: true })
  }
})

app.post('/bookmark', authenticateToken, async (req, res) => {
  let data = req.body
  let auth = req.data
  // console.log(data)
  // let liked()
  //   const book = await pool.query(`CREATE TABLE ${h.rows[i].username}bookmark(
  //     Name VARCHAR(255),
  //     Data VARCHAR(255),
  //     Datecreated VARCHAR(255),
  //     owner VARCHAR(455),
  //     Postid VARCHAR(455),
  //     comments VARCHAR(455)
  // );`);


  let check = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}bookmark WHERE Postid = $1);`, [data.postid])

  if (check.rows[0].exists) {
    const deleteTodo = await pool.query(`DELETE FROM ${auth.username}bookmark WHERE Postid = $1`, [data.postid])
    let g = await pool.query(`SELECT * FROM ${auth.username}bookmark`)

    res.send({ delete: true, data: g.rows })

  } else {
    const com = await pool.query(`INSERT INTO ${auth.username}bookmark(Name,Data,Datecreated,owner,Postid,comments ) VALUES($1,$2,$3,$4,$5,$6)`, [data.name, data.data, data.datecreated, data.owner, data.postid, data.postid])

    let g = await pool.query(`SELECT * FROM ${auth.username}bookmark`)

    res.send({ delete: false, data: g })
  }
})
app.get("/bookmarks", authenticateToken, async (req, res) => {
  let r = req.data
  let g = await pool.query(`SELECT * FROM ${r.username}bookmark`)
  let j = []
  for (let i = g.rowCount - 1; i >= 0; i--) {
    j.push(g.rows[i])
  }

  res.send(j)
})
app.post('/remove-book', authenticateToken, async (req, res) => {
  let data = req.body
  let auth = req.data
  // console.log(auth)
  // let search = await pool.query(`SELECT * FROM  ${auth.username}Posts WHERE Postid = $1`, [data.id])
  let check = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}bookmark  WHERE Postid = $1);`, [data.id])
  // console.log(check)
  if (check.rows[0].exists) {
    try {
      const deleteTodo = await pool.query(`DELETE FROM ${auth.username}bookmark  WHERE Postid = $1`, [data.id])
    } catch (error) {
      return "erroe"
    }

    let g = await pool.query(`SELECT * FROM ${auth.username}bookmark`)
    res.send({ a: true, data: g.rows })



  } else {
    res.sendStatus(403)
  }
})
app.post('/follow', authenticateToken, async (req, res) => {
  let fid = req.body
  let auth = req.data
  console.log(fid)
  let check = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}following WHERE userid = $1);`, [fid.u])
  if (check.rows[0].exists) {
    try {
      const deleteTodo = await pool.query(`DELETE FROM ${auth.username}following WHERE userid = $1`, [fid.u])
      const deleteTod = await pool.query(`DELETE FROM ${fid.u}followers WHERE userid = $1`, [auth.username])
      res.send({ a: false })
    } catch (error) {
      console.log("error at follow  if" + error)
    }
  } else {
    try {
      let q = await pool.query(`INSERT INTO ${auth.username}following (userid, name ) VALUES($1,$2)`, [fid.u, ""])
      let qa = await pool.query(`INSERT INTO ${fid.u}followers (userid) VALUES($1)`, [auth.username])
      res.send({ a: true })
    } catch (error) {
      console.log("error at follow  else" + error)
    }
  }
})

app.get('/home', authenticateToken, async (req, res) => {
  let auth = req.data
  let h = await pool.query(`SELECT * FROM ${auth.username}Home`)
  let r = []
  for (let i = h.rows.length; i <= 0; i--) {
    r.push(h.rows[i])
  }
  res.send(r)
})
app.get('/a/:id', async (req, res) => {
  let auth = req.params.id
  console.log(auth)
  let q = await pool.query(`SELECT * FROM ${auth}following`)

  res.send(q)



})

app.post('/delete-post', authenticateToken, async (req, res) => {
  let data = req.body
  let auth = req.data
  // console.log(auth)
  // let search = await pool.query(`SELECT * FROM  ${auth.username}Posts WHERE Postid = $1`, [data.id])
  let check = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}Posts  WHERE Postid = $1);`, [data.id])
  // console.log(check)
  if (check.rows[0].exists) {
    try {
      const deleteTodo = await pool.query(`DELETE FROM ${auth.username}Posts WHERE Postid = $1`, [data.id])
      const deleteTod = await pool.query(`DROP TABLE ${data.id}Likes `)
      let r = await pool.query(`DROP TABLE ${data.id}comments`)

      try {
        let h = await pool.query(`SELECT * FROM Users;`)
        for (let i = 0; i <= h.rowCount; i++) {
          let g = await pool.query(`DELETE FROM ${h.rows[i].username}bookmark  WHERE Postid = $1`, [data.id])
        }
      } catch (error) {

      }


    } catch (error) {
      return "erroe"

    }


    res.send({ a: true })
  } else {
    res.sendStatus(403)
  }
})
app.get('/user-posts/:id', authenticateToken, async (req, res) => {
  console.log("auth-user-posts")
  let data = req.params.id
  let auth = req.data

  console.log("posts")
  let info = []

  let check = await pool.query("SELECT EXISTS(SELECT * FROM Users WHERE username = $1);", [data])

  // console.log(check.rows)
  let r = []


  if (check.rows[0].exists) {

    // for(let i = 10 ; i >= 0;i--){
    //   console.log(i)
    // }

    let userd = await pool.query(`SELECT * FROM ${data}Posts `)
    //let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}Likes WHERE  Postid = $1);`, [data.id])
    // console.log(userd)
    for (let i = userd.rowCount - 1; i >= 0; i--) {


      let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}Likes WHERE  Postid = $1);`, [userd.rows[i].postid])

      let cheek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}bookmark WHERE  Postid = $1);`, [userd.rows[i].postid])

      let dat = {
        name: userd.rows[i].name,
        data: userd.rows[i].data,
        datecreated: userd.rows[i].datecreated,
        owner: userd.rows[i].owner,
        postid: userd.rows[i].postid,
        comments: userd.rows[i].comments,
        liked: chek.rows[0].exists,
        book: cheek.rows[0].exists
      }
      info.push(dat)
      // console.log(dat)}
    }
    res.json({
      data: info,
      exist: true
    })
  } else {
    res.json({ exists: false })
  }
})
app.get('/post/:username/:id', authenticateToken, async (req, res) => {
  let data = req.params;

  let check = await pool.query(`SELECT EXISTS(SELECT * FROM ${data.username}Posts WHERE Postid = $1);`, [data.id])
  let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${req.data.username}Likes WHERE  Postid = $1);`, [data.id])
  let chak = await pool.query(`SELECT * FROM Users WHERE  Username = $1`, [data.username])

  let chaek = await pool.query(`SELECT * FROM ${data.id}comments `)

  // console.log(chek.rows)
  // console.log(req.data)
  if (check.rows[0].exists) {
    let j = await pool.query(`SELECT * FROM ${data.username}Posts WHERE Postid = $1`, [data.id])
    res.send({
      exist: true,
      data: j.rows[0],
      liked: chek.rows[0].exists,
      image: chak.rows[0].imageid,
      comments: chaek.rows
    })
  }

})
app.post('/post-comment', authenticateToken, async (req, res) => {
  let auth = req.data
  let data = req.body
  console.log(auth)
  console.log(data);
  let d = crypto.randomBytes(10).toString('hex')
  let h = `${auth.username}${d}`
  let post = await pool.query(`INSERT INTO ${data.id}comments (Name,Data,Datecreated,owner,commentid) VALUES($1,$2,$3,$4,$5)`, [auth.username, data.data, data.date, auth.username, h])
  let chaek = await pool.query(`SELECT * FROM ${data.id}comments`)
  res.send(chaek.rows)
})
app.post('/delete-comment', authenticateToken, async (req, res) => {
  let data = req.body
  let auth = req.data
  let chaek = await pool.query(`SELECT * FROM ${data.cid}comments WHERE commentid = $1`, [data.id])

  try {
    if (auth.username === chaek.rows[0].owner) {
      const deleteTodo = await pool.query(`DELETE FROM ${data.cid}comments WHERE commentid = $1`, [data.id])
      res.send("done")
    } else {
      res.send("not allowed")
    }
  } catch (error) {
    console.log(error)

  }

})
app.get('/home-posts/', authenticateToken, async (req, res) => {
  let auth = req.data
  users(auth.username)
  let info = []
  let userd = await pool.query(`SELECT * FROM ${auth.username}modPosts `)

  console.log(userd.rows)
  for (let i = userd.rowCount - 1; i >= 0; i--) {

    let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}Likes WHERE  Postid = $1);`, [userd.rows[i].postid])

    let cheek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}bookmark WHERE  Postid = $1);`, [userd.rows[i].postid])

    let dat = {
      name: userd.rows[i].name,
      data: userd.rows[i].data,
      datecreated: userd.rows[i].datecreated,
      owner: userd.rows[i].owner,
      postid: userd.rows[i].postid,
      comments: userd.rows[i].comments,
      liked: chek.rows[0].exists,
      book: cheek.rows[0].exists
    }
    info.push(dat)

  }
  res.send(info)
})
app.get('/user-post/:id/:postid', (req, res) => {

})


app.post('/Login', async (req, res) => {
  let Username = req.body.Username;
  let Password = req.body.Password;

  let hshp = crypto.createHash('sha1')
  hshp.update(Password)
  let phsh = hshp.digest('hex')
  // console.log(phsh)

  let hsh = crypto.createHash('sha1')
  hsh.update(Username)
  let r = hsh.digest('hex')
  // console.log(r)



  let check = await pool.query("SELECT EXISTS(SELECT * FROM Users WHERE userid = $1);", [r])
  // console.log(check.rows)

  if (check.rows[0].exists) {
    const todo = await pool.query(`SELECT * FROM Users WHERE Userid = $1`, [r])
    if (phsh === todo.rows[0].password) {
      let jo = {
        userid: r,
        username: todo.rows[0].username
      }
      let jw = jwt.sign(jo, process.env.ACCESS_TOKEN_SECRET);

      res.send({
        data: jw,
        userid: r,
        usern: Username,
        name: todo.rows[0].name,
        authenticated: true
      })
    } else {
      res.send({ authenticated: false })
    }


  } else {
    let leh = {
      dsntexts: true
    }
    res.json(leh)

  }

})
app.post('/upload', authenticateToken, async (req, res) => {
  console.log(req.data)

  if (req.files) {
    const file = req.files.File
    const fileName = file.name
    let realfilename = `${req.data.username}profile${fileName}`

    file.mv(`${__dirname}/pictures/${realfilename}`, async err => {
      if (err) {
        console.log(err)
        res.send('There is error')
      } else {
        let post = await pool.query(`UPDATE Users SET Imageid = $1  WHERE Username = $2`, [realfilename, req.data.username])
        res.send('uploaded successfully')
      }
    })
  } else {
    res.send('There are no files')
  }

})
app.post('/change', authenticateToken, async (req, res) => {
  let data = req.body
  let auth = req.data
  try {
    let post = await pool.query(`UPDATE Users SET bio = $1 WHERE Username = $2`, [`${data.bio}`, `${auth.username}`])
    let past = await pool.query(`UPDATE Users SET Name = $1 WHERE Username = $2`, [`${data.name}`, `${auth.username}`])
    res.send(true)
  } catch (error) {
    console.log("err at change")
    res.send({ a: false })
  }
})
app.get('/ad/:id', async (req, res) => {
  console.log(req.params)
  const newTo = await pool.query(`CREATE TABLE ${req.params.id}followers(userid  VARCHAR(255));`);
  res.send(newTo)
})
app.post('/Create', async (req, res) => {

  try {
    let Username = req.body.Username;
    let Password = req.body.Password;
    let Name = req.body.Name;
    let pic = req.body.Picture
    // console.log(req.body)

    // console.log(req.body)
    // let id = crypto.randomBytes(10).toString('hex')
    let hsh = crypto.createHash('sha1')
    hsh.update(Username)
    let r = hsh.digest('hex')

    let hshp = crypto.createHash('sha1')
    hshp.update(Password)
    let phsh = hshp.digest('hex')


    // console.log(r, phsh)
    let check = await pool.query("SELECT EXISTS(SELECT * FROM Users WHERE userid = $1);", [r])
    //console.log(check)
    if (check.rows[0].exists) {
      let leh = {
        usrexts: true
      }
      res.json(leh)
    } else {

      const newTod = await pool.query(`INSERT INTO Users (Userid,Username,Name,Password,Imageid) VALUES($1,$2,$3,$4,$5)`, [r, Username, Name, phsh, pic]);
      const newTodo = await pool.query(`CREATE TABLE ${Username}Posts(
      Name VARCHAR(255),
      Data VARCHAR(255),
      Datecreated VARCHAR(255),
      owner VARCHAR(455),
      Postid VARCHAR(455),
      comments VARCHAR(455)
  );`);
      const n = await pool.query(`CREATE TABLE ${Username}modPosts(
    Name VARCHAR(255),
    Data VARCHAR(255),
    Datecreated VARCHAR(255),
    owner VARCHAR(455),
    Postid VARCHAR(455),
    comments VARCHAR(455)
);`);
      const book = await pool.query(`CREATE TABLE ${Username}bookmark(
    Name VARCHAR(255),
    Data VARCHAR(255),
    Datecreated VARCHAR(255),
    owner VARCHAR(455),
    Postid VARCHAR(455),
    comments VARCHAR(455)
);`);
      const home = await pool.query(`CREATE TABLE ${Username}Home(
  Name VARCHAR(255),
  Data VARCHAR(255),
  Datecreated VARCHAR(255),
  owner VARCHAR(455),
  Postid VARCHAR(455),
  comments VARCHAR(455)
);`);
      const newTo = await pool.query(`
  CREATE TABLE ${Username}following(
    userid  VARCHAR(255),
    name  VARCHAR(255)
   );`);
      const newTd = await pool.query(`CREATE TABLE ${Username}messages(name VARCHAR(455),id VARCHAR(255));`);

      const newT = await pool.query(`CREATE TABLE ${Username}followers(userid  VARCHAR(255));`);

      const newo = await pool.query(` CREATE TABLE ${Username}bio(data VARCHAR(455));`);

      let com = await pool.query(`CREATE TABLE ${Username}Likes(Postid VARCHAR(455));`)
      let jo = {
        id: r,
        name: Name,
        username: Username
      }

      let jw = jwt.sign(jo, process.env.ACCESS_TOKEN_SECRET);
      let fay = {
        data: jw,
        userid: r,
        usern: Username,
        name: Name,
        usrexts: false
      }

      res.json(fay);
    }




  } catch (error) {
    console.log(error)

  }
});
app.post('/create-message', authenticateToken, async (req, res) => {
  let auth = req.data;
  let data = req.body;
  console.log(`${auth.username} wants to message ${data.username}`)

  let mess = `${auth.username}${data.username}`;

  let hsh = crypto.createHash('sha1')
  hsh.update(mess)
  let ma = hsh.digest('hex')
  let d = `${mess}${ma}`

  let r = await pool.query(``)
  // const newTd = await pool.query(`CREATE TABLE ${Username}messages(name VARCHAR(455),id VARCHAR(255));`);
  let chek = await pool.query(`SELECT EXISTS(SELECT * FROM ${auth.username}messages WHERE name = $1);`, [data.username])
  // console.log(chek.rows)

  if (!chek.rows[0].exists) {

    let post = await pool.query(`INSERT INTO ${auth.username}messages (name,id) VALUES($1,$2)`, [data.username, d])
    let past = await pool.query(`INSERT INTO ${data.username}messages (name,id) VALUES($1,$2)`, [auth.username, d])
    const newTod = await pool.query(`CREATE TABLE ${d}communt(name VARCHAR(455),data VARCHAR(255), time  VARCHAR(255),date  VARCHAR(255) );`);

    res.send({ almade: false })
  } else {
    res.send({
      almade: true
    })
  }
  // const newTod = await pool.query(`CREATE TABLE ${d}communt(name VARCHAR(455),data VARCHAR(255), time  VARCHAR(255) );`);
})
app.get('/auth', authenticateToken, (req, res) => {
  //console.log(req.headers)
  let k = {
    auth: true
  }
  res.json(k)
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  // console.log(req.headers)


  if (token === null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //console.log(err + "asta")

    if (err) {


      res.send({ auth: false })

      return;
    }
    //  console.log(user)
    req.data = user

    next()
  })
}
app.get('/user-messages', authenticateToken, async (req, res) => {
  let data = req.data;
  const allTodos = await pool.query(`SELECT * FROM ${data.username}messages `)
  res.json(allTodos.rows)
})
app.post('/m/:id', async (req, res) => {
  let r = req.params.id
  console.log("mid")


})
app.post("/get-messages", authenticateToken, async (req, res) => {
  let data = req.body
  let mes = await pool.query(`SELECT * FROM ${data.id}communt`)
  res.send(mes.rows)
})
app.post('/delete-message', authenticateToken, async (req, res) => {
  let auth = req.data;
  let data = req.body
  // let k = await pool.query(`INSERT INTO ${data.id}communt (name,data,time,date) VALUES($1,$2,$3,$4)`,[data.name,data.message,data.time,data.date]);
  //  console.log("delete" , auth , data)

  let q = await pool.query(`DELETE FROM ${auth.username}messages WHERE id = $1`, [data.id])
  let qa = await pool.query(`DELETE FROM ${data.username}messages WHERE id = $1`, [data.id])
  let r = await pool.query(`DROP TABLE ${data.id}`)

})

let connections = []
const getUser = (id, rom) => {
  let user = connections.find(user => user.id == id && user.room === rom)
  return user
}

io.on('connection', function (socket) {



  socket.on("join", (a) => {

    let find = connections.find(e => e.room === a.users && e.name === a.name)
    if (!find) {
      connections.push({ name: a.name, room: a.users, id: socket.id })
      socket.join(a.users);
      console.log("hello1")
    } else {
      console.log("mello 2")
      let user = connections.find(user => user.room === a.users && user.name === a.name)
      user.id = socket.id

    }


  })

  socket.on('message', async (data) => {
    // const newTod = await pool.query(`CREATE TABLE ${d}communt(name VARCHAR(455),data VARCHAR(255), time  VARCHAR(255),date  VARCHAR(255) );`);
    // console.log(data)
    let a = {
      data: data.message,
      time: data.time,
      date: data.date,
      id: data.id,
      name: data.name
    }
    console.log(a)
    let k = await pool.query(`INSERT INTO ${data.id}communt (name,data,time,date) VALUES($1,$2,$3,$4)`, [data.name, data.message, data.time, data.date]);

    let r = getUser(socket.id, a.id)
    console.log(r)


    // console.log(rus + message)
    io.in(r.room).emit('message', a);
    // io.emit('message',a)
  })
  socket.on("disconnect", () => {
    console.log("discont")
    const index = connections.findIndex((user) => user.id === socket.id);
    if (index !== -1) return connections.splice(index, 1)[0];
  })

});


server.listen(3001, () => {
  console.log("started at " + 3001)
})
