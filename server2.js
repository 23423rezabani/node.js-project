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

// const hello ='hello world';
// console.log(hello);


// let fs = require('fs')

// let textin = fs.readFileSync('./node.text','utf-8');
// console.log(textin);

// let textout = `this is know we about avocado : ${textin}.\nCreated on ${Date.now()}`

// let filecreated  = fs.writeFileSync('./output.text',textout)

//  console.log('file wrriten');

// let fs = require('fs')

// fs.readFile('./node.txt','utf-8',(err,data1)=>{
        
//   fs.readFile(`./${data1}.txt`,'utf-8',(err,data2)=>{ // im tired
//     console.log(data2);
//     fs.readFile('./append.text','utf-8',(err,data3)=>{
//         console.log(data3);
//        fs.writeFile('./finally.text',`${data2}\n${data3}`, 'utf-8',(err)=>{
//          console.log(';your file has written');
//        })
//     })   
//   })
// })

// let http = require('http')

// http.createServer((req,res) =>{
//   console.log(req);
//  res.end('hello im reza from the server')
// })
// .listen('8000','127.0.0.1',()=>{
//   console.log('thsi for test im doning');
// })

// server
// let http = require('http')

// http.createServer((req,res)=>{
// let pathName = req.url

// if(pathName === '/overview'){
//   res.end('this is the overview ')
// }else if(pathName === '/product'){
//   res.end('this is the product')
// }else{
//   res.writeHead(404,{
//     'content-type':'text/html',
//     'my-own-header':'hello-world'
//   })
//   res.end('<h1>page not found</h1>')
// }

// }).listen('8000','127.0.0.1',()=>{
//   console.log('this for test'); 
// })

//server2

let fs  = require('fs')
let http = require('http');
const url= require('url');
// const path = require('path')



//server

const replaceTemplate = (temp,product)=>{
let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName);
output = output.replace(/{%IMAGE%}/g,product.image);
output = output.replace(/{%QUANTITY%}/g,product.quantity);
output = output.replace(/{%PRICE%}/g,product.price)
output = output.replace(/{%ID%}/g,product.id)
output = output.replace(/{%FROM%}/g,product.form)
output = output.replace(/{%DESCRIPTION%}/g,product.description)
output = output.replace(/{%NUTRIENTS%}/g,product.nutrients)


if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic')
return output;


}

const tempoverview = fs.readFileSync(`${__dirname}/template-overview.html`,'utf-8');
const tempcard = fs.readFileSync(`${__dirname}/template-card.html`,'utf-8');
const tempproduct = fs.readFileSync(`${__dirname}/template-product.html`,'utf-8');


const data = fs.readFileSync(`${__dirname}/data.json`,'utf-8');
let Dataobj = JSON.parse(data)


http.createServer((req,res)=>{

   
  const {query,pathname} = url.parse(req.url, true)

  // overview page

  if(pathname === '/'  || pathname === '/overview'){
    res.writeHead(200,{'Content-type':'text/html'})
    
    
    let cardhtml = Dataobj.map(el => replaceTemplate(tempcard,el)).join('') // el the data from json  //tempcard is a file from  style actully
    const output = tempoverview.replace(/{%PRODUCT_CARDS%}/g,cardhtml)
    console.log(cardhtml);
    
    res.end(output)


    
    //productpage

  }else if(pathname === '/product'){
    res.writeHead(200,{'content-type':'text/html'})

    const product = Dataobj[query.id]

    let textout = replaceTemplate(tempproduct,product)

    console.log(query);
    console.log(pathname);

    res.end(textout)
    
    
   //api page

  }else if(pathname === '/api'){

    res.writeHead(200,{'Content-type':'application/json'})
    res.end(data) 

    // not found

  }else{
    res.writeHead(404,{
      'Content-type':'text-html',
      'my-own-header':'hello-world'

    })
    res.end('pages not found')
  }
})
.listen('8000','127.0.0.1',()=>{
    console.log('this for the run server');
})
  











  







