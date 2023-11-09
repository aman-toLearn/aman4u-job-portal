import dayjs from "dayjs";
// import React from "react";



function JobCard(props) {

    // const skills =["Java","SQL","OOP"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day')

  return (
    <div className="mx-40 mb-4">
                <div className="flex justify-between items-center px-6 py-4 bg-zinc-200  rounded-md border border-black shadow-lg hover:border-green-500 hover:translate-y-1 hover:scale-103 ">
                    <div className="flex flex-col items-start gap-3 ">
                        <h1 className="text-lg font-semibold">{props.title} - {props.company}</h1>
                        <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location} </p>
                        <div className="flex items-center gap-2">
                            {props.skills.map((skill)=>(
                            <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black">{skill}</p>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 ">
                          <p className="text-gray-500" >Posted {diffInDays>1? `${diffInDays} days`: `${diffInDays} day`}   ago</p>
                          <a href={props.job_link}>                       
                             <button className="text-blue-800 border  border-blue-500 px-10 py-2 rounded-md hover:bg-green-800 hover:text-white hover:text-bold ">Apply</button>
</a>
                    </div>
                </div>
    </div>
  );
}

export default JobCard;
