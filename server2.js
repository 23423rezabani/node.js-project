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
        
//         let fs  = require('fs')
//         let http = require('http');
//         const url= require('url');
//     const x = require(`${__dirname}/replaceTemplate.js`)
//    const slugify1 = require('slugify')        



// //server


// const tempoverview = fs.readFileSync(`${__dirname}/template-overview.html`,'utf-8');
// const tempcard = fs.readFileSync(`${__dirname}/template-card.html`,'utf-8');
// const tempproduct = fs.readFileSync(`${__dirname}/template-product.html`,'utf-8');


// const data = fs.readFileSync(`${__dirname}/data.json`,'utf-8');
// let Dataobj = JSON.parse(data)


// let slug = Dataobj.map(el=> slugify1('fresh-reza'),{lower:true})
//   console.log(slug);
 
// http.createServer((req,res)=>{

   
//   const {query,pathname} = url.parse(req.url, true)

//   // overview page

//   if(pathname === '/'  || pathname === '/overview'){
//     res.writeHead(200,{'Content-type':'text/html'})
    
    
//     let cardhtml = Dataobj.map(el => x(tempcard,el)).join('') // el the data from json  //tempcard is a file from  style actully
//     const output = tempoverview.replace(/{%PRODUCT_CARDS%}/g,cardhtml)
//     console.log(cardhtml);
    
//     res.end(output)


    
//     //productpage

//   }else if(pathname === '/product'){
//     res.writeHead(200,{'content-type':'text/html'})

//     const product = Dataobj[query.id]

//     let textout = x(tempproduct,product)

//     console.log(query);
//     console.log(pathname);

//     res.end(textout)
    
    
//    //api page

//   }else if(pathname === '/api'){

//     res.writeHead(200,{'Content-type':'application/json'})
//     res.end(data) 

//     // not found

//   }else{
//     res.writeHead(404,{
//       'Content-type':'text-html',
//       'my-own-header':'hello-world'

//     })
//     res.end('pages not found')
//   }
// })
// .listen('8000','127.0.0.1',()=>{
//     console.log('this for the run server');
// })
  


// const EventEmitter = require('events');
// const http = require('http');

// class Sales extends EventEmitter{
//   constructor(){
//     super();
//   }
// }

// const myEmitter = new Sales();

// myEmitter.on('product',()=>{
// console.log('there was a new sale');
// })
  

// myEmitter.on('product',()=>{
//  console.log('this is the product');
// })
// myEmitter.on('product',(number)=>{
//  console.log(`my number in the team  is ${number}`);
// })

// myEmitter.emit('product',10)


  
// let server = http.createServer((req,res)=>{

//   server.on('request',(req,res)=>{
//     console.log('request recive');
//     res.end('request recievd')
//   })
//   server.on('request',()=>{
//     console.log('snother request');
  
//   })
//   // server.on('close',()=>{
//   //   console.log('this is a close server');
//   // })
// })
// server.listen(8000,'127.0.0.1',()=>{
//   console.log('server is run');
//   // res.end('server is run')
// })

// const fs = require('fs')
// const server = require('http').createServer();

// server.on('request',(req,res)=>{
  // // soloution 1
  // fs.readFile('./read.txt',(err,data)=>{
  //  if(err){
  //   console.log(err);
  //  }else{
  //   res.end(data)
  //  }
  // })

  //soloution 2
  
//  const ReadableFile = fs.createReadStream('read.txt')   
//    ReadableFile.on('data',(chunk)=>{
//      res.end(chunk)
//    })
//    ReadableFile.on('end',()=>{
//     res.end()
//    }) 
//    ReadableFile.on('error',(err)=>{
//      console.log(err);
//      res.statusCode = 500;
//      res.end('file not found')  
//    })

//soloution 3

//  const ReadableFile = fs.createReadStream('read.txt')
//    ReadableFile.pipe(res);

// }).listen(8000,'127.0.0.1',()=>{
//  console.log('server run');
// })

// const getmodule = require('./test-module1')

// let calc1 = new getmodule()
// console.log(calc1.add(10,10));

// const {add,multiply,divide} = require('./tset-module2')

// console.log(add(50,150));
// console.log(multiply(50,150));
// console.log(divide(50,150).toFixed());

//catching

// require('./test-module3')();
// require('./test-module3')();
// require('./test-module3')();












