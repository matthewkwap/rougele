require('dotenv').config();

var pg = require('pg');
const pool = require('./db')

async function users(me) {

  
    let posts = []
    let aa = await pool.query(`SELECT * FROM ${me}following`)
    for (let j = 0; j <= aa.rowCount - 1; j++) {
        let g = await pool.query(`SELECT * FROM ${aa.rows[j].userid}Posts`)
        let ga = await pool.query(`SELECT * FROM ${me}Posts`)
        for (let i = 0; i < g.rowCount; i++) {
           
            posts.push(g.rows[i])
           
        }
        for(let i = 0;i < ga.rowCount; i++){
            posts.push(ga.rows[i])
        }
    }
    posts.sort((a, b) => {
        return Date.parse(b.datecreated) - Date.parse(a.datecreated)
    })

    console.log(posts)

    // let h = await pool.query(`DELETE FROM ${me}modPosts;`)
    // posts.forEach(async (post) => {
    //     let pst = await pool.query(`INSERT INTO ${me}modPosts (Name,Data,Datecreated,owner,Postid ,comments) VALUES($1,$2,$3,$4,$5,$6)`, [post.name, post.data, post.datecreated, post.owner, post.postid, post.comments])
    // })
}
users("kwapyon")
module.exports = users
