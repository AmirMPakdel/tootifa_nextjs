import React, { Component } from 'react';
import statics from '../../utils/statics';
import "./TabBar.css";
import { ReactComponent as LogoutIcon } from '../../assets/images/logout_icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg';
import { ReactComponent as MenuCloseIcon } from '../../assets/images/menu_close.svg';
import Controller from '../../utils/Controller';
import { getCurrentWindowPhaze, WINDOW_PHAZE } from '../../lib/WindowHandler';

export default class TabBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            active_tab : window.location.pathname.split("/")[3]
        }
    }

    componentDidMount(){
        window.addEventListener("resize", this.onResize);
        Controller.onBackdropClicked = this.onMenuClose;
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.onResize);
    }

    onResize = ()=>{
        if(getCurrentWindowPhaze() == WINDOW_PHAZE.PHONE){
        
            this.MenuIcon.style.display = "block";

            if(this.MenuCloseIcon.style.display != "block"){
                Controller.closeSideMenu();
            }
            
        }else{

            if(this.MenuIcon.style.display === "block"){
                
                this.MenuIcon.style.display = "none";
            }

            if(this.MenuCloseIcon.style.display === "block"){

                this.MenuCloseIcon.style.display = "none";
                Controller.hideBackdrop();
            }

            Controller.openSideMenu();
        }
    }

    onSelect = (route)=>{
        let path = window.location.pathname.split("/").slice(0,3);
        path[3] = route;
        window.location.href = path.join("/");
    }

    onMenuOpen = ()=>{
        this.showMenuCloseIcon();
        Controller.openSideMenu();
        Controller.showBackdrop();
    }

    onMenuClose = ()=>{
        this.showMenuOpenIcon();
        Controller.closeSideMenu();
        Controller.hideBackdrop();
    }

    showMenuOpenIcon = ()=>{
        this.MenuCloseIcon.style.display = "none";
        this.MenuIcon.style.display = "block";
    }

    showMenuCloseIcon = ()=>{
        this.MenuIcon.style.display = "none";
        this.MenuCloseIcon.style.display = "block";
    }

    render() {
        return (
            <div id="mng_tabb_con">
                {
                    this.props.tabs?
                    this.props.tabs.map((v,i)=>(
                        <div className="mng_tabb_tab amp_btn" onClick={()=>this.onSelect(v.route)}>
                            <div className="mng_tabb_line" style={v.route==this.state.active_tab?
                                {backgroundColor:statics.theme1}:{}}/>
                            <div className="mng_tabb_title" style={v.route==this.state.active_tab?
                                {opacity:1, fontWeight:500}:{}}>{v.title}</div>
                        </div>
                    )):null
                }

                <MenuIcon ref={r=>this.MenuIcon=r} id="mng_tabb_menu_open" onClick={this.onMenuOpen} fill={statics.b2}/>

                <MenuCloseIcon ref={r=>this.MenuCloseIcon=r} id="mng_tabb_menu_close" onClick={this.onMenuClose} stroke={statics.w1}/>

                <LogoutIcon id="mng_tabb_logout" className="amp_btn" fill={statics.b2}/>
            </div>
        )
    }
}
