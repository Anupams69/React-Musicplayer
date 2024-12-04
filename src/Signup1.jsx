import React from 'react'
import {useForm} from "react-hook-form"
import "./Signup.css"

function Signup1() {

  let{register ,handleSubmit ,formState:{errors}} = useForm();
  let isalpha = /^[A-Za-z]+$/g

  const sendFormData = async (data)=>{
    console.log(data)

    const responce = await fetch(`http://localhost:4000/api/employees/submit`,{
          method :"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data),

    });

    console.log(responce);

  };
  console.log(errors);




  return (
    <form className='form' onSubmit={handleSubmit(sendFormData)}>
     
     <h1>Registration form</h1>
      

      <div>
         <input type="text" placeholder='Fullname' name='firstname'
         {
          ...register("fullname", {
             required:{value:true ,message:"Fullname is mandatory"},
             minlength:{value:4,message:"Fullname must have 4 charecters"},
             maxLength:{ value:10,message:"Fullname must have 10 charecters"},
             pattern:{value:isalpha,message:"fullname must contain only alphabets"}
          })



         }/>


      </div>


      <div className='message'>
          {errors.fullname?.message}

         </div>


{/* ================================================================ */}





      <div>
         <input type="text" placeholder='password' name='password'
         {
          ...register("password", {
             required:{value:true ,message:"Password is mandatory"},
             minlength:{value:4,message:"Password must have 4 charecters"},
             maxLength:{ value:10,message:"Password must have 10 charecters"},
             pattern:{value:isalpha,message:"Password must contain only alphabets"}
          })



         }/>
      </div>


         <div className='message'>
          {errors.password?.message}

         </div>


         <div>
          <button type='submit'> Register</button>
         </div>




    </form>




      
    
  )
}

export default Signup1