import React,{Component} from 'react';
import Vimeo from '@u-wave/react-vimeo';

import './CSS/Videoplayer.css';

const videos = 
[
      { 
            id: 115783408, name: 'Jambinai - Connection',
            image:"https://i.vimeocdn.com/video/924124243_640.jpg"
      },
      {     id: 438166716, name: 'Jambinai - They Keep Silence',
            image:"https://i.vimeocdn.com/video/924124243_640.jpg"
      },
      { 
            id: 169408731, name: 'Hoody - Like You',
            image:"https://i.vimeocdn.com/video/924124243_640.jpg"
      },
      { 
            id: 438166716, name: 'Jambinai - They Keep Silence ',
            image:"https://i.vimeocdn.com/video/924124243_640.jpg"
      },
      { 
            id: 115783408, name: 'Jambinai - Connection',
            image:"https://i.vimeocdn.com/video/924124243_640.jpg"
      },
      { 
            id: 438166716, name: 'Jambinai - They Keep Silence',
            image:"https://i.vimeocdn.com/video/924124243_640.jpg"
      },
      { 
            id: 169408731, name: 'Hoody - Like You',
            image:"https://i.vimeocdn.com/video/924124243_640.jpg"
      },
      { 
            id: 438166716, name: 'Jambinai - They Keep Silence',
            image:"https://i.vimeocdn.com/video/924124243_640.jpg"
      }    
];
    

class Videoplayer extends Component{

      constructor(props){
            super(props);
            this.state = {
                  videoIndex: 0,
                  videoList:[]
            };
            this.selectVideo=this.selectVideo.bind(this);
            
      }

      selectVideo(index) {
            this.setState({ videoIndex: index });
      }

      render() {
            const { videoIndex } = this.state;
        
            const video = videos[videoIndex];
            return (
              <div className="container-video">
        
              <div className="video">
                <div className="main-video ">
                <div class="vimeo">
                  <Vimeo
                    video={video.id}
                    width={1000}
                    height={570}
                    autoplay
                    // volume={volume}
                    // paused={paused}
                    // onPause={this.handlePlayerPause}
                    // onPlay={this.handlePlayerPlay}
                  />
                  </div>
                </div>
                <p className="main-text"> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged 
                </p>
                </div>
        
                <div className="other-videos">
                  <div className="collection">
                    {videos.map((choice, index) => (
        
                      <a
                        href={`#!/video/${index}`}
                        className={`other clearfix collection-item ${video === choice ? 'active' : ''}`}
                        onClick={() => this.selectVideo(index)}
                      >
                        <img src={choice.image} />
                        <div class="other-text">{choice.name}</div>
                      </a>
                    ))}
                  </div>
        
                </div>
        
              </div>
            );
          }
}

export default Videoplayer;