import {  useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

import './Sidebar.css'
const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompt, setRecentPrompt,newChat}= useContext(Context)

    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=> setExtended(prev=> !prev)} className='menu' src={assets.menu_icon} alt="menu icon" />
            <div onClick={()=> newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="plus icon" />
                {extended? <p>New Chat</p> :null}
            </div>
            {extended ? 
                <div className="recent">
                    <p className='recent-title'>Recent</p>
                    {prevPrompt.map((item,index)=>{
                        return (
                            <div onClick={()=>loadPrompt(item)} className="recent-entry" key={index}>
                                <img src={assets.message_icon} alt="message icon" />
                                <p>{item.slice(0,18)} ...</p>
                            </div>
                        )
                    })
                    }
                    
                </div> 
                :null
            }
        </div>
        <div className="bottom">
           {/*<div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="question icon" />
                {extended?<p>Help</p> :null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="history icon" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="setting icon" />
                {extended?<p>Settings</p>: null}
            </div>*/}
        </div>
    </div>
  )
}

export default Sidebar