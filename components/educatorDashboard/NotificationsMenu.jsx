import React, { Component } from "react";
import Controller from "../../utils/Controller";
import NotificationDialog from "./NotificationDialog";
import styles from "./NotificationsMenu.module.css";

export default class NotificationsMenu extends Component {

    state = {
        display : false,
        con_style : {},
        menu_style : {},
        notification_dialog : null
    }

    componentDidMount(){
        Controller.NotificationsMenu_show = this.show;
        Controller.NotificationsMenu_hide = this.hide;
        Controller.NotificationsMenu_toggle = this.toggle;
    }

    show = ()=>{
        Controller.disableBoyScroll();
        this.setState({
            display: true, 
            con_style : {display:"flex"},
        }, ()=>{
            setTimeout(()=>{this.setState({menu_style : {transform : "translateX(0rem)"}})}
            ,100);
        })
    }

    hide = ()=>{
        Controller.enableBodyScroll();
        this.setState({
            menu_style: {transform : "translateX(-30rem)"},
            notification_dialog: null,
        }, ()=>{
            setTimeout(()=>{this.setState({
                display: false, 
                con_style : {display:"none"}})}
            ,200);
        })
    }

    toggle = ()=>{
        if(this.state.display){
            this.hide()
        }else{
            this.show()
        }
    }

    onShowNotif = (id)=>{
        this.setState({
            menu_style: {transform : "translateX(-30rem)"},
            notification_dialog : <NotificationDialog onClose={this.onCloseNotif}/>
        })
    }

    onCloseNotif = (e)=>{
        this.setState({
            menu_style: {transform : "translateX(0rem)"},
            notification_dialog : null
        })
        e.stopPropagation();
    }
    
    render(){
        return(
            <div className={styles.con} style={this.state.con_style} onClick={this.hide}>
                <div className={styles.menu} style={this.state.menu_style}>

                    <NotificationCard onSelect={this.onShowNotif} id={12} seen/>
                    <NotificationCard onSelect={this.onShowNotif} id={13} seen/>
                    <NotificationCard onSelect={this.onShowNotif} id={14}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>
                    <NotificationCard onSelect={this.onShowNotif} id={18}/>

                </div>

                {
                    this.state.notification_dialog
                }
                
            </div>
        )
    }
}

function NotificationCard(props){

    let con_styles={}
    if(props.seen){
        con_styles = {backgroundColor:"white"}
    }

    return(
        <div className={styles.notif_card_con} style={con_styles}
            onClick={(e)=>{props.onSelect(props.id); e.stopPropagation()}}>

            <div className={styles.notif_text}>{"فلان اتفاق قراره بیوفته و همین روزاست که تعجب کنی و تمام روزت تبدیل به عذاب میشه"}</div>

            <div className={styles.notif_date}>{"1400/02/01"}</div>

        </div>
    )
}