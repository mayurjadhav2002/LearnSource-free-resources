import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProjectPage() {
  const [projects,setProjects]:any = useState([])
  const navigate = useNavigate();
  var authtoken: any;
  
  const getprojects = async () => {
    const response = await fetch(`https://feedbackloop-pvqd.onrender.com/addproject`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": authtoken
      }
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const json = await response.json()
    if(json.error){
      // setProjects()
    }else{
      setProjects(json)
    }
  }
  
  useEffect(()=>{
    if (localStorage.getItem("token")) {
      authtoken = localStorage.getItem("token")
    } else {
      navigate('/')
    }
    getprojects()
  },[])
  return (
    <div className="h-screen w-screen bg-red-200 flex">
      <AddProject />
      <div className="bg-white p-4 w-3/4 border-r">
        <div className="grid grid-cols-2 gap-6">
          {
            projects.length == 0 ? <>No projects</> :
              <>{
                projects.map((s: any) => (
                  <Link to={`/detail/${s._id}`} className="border shadow rounded p-2 flex justify-between">
                    <div className="flex flex-col">
                      {s.name}
                      <span className="text-slate-400">{s.desc}</span>
                    </div>
                  </Link>
                ))
              }</>
          }
        </div>
      </div>
    </div>
  )
}

function AddProject() {

  const navigate = useNavigate();
  var authtoken: any;
  if (localStorage.getItem("token")) {
    authtoken = localStorage.getItem("token")
  } else {
    navigate('/')
  }
  const [projectName, setProjectName]: any = useState();
  const [projectDesc, setProjectDesc]: any = useState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addproject(projectName, projectDesc)
    setProjectName("")
    setProjectDesc("")
  }
  const logout = ()=>{
    localStorage.removeItem('token')
    navigate("/")
  }
  const addproject = async (name: String, desc: String) => {
    // Default options are marked with *

    const response = await fetch(`https://feedbackloop-pvqd.onrender.com/addproject`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "auth-token": authtoken
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ name, desc }) // body data type must match "Content-Type" header

    });
    var json10 = await response.json()
    console.log(json10)
  }
  return (
    <div className="bg-white p-4 w-1/4 border-r">
      <div className="flex items-center">
      <h2 className="text-3xl text-center font-bold pb-4">Add New Project</h2>
      <button className="bg-black text-white p-max m-1 rounded" onClick={logout}>Log out</button>
      </div>
      <form onSubmit={handleSubmit} className="border-t">

        <div className="my-2 flex flex-col">
          <label className="text-xl pb-2">Project Name</label>
          <input
            className="p-2 rounded border shadow"
            type="text"
            placeholder="Hello world Project!"
            value={projectName}
            onChange={(e: any) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="my-2 flex flex-col">
          <label className="text-xl pb-2">Project Description</label>
          <textarea
            className="p-2 rounded border shadow resize-none"
            placeholder="My new project has for the demo purpose"
            rows={6}
            value={projectDesc}
            onChange={(e: any) => setProjectDesc(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center my-4">
          <button type="submit" className="bg-black text-white p-3 m-1 rounded">Add Project</button>
        </div>
      </form>
    </div>
  )
}
export default ProjectPage
