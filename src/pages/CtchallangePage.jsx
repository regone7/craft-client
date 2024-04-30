
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const CtchallangePage = () => {
    const ctchall=useLoaderData()
    console.log(ctchall)
    const[lists,setlistes]=useState([])
    useEffect(()=>{
       fetch(`http://localhost:5000/categoriess/${ctchall?.subcategory_Name}`)
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        const filter=data.filter(c=>c?.subcategory_Name === ctchall?.subcategory_Name)
            setlistes(filter)

       })
    },[])
    console.log(lists)
    return (
        <div>
            {lists.length}
        </div>
    );
};

export default CtchallangePage;