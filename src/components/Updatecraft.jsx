
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Updatecraft = () => {
    // const loaderupdate=useLoaderData()
    // console.log(loaderupdate)
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/craftss/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [id])
    return (
        <div>
            hiiii
        </div>
    );
};

export default Updatecraft;