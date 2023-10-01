import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [login,setLogin]=useState(true)
  return(
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="mx-auto shadow border rounded flex flex-col items-center p-4">
        {
          login ? <Login/> : <Signup/>
        }
        <div>
          <span>{login ? "Do not ":"Already "}</span> 
          have an account 
          <span
            onClick={()=>{setLogin(!login)}}
          className="text-red-600 underline">{login ? " Signup" : " Login"}
          </span>
        </div>
      </div>
    </div>
  );
}

function Login(){

 const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  }; 
  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    login(email,password)
  };
  
  const login = async (email:String,password:String) => {
	  // Default options are marked with *
	  console.log(email)
	  const response = await fetch('https://feedbackloop-pvqd.onrender.com/user/login', {
		  method: "POST",
		  headers: {
			  "Content-type": "application/json;charset=UTF-8",
		  },
		  // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		  body: JSON.stringify({email,password}) // body data type must match "Content-Type" header
	  });
	  const  json5 = await response.json()
	  // console.log(json5)
	  if(json5.jwttoken){
		  localStorage.setItem("token",json5.jwttoken);
		  navigate("/home")
	  }else{
		  alert("invalid")
	  }
  }
  useEffect(()=>{
    if(localStorage.getItem("token")){
     navigate('/home') 
    }
  },[])
  return(
    <div className="flex justify-center text-2xl">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="my-2 flex flex-col">
          <label className="text-xl pb-2">Email</label>
          <input
            className="p-2 rounded border shadow"
            type="email"
            value={email}
            placeholder="jonedoe@gamail.com"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="my-2 flex flex-col">
          <label className="text-xl pb-2">Password</label>
          <input
            className="p-2 rounded border shadow"
            type="password"
            value={password}
            placeholder="***********"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="my-4 bg-red-100 px-4 py-2 rounded-lg">Login</button>
      </form>
    </div>
  )
}

function Signup(){
 const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e:any) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    signin(fullName,email,password)
  };
  const signin = async (name:String,email:String,password:String) => {
    // Default options are marked with *
    const response = await fetch('https://feedbackloop-pvqd.onrender.com/user/signup', {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ name, email, password})
    });
    const json = await response.json()
    if (json.savedUser) {
      navigate("/")
    } else {
      alert("invalid")
    }
  }
  return(
    <div className="flex justify-center text-xl">
<form onSubmit={handleSubmit} className="p-4">
        <div className="my-2 flex flex-col">
          <label className="text-xl pb-2">Full Name:</label>
          <input
            type="text"
            className="p-2 rounded border shadow"
            value={fullName}
            placeholder="jone doe"
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className="my-2 flex flex-col">
          <label className="text-xl pb-2">Email:</label>
          <input
            type="email"
            className="p-2 rounded border shadow"
            value={email}
            placeholder="jonedoe@gamail.com"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="my-2 flex flex-col">
          <label className="text-xl pb-2">Password:</label>
          <input
            type="password"
            className="p-2 rounded border shadow"
            value={password}
            placeholder="***********"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="my-4 bg-red-100 px-4 py-2 rounded-lg">Sign Up</button>
      </form>
    </div>
  )
}
export default AuthPage;
