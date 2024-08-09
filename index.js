require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
        "login": "Pritanshu69",
        "id": 116452282,
        "node_id": "U_kgDOBvDrug",
        "avatar_url": "https://avatars.githubusercontent.com/u/116452282?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Pritanshu69",
        "html_url": "https://github.com/Pritanshu69",
        "followers_url": "https://api.github.com/users/Pritanshu69/followers",
        "following_url": "https://api.github.com/users/Pritanshu69/following{/other_user}",
        "gists_url": "https://api.github.com/users/Pritanshu69/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Pritanshu69/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Pritanshu69/subscriptions",
        "organizations_url": "https://api.github.com/users/Pritanshu69/orgs",
        "repos_url": "https://api.github.com/users/Pritanshu69/repos",
        "events_url": "https://api.github.com/users/Pritanshu69/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Pritanshu69/received_events",
        "type": "User",
        "site_admin": false,
        "name": "PRITANSHU SAMANTA",
        "company": null,
        "blog": "https://psamanta.vercel.app/",
        "location": "Howrah,India",
        "email": null,
        "hireable": null,
        "bio": "Just an average guy getting into tech.\r\n",
        "twitter_username": "Prit_Lmao",
        "public_repos": 25,
        "public_gists": 0,
        "followers": 22,
        "following": 17,
        "created_at": "2022-10-22T16:12:57Z",
        "updated_at": "2024-08-05T14:45:07Z"
      }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) =>{
    res.send('https://x/pritlmao.com')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login here</h1>')
}) 
app.get('/youtube',(req,res)=>{
    res.send('<h2>pritlmao </h2>')
})
app.get('/github', (req,res) => {
    res.json(githubData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})