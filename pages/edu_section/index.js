import React, { Component } from "react";
import EduSecOne from "../../components/eduSection/EduSecOne";
import EduSectionLayout from "../../layouts/EduSectionLayout";
import styles from "./index.module.css";

export default class index extends Component {
    
    render(){
        return(
            <EduSectionLayout>

                <EduSecOne/>

            </EduSectionLayout>
        )
    }
}