// import React, { useState } from 'react'

import { useState } from "react"

function SearchBar(props) {


    const [jobCriteria, setJobCriteria] = useState({

        title:"",
        location:"",
        experience:"",
        type:""
    })



    const handleChange=(e)=>{

        setJobCriteria((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    console.log(jobCriteria)


    const  search = async()=>{

        
        await props.fetchJobsCustom(jobCriteria);
 }



  return (
    <div className='flex  gap-4 my-10 justify-center px-10 '>

<select onChange={handleChange} name = "title" value={jobCriteria.title} className='w-55 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'  id="">

    <option value=""disabled hidden selected>Job Role</option>

    <option value="Java Fresher">Java Fresher</option>
    <option value="FrontEnd Trainee">FrontEnd Trainee</option>
    <option value="Graduate Engineer Trainee">Graduate Engineer Trainee</option>
    <option value="SQL Fresher">SQL Fresher</option>
    <option value="Graduate">Graduate</option>
</select>



<select onChange={handleChange} name = "type" value={jobCriteria.type} className='w-60 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'  id="">

    <option value=""disabled hidden selected>Job Type</option>

    <option value="Full Time ">Full Time </option>
    <option value="Part Time">Part Time</option>
    <option value="Internship">Internship</option>

</select>


<select onChange={handleChange} name = "location" value={jobCriteria.location} className='w-60 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'  id="">

    <option value=""disabled hidden selected>Location</option>

    <option value="In-Office">In-Office</option>
    <option value="Remote">Remote</option>
    

    

</select>




<select onChange={handleChange} name = "experience" value={jobCriteria.experience} className='w-60 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'  id="">

    <option value=""disabled hidden selected>Experience</option>

    <option value="Fresher">Fresher</option>
    <option value="Junior Level">Junior Level</option>
    <option value="Mid Level">Mid Level</option>
    <option value="Senior Level">Senior Level</option>
   

    

</select>

<button onClick={search}  className='w-60  bg-[#182D6D] text-white font-bold py-3 rounded-md '>Search</button>





    </div>
  )
}

export default SearchBar