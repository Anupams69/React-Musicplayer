
// import React from 'react'
// import { useState } from 'react';

// function Main() {


//     const [togle, setogle] = useState(true);
     
//     function visible(){

//          setogle(!togle)
//     }
//  return (
//    <div>

         
//          {

//           togle?<div>
//               <button  onClick={visible}>dont Show image</button>
//               <img src=" https://www.hollywoodreporter.com/wp-content/uploads/2024/08/Shah-Rukh-Khan-Final-Getty-H-2024.jpg?w=1296" alt="" />
//           </div>
//          :<div>
//            <button onClick={visible}> Show image</button>

//          </div>

//          }




//    </div>
//  )
// }

// export default Main

// ?==================================================




// import React from 'react'

// function togle() {

//     let string =[


//     ]
//   return (
//     <div>{

// visible? <div>
//           <p>{p.substring(0,10)}</p>
//           <button onClick={show}></button>
//           </div>: <div><p>
//           {p}
//          </p>
//           <button onClick={show}></button>
//           </div>
// }


//     </div>
//   )
// }

// export default togle
// ????????????????????????????????++++++++++++++==================


import React from 'react'
import { useState } from 'react';
import Child from './Child';

function Togle() {   

    const [visible, setvisible] = useState(true);
    
  function visiblee(){
    setvisible(!visible)
  }



    
  var s =[
     `
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque deleniti impedit amet doloribus blanditiis esse pariatur laboriosam quam! Tenetur incidunt consequatur deleniti, doloribus iure vitae alias quas ea nobis?
 A sunt explicabo at quod. Unde ut eius, sit dignissimos quam a consequatur repudiandae dolores iusto laudantium amet placeat quaerat harum id suscipit provident at consectetur veritatis ducimus corporis sapiente!
 Nisi itaque maxime a reiciendis voluptatibus molestiae tempora deserunt nobis. Illum amet asperiores voluptatem obcaecati culpa, id eveniet maiores odit, commodi aspernatur doloribus quisquam nobis corrupti. Placeat aperiam cum quibusdam.
 Accusamus, laudantium vel nostrum perspiciatis quibusdam fugiat magni asperiores excepturi voluptatum minima accusantium illo neque optio esse ipsam. Voluptas repellat asperiores nam modi. Tempora id reiciendis voluptatum cumque, tempore voluptates.
 Iusto animi perspiciatis aut molestias minus ducimus, deleniti voluptatum commodi inventore quas sunt ad enim consequuntur incidunt placeat recusandae a? Laboriosam nulla numquam obcaecati quasi esse molestiae corrupti? Porro, est?

 `,

  `
     data2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque deleniti impedit amet doloribus blanditiis esse pariatur laboriosam quam! Tenetur incidunt consequatur deleniti, doloribus iure vitae alias quas ea nobis?
 A sunt explicabo at quod. Unde ut eius, sit dignissimos quam a consequatur repudiandae dolores iusto laudantium amet placeat quaerat harum id suscipit provident at consectetur veritatis ducimus corporis sapiente!
 Nisi itaque maxime a reiciendis voluptatibus molestiae tempora deserunt nobis. Illum amet asperiores voluptatem obcaecati culpa, id eveniet maiores odit, commodi aspernatur doloribus quisquam nobis corrupti. Placeat aperiam cum quibusdam.
 Accusamus, laudantium vel nostrum perspiciatis quibusdam fugiat magni asperiores excepturi voluptatum minima accusantium illo neque optio esse ipsam. Voluptas repellat asperiores nam modi. Tempora id reiciendis voluptatum cumque, tempore voluptates.
 Iusto animi perspiciatis aut molestias minus ducimus, deleniti voluptatum commodi inventore quas sunt ad enim consequuntur incidunt placeat recusandae a? Laboriosam nulla numquam obcaecati quasi esse molestiae corrupti? Porro, est?

 `,
 `
 Data3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque deleniti impedit amet doloribus blanditiis esse pariatur laboriosam quam! Tenetur incidunt consequatur deleniti, doloribus iure vitae alias quas ea nobis?
 A sunt explicabo at quod. Unde ut eius, sit dignissimos quam a consequatur repudiandae dolores iusto laudantium amet placeat quaerat harum id suscipit provident at consectetur veritatis ducimus corporis sapiente!
 Nisi itaque maxime a reiciendis voluptatibus molestiae tempora deserunt nobis. Illum amet asperiores voluptatem obcaecati culpa, id eveniet maiores odit, commodi aspernatur doloribus quisquam nobis corrupti. Placeat aperiam cum quibusdam.
 Accusamus, laudantium vel nostrum perspiciatis quibusdam fugiat magni asperiores excepturi voluptatum minima accusantium illo neque optio esse ipsam. Voluptas repellat asperiores nam modi. Tempora id reiciendis voluptatum cumque, tempore voluptates.
 Iusto animi perspiciatis aut molestias minus ducimus, deleniti voluptatum commodi inventore quas sunt ad enim consequuntur incidunt placeat recusandae a? Laboriosam nulla numquam obcaecati quasi esse molestiae corrupti? Porro, est?

 `
  ]
  
  
    

  return (
    <div>    
        {

            s.map((s)=>{
          
                 return (
             <Child s={s}/>
                   
        
                   


                 )

            })
        }


    </div>
  )
}

export default Togle