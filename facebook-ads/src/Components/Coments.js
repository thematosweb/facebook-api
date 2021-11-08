import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';
const axios = require('axios');




export default function  (props) {
    const [postData, setPostData, responsivo] = useState([]);


    async function getAPIResponse() {
        const response = await axios.get('https://api.npoint.io/144c46739f80c9eeb6b7');
        console.log(response.data.data);
        setPostData(response.data.data);
    }






    return (
        <div className="feedPost_coments" id='comentarios'>
            <ul>
            {
                postData.map((post)=>{
                    return <li>{post.user}</li>
                })

            }
            </ul>



            <img src={props.icon} />
            <h3>{props.nome}<br /><span>patrocinado</span></h3>
            
            </div>



    )
}





