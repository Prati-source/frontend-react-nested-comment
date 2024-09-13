import { useState } from "react";
import { Link} from "react-router-dom"
import { useAsyncFn } from "../../hooks/useAsync";
import { register } from "../../services/user";
import { Button, Label , TextInput } from "flowbite-react";
import UseHash from "../../hooks/useHash";



export function Register(){
    const[username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [re_password, setre_password] = useState()
    const createUserFn = useAsyncFn(register)
    

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        let pass = UseHash(password)
        setPassword(pass)
        let repass = UseHash(re_password)
        setre_password(repass)
       
      

        

        if(password === re_password){
            createUserFn.execute({username,password,re_password}).then(console.log('success'))
        }

    }
    


    return (
        <div >
                    <div  className='mx-4  h-full   rounded-lg bg-Cloud bg-cover '>
                      <div>
                        <div className=' flex text-3xl pt-3 border-white text-white  my-7 justify-center font-mono'>
                          Register Here
                        </div>
                        <div className='flex text-xl text-white font-mono justify-center'>
                        Sign Up for Free
                
                        </div >
                      
                        <form className="flex flex-col gap-4 mx-6 text-white" onSubmit={(e) => handleOnSubmit(e)}>
                        <div >
                          <div className="mb-2 block ">
                            <Label
                              htmlFor="username"
                              value=" Your Username:"
                              class="text-white font-semibold"
                              
                            />
                          </div>
                          <TextInput
                            id="username"
                            type="text"
                            placeholder="Username"
                            required={true}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div>
                          <div className="mb-2 block">
                            <Label
                              htmlFor="password1"
                              value="Your password:"
                              class="text-white font-semibold"
                            />
                          </div>
                          <TextInput
                            id="password1"
                            type="password"
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div>
                        <div className="mb-2 block text-ellipsis">
                            <Label
                              htmlFor="password1"
                              value="Confirm password:"
                              class="text-white font-semibold"
                            />
                          </div>
                          <TextInput
                            id="password2"
                            type="password"
                            required={true}
                            onChange={(e) => setre_password(e.target.value)}
                          />
                        </div>
                        <div className="mb-5"> <Button className="bg-blue-500" type="submit" >
                          Submit
                        </Button></div>
                       
                      </form>
                    </div>
                  </div>
                  <div className='text-xs mx-4 dark:text-white'>
                        <p>Already have an account? <div className='underline inline dark:text-white'><Link exact to='/login'>Sign In </Link></div> </p>
                      </div>
        </div>
      );
}