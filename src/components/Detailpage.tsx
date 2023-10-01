import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function DetailsPage() {
    const [projects, setProjects]: any = useState([])
    const [colab,setColab]:any =  useState("")
    const [taskDetails, setTaskDetails] = useState({
        title: "",
        details: "",
        start_date: "",
        end_date: "",
        priorty: false,
    })
    const navigate = useNavigate();
    var authtoken: any;
    if (localStorage.getItem("token")) {
        authtoken = localStorage.getItem("token")
    } else {
        navigate('/')
    }
    const { projectid } = useParams();
    const getprojects = async (id: any) => {
        const response = await fetch(`https://feedbackloop-pvqd.onrender.com/addproject/id`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ id: projectid }) // body data type must match "Content-Type" header
        });
        const json = await response.json()
        if (json.error) {
            // setProjects()
        } else {
            setProjects(json[0])
        }
    }
    const addColab = async (id: any,colab:any) => {
        const response = await fetch(`https://feedbackloop-pvqd.onrender.com/addcolabs`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ id , colab}) // body data type must match "Content-Type" header
        });
        const json = await response.json()
        if (json.error) {
            // setProjects()
            alert("error adding colab")
        } else {
        }
    }
    const deleteTask = async (id: any,projectid:any) => {
        const response = await fetch(`https://feedbackloop-pvqd.onrender.com/addtask`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ id , projectid}) // body data type must match "Content-Type" header
        });
        const json = await response.json()
        if (json.error) {
            // setProjects()
            alert("error adding colab")
        } else {
            alert("Sucess")
        }
    }
    const handleDeleteTask = (e:any)=>{
        e.preventDefault();
        deleteTask(e.target.id,projectid)
    }
    const handleAddColab = (e: any) => {
        e.preventDefault();
        addColab(projectid,colab)
    }
    const addTasks = async (id: any, title: any, details: any, start_date: any, end_date: any, priorty: any) => {
        const response = await fetch(`https://feedbackloop-pvqd.onrender.com/addtask`, {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "auth-token": authtoken
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ id, title, details, start_date, end_date, priorty }) // body data type must match "Content-Type" header
        });
        const json = await response.json()
        if (json.error) {
            alert("u gone case")
        } else {
            console.log(json)
        }
    }
    const handleChange = (e: any) => {
        setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        addTasks(projectid, taskDetails.title, taskDetails.details, taskDetails.start_date, taskDetails.end_date, taskDetails.priorty)
    }
    useEffect(() => {
        getprojects(projectid)
    }, [])
    return (
        <div className="flex">
            <div className="p-10 w-full">
                <div className="container mx-auto ">
                    <div className="my-4 flex">
                        <input
                            name="title"
                            className="p-2 rounded border shadow w-full"
                            type="text"
                            placeholder="Add tasks to thes project!"
                            onChange={handleChange}
                        />
                        <input
                            name="start_date"
                            className="p-2 rounded border ml-2 shadow w-min"
                            type="date"
                            onChange={handleChange}
                        />
                        <input
                            name="end_date"
                            className="p-2 rounded border ml-2 shadow w-min"
                            type="date"
                            onChange={handleChange}
                        />
                        <button className="bg-black text-white p-4 ml-2 rounded" onClick={handleSubmit}>+</button>
                    </div>
                    <div className="flex mb-4">
                        <textarea
                            name="details"
                            className="p-2 rounded border shadow w-full"
                            placeholder="Add tasks to thes project!"
                            onChange={handleChange}
                        />
                        <div className="flex items-center">
                        </div>
                    </div>
                    
                    <div>
                        {
                            projects.length == 0 ? <>No Task to this project</> :
                                <>{
                                    projects.tasks.map((s: any) => (
                                        <div className="border shadow rounded p-2 flex justify-between items-center">
                                            <div className="flex flex-col">
                                                {s.title}
                                                <span className="text-slate-400">{s.details}</span>
                                            </div>
                                            <div>
                                                <button  className="bg-black text-white p-2 ml-2 rounded" id={s._id} onClick={handleDeleteTask}>O</button>
                                            </div>
                                        </div>
                                    ))
                                }</>
                        }
                    </div>
                </div>
            </div>
            <div className="w-1/4 border-l h-screen p-4">
                <div className="flex">

                <input
                 name="colab"
                 className="p-2 rounded border shadow w-min"
                 type="text"
                 onChange={(e)=>{setColab(e.target.value)}}
                />
                <button className="bg-black text-white p-4 ml-2 rounded" onClick={handleAddColab}>+</button>
                </div>
                <div className="flex flex-col mt-6">
                        {
                            projects.length == 0 ? <>No Task to this project</> :
                                <>{
                                    projects.colaborator.map((s: any) => (
                                        <div className="border shadow rounded p-2 flex justify-between">
                                            <div className="flex flex-col">
                                                {s.email}
                                            </div>
                                        </div>
                                    ))
                                }</>
                        }
                    </div>
            </div>

        </div>
    )

}

export default DetailsPage