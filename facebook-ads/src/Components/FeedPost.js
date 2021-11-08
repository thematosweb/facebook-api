import { AiFillContainer, AiFillLike, AiOutlineWechat, BiShare } from "react-icons/ai";
import Coments from './Coments';
  
const axios = require('axios');

 
  




  


export default function (props) {
  return (
    <div className="feedPost">

      <div className="feedPostSingle">
      <div className="feedPost_profile">
          <img src={props.icon} />
          <h3>{props.nome}<br /><span>patrocinado</span></h3>

          </div>
        <div className="feedPost_content">
          <p>{props.content} </p>
          <img src={props.imagem} />
        </div>
      </div>
      {/* Likes, Comentarios e Compartilhamentos */}
      <div className="feedIcons">
        <div className="iconSingle">
          <AiFillLike />
          <span>Curtidas
          </span>
          <span>{props.like}</span>
        </div>
        <div className="iconSingle coments">
          <AiOutlineWechat />
          <button className ="btn" id = 'action-btn' >Comentarios</button>
          <span>{props.coments}</span>
        </div>
        <div className="iconSingle share">

          <span>Compartilhar</span>
          <span>{props.compartilhar}</span>
         
        </div>
       
          
       </div> 
       {/*<Coments/> */}
       

    </div>

  );
}

