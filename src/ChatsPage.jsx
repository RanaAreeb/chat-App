import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage=(props)=>{
    const chatProps =useMultiChatLogic('f7738c3a-2615-4980-81e3-7b31267dad2a',props.user.username, props.user.secret);
    return <div style={{height :'100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style= { {height:'100%'}}/>
    </div>

}
export default ChatsPage