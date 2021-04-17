import { Component } from "react";

const Controller = {

    disableBoyScroll : ()=>{},
    enableBodyScroll : ()=>{},
    user_change_tab : (jsx)=>{},
}

class ControllerComponent extends Component{

    componentDidMount(){
        Controller.disableBoyScroll = this.disableBoyScroll;
        Controller.enableBodyScroll = this.enableBodyScroll;
    }

    disableBoyScroll = ()=>{
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    enableBodyScroll = ()=>{
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    }

    render(){
        return(
            <div style={{display:"none"}}></div>
        )
    }
}


export default Controller;
export {ControllerComponent};