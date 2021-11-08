import './Style/App.css';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';
import { AiFillLike, AiOutlineWechat, BiShare } from "react-icons/ai";
import FeedForm from './Components/FeedForm';
import Header from './Components/Header';
import FeedPost from './Components/FeedPost';
import Stories from './Stories';
import Coments from './Components/Coments';
const axios = require('axios');


{/*dangerouslySetInnerHTML*/ }
function App() {
  const [postData, setPostData] = useState([]);
  async function getAPIResponse() {
    const response = await axios.get('https://api.npoint.io/144c46739f80c9eeb6b7');
    console.log(response.data.data)
    setPostData(response.data.data)

  }

  useEffect(() => { getAPIResponse() }, [])
  return (
    <div className="App">
      <Header />
      <div className="container">

        <Stories />
        <FeedForm />

        {
          postData.map((post) => {
            return (<FeedPost user={post.user} content={post.content}
              imagem={post.content_image}
              nome={post.user.name}
              icon={post.user.avatar}
              like={post.likes}
              compartilhar={post.shares}
              coments={post.total_comments} />)
          })
        }

      </div>
    </div>
  );
}

export default App;
