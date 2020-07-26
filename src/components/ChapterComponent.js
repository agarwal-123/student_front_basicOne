import React , { Component} from 'react';
import './Chapter.css';
import {SUBJECTS,PHYSICS} from '../shared/subjects';
import {Link} from 'react-router-dom';


function TopicCard(props){

      return (
		<div  class="mat-card-s box-shadow clearfix" >
			<div class="card-img-style-s">
				<img src="https://toppscholar-upload.s3.ap-southeast-1.amazonaws.com/content-package/7491303a-9de3-48e4-a8a1-41c873460896.jpg"/>
				<div  class="title-text medium-18 line-height" >{props.details.name}</div>
			</div>
			<div class="img-box-s">      
				<li>12 Concepts</li>
				<li>23 Videos</li>
				<li>0% Learnt</li>
				<li>0% Practiced</li>
			</div>
		</div>
      );
}

function SubjectCard(props){
	return (
		<Link className="link" to={`/chapter/${props.chapter}/${props.details.name}`}>
			<div  class="mat-card box-shadow" >
				<div class="card-img-style">
					<img src="https://toppscholar-upload.s3.ap-southeast-1.amazonaws.com/content-package/7491303a-9de3-48e4-a8a1-41c873460896.jpg"/>
				</div>
				<div class="img-box">
					<div  class="title-text medium-18 line-height" >{props.details.name}</div>	
					<div class="color-green ">
						<li  class="list-style">12 Concepts</li>
						<li >23 Videos</li>
					</div>
					<div  class="list-container">
						<li  class="list-style">{props.details.learn}% Learnt</li>
						<li  class="">{props.details.practice}% Practiced</li>
					</div>
				</div>
			</div>
		</Link>
	);

}

class Chapter extends Component{

      constructor(props){
		super(props);
		this.state = {
			selectedTopic:[],
			selectTopicName:''
		};
		this.selectTopic = this.selectTopic.bind(this);
	}
	
	selectTopic(index,name) {
		var temp=[];
		this.setState({ selectedTopic: PHYSICS.slice(index,PHYSICS.length-1) });
		this.setState({selectTopicName:name});
		console.log(this.state.selectedTopic);
	}
     
      render(){
            
            const topics = SUBJECTS.map((user, i) => {
                  return (
                        <a onClick={()=>{this.selectTopic(user.subid,user.name)}}>
                              <TopicCard details={user}/>
                        </a>
                  );
            });

            return(
                  <div className="comp clearfix">
                        <div class="card-container">
                              {topics}
                        </div>
				<div class="card-container-big"> 
					{
						this.state.selectedTopic.map((user,i)=>{
							if(user.name.length>18) 
								user.name=user.name.slice(0,18)+"..."
							return(
								<SubjectCard chapter={this.state.selectTopicName} details={user}/>
							);
						})
					}
      			</div>
                  </div>
            );
      }
}

export default Chapter;