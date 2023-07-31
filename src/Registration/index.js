import React from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {

  const [info, setInfo] = useState({
    name:"",
    email:"",
    age:"",
    password:"",
  });

  const [todo,setTodo]=useState([]);
  const [show, setShow]=useState(false);
  const [ids, setIds]=useState("");
  const [error, setError]=useState("");
  

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setInfo((prev) => ({
      ...prev,
      [name]:value,
    }));
  };
  const validation=()=>{
    if(!info.name||!info.email||!info.deg||!info.password){
     setError("please full fill the form");
    }
  };
  const db = getDatabase();
  const handleSubmit=()=>{
   validation();
   set(push(ref(db, "users")), {
    name:info.name,
    email:info.email,
    age:info.age,
    password:info.password,
   }).then(()=>{
    setInfo({
      name:"",
      email:"",
      age:"",
      password:"",
    });
    toast.success("Registration successful",{
      autoClose:5000,
      pauseOnHover:false,
      theme:"red",
      // position: "bottom-center",
    })
   });
  };
  useEffect(()=>{
    const starCountRef = ref(db, "users");
    onValue(starCountRef, (snapshot) => {
     let arr=[];
     snapshot.forEach((x)=>{
      arr.push({...x.val(), id:x.key});
     });
     setTodo(arr);
    });
   });
  
  //delete data
  
  const handleDelete=(id)=>{
    remove(ref(db, "users/"+id))
  };
  
  //edit data
  
  const handleEdit=(value)=>{
    setInfo({
      name:value.name,
      email:value.email,
      age:value.age,
      password:value.password,
    });
    setShow(true);
    setIds(value.id);
  }
  
  const handleUpdate=()=>{
    update(ref(db, "users/"+ids),{
      name:info.name,
      email:info.email,
      age:info.age,
      password:info.password,
    }).then(()=>{
      setInfo({
        name:"",
        email:"",
        age:"",
        password:"",
      });
    });
  };    
  
  return (
    <>
  <div class="headline">
            <marquee width="80%" direction="right" height="100px" scrollamount="16">
            welcome to smart voting system
                </marquee>
        </div>
<Container>
  <Grid container spacing={2}>
    <Grid item xs={6} className="form">

    <TextField onChange={handleChange} type="text" fullWidth id="standard-basic" label="enter your name" variant="standard" margin="normal" name="name" value={info.name}/>

    <TextField onChange={handleChange} type="email" fullWidth id="standard-basic" label="enter your email" variant="standard" margin="normal" name="email" value={info.email}/>

    <TextField onChange={handleChange} type="number" fullWidth id="standard-basic" label="enter age" variant="standard" margin="normal" name="age" value={info.age}/>

    <TextField onChange={handleChange} type="password" fullWidth id="standard-basic" label="enter password" variant="standard" margin="normal" name="password" value={info.password}/>

   {
    show ? (
    <Button onClick={handleUpdate} variant="contained" className="btn2">Update</Button>)
    :
    (
      <>
      <Button onClick={handleSubmit} variant="contained" className="btn2">Submit</Button>
      <ToastContainer/>
      </>
    )

   }
    
    <div className="box">
   {todo.map((item,i)=>(
   <div className="widths" key={i}>
    <h4>{item.name}</h4>
    <h4>{item.email}</h4>
    <p>{item.age}</p>
    <p>{item.password}</p>
    
    <Button onClick={()=>handleDelete(item.id)} variant="contained" className="btn2">delete</Button>

    <Button onClick={()=>handleEdit(item)} variant="contained" className="btn2">edit</Button>

   </div>
   ))}

    </div>
      {error ? <p>{error}</p> : ""}
    
    </Grid>
  </Grid>
</Container>
    </>
  )
}

export default Registration;
