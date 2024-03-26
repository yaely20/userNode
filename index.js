import express from 'express'  
const app = express()
const port = 3001

let  arr=[{id:1,name:"yaely",mail:"y0583248523@gmail.com",age:20, adress:"berri"},
{id:2,name:"david",mail:"d0583248523@gmail.com",age:3, adress:"jerusalem"}
,{id:3,name:"efrat",mail:"e0583248523@gmail.com",age:7, adress:"berristerrt"}]

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
app.get("/users", (req, res) => {
    res.send(arr);
    //למה?
  });
  app.get("/users/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    res.send(arr[userId-1]);
  })

  app.post('/users/:name/:mail/:age/:adress' ,(req,res)=>{
    

    const newUser = {
            id: arr.length + 1, 
            name: req.params.name.toString(),
            mail: req.params.mail.toString(),
            age:parseInt (req.params.age),
            adress: req.params.adress.toString()
    };
        arr.push(newUser);
        res.send(arr);

    });   

  app.put("/users/:id/:name/:mail/:age/:adress",(req,res)=>{
    
    const newUser = {
            id: parseInt(req.params.id), 
            name: req.params.name.toString(),
            mail: req.params.mail.toString(),
            age:parseInt (req.params.age),
            adress: req.params.adress.toString()
    };
    
        arr[parseInt(req.params.id)-1]=newUser;
        res.send(arr);
    });

  
    app.delete("/users/:id", (req, res) => {

        arr = arr.filter(user=> user.id != parseInt(req.params.id));
        res.send(arr)
    });
    
  
