import { AiTwotoneVideoCamera, AiOutlineFileImage, AiOutlineFrown } from "react-icons/ai";
import k1 from '../resources/k1.png';


export default function(){
    return (
        <div className="postarFeed">
        <div className="feedForm">
          <img src={k1} />
          <input type="text" placeholder="Apenas Exeplo Trabalho proDevs" />
        </div>
        <div className="feedIcons">
          <div className="iconSingle">
            <AiTwotoneVideoCamera />
            <span>Video ao Vivo</span>
          </div>
          <div className="iconSingle img">
            <AiOutlineFileImage />
            <span>Fotos/Videos</span>
            <br></br>
          </div>
          <div className="iconSingle emoji">
            <AiOutlineFrown />
            <span>Sentimentos/Atividades</span>
          </div>
        </div>

        
      </div>
    );
}

