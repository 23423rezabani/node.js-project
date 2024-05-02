// // 
// let http = require('http')


// let users=[
//   {id:1,name:"reza",age:21},
//   {id:2,name:"ali",age:20},
//   {id:3,name:"mohi",age:24}
// ]

// http.createServer((req,res)=>{

//   if(req.url === '/'){
//     res.write('reza is the best developer')
//     res.end()

//   } else if(req.url ==='/api/users'){
//     res.write('list of reza game')
//     res.end()

//   }else if(req.url === '/api/courses'){
//     res.write(JSON.stringify(users))
//     res.end()
//   }
  
// }).listen(3000)


// let fs = require('fs')
// let textin = fs.readFileSync('node.js-project-1/read.txt','utf-8')

// let textout = `hello im reza and ${textin}`
// fs.writeFileSync('./txt/output.txt',textout)

// console.log('file wrriten');

const hello ='hello world';
console.log(hello);
