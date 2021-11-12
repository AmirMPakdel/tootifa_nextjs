import React, { Component } from "react";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./newCourse.module.css";
import Steps from '../../components/educatorDashboard/Steps';
import PriceCategoryPage from "../../components/educatorDashboard/PriceCategoryPage";
import PlayModeSelectPage from "../../components/educatorDashboard/PlayModeSelectPage";
import ConclusionPage from "../../components/educatorDashboard/ConclusionPage";

export default class newCourse extends Component {
    
    state={
        step:2,
    }

    componentDidMount(){

    }

    onStep=(step)=>{
        this.setState({step})
    }

    render(){
        return(
            <EducatorDashboardLayout>
                
                <Steps step={this.state.step} onStep={this.onStep}/>

                {
                    this.state.step===1?
                    <PriceCategoryPage/>
                    :null
                }
                {
                    this.state.step===2?
                    <PlayModeSelectPage/>
                    :null
                }
                {
                    this.state.step===3?
                    <ConclusionPage/>
                    :null
                }

            </EducatorDashboardLayout>
        )
    }
}