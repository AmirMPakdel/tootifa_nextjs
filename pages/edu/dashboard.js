import React, { Component } from "react";
import DashboardCard from "../../components/educatorDashboard/DashboardCard";
import IncomeChart from "../../components/educatorDashboard/IncomeChart";
import IncomesChestCard from "../../components/educatorDashboard/IncomesChestCard";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./dashboard.module.css";

export default class dashboard extends Component {
    
    render(){
        return(
            <EducatorDashboardLayout>
                
                <div className={styles.sec1}>

                    <DashboardCard number={"32,605"} number_title={"عدد"} title={"دوره فروخته شده"}/>

                    <DashboardCard number={"15"} number_title={"عدد"} title={"دوره ارائه شده"}/>

                    <DashboardCard number={"15,325"} number_title={"تومان"} title={"هزینه روزانه"}/>

                    <DashboardCard number={"165"} number_title={"روز"} title={"باقی مانده تا اتمام اعتبار"}/>

                </div>

                <div className={styles.sec2}>

                    <IncomesChestCard/>

                    <IncomeChart/>

                </div>

            </EducatorDashboardLayout>
        )
    }
}