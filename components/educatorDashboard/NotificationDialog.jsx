import React, { Component } from "react";
import MainButton from "../mainPage/MainButton";
import styles from "./NotificationDialog.module.css";

export default class NotificationDialog extends Component {
    
    render(){
        return(
            <div className={styles.con}>

                <div className={styles.title}>{"اعتبار شما فلان قدر است و شسیشو شسیو شسیو شسیو شس وشسی و"}</div>
                <div className={styles.body} dangerouslySetInnerHTML={{__html:html}}></div>

                <MainButton className={styles.close_btn} title={"بستن"} onClick={this.props.onClose}/>
                
            </div>
        )
    }
}

const html = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>
<p>My first paragraph.</p>

</body>
</html>`