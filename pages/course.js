import React, { Component } from "react";
import CommentsSec from "../components/viewCourse/CommentsSec";
import ContentCard from "../components/viewCourse/ContentCard";
import CourseBanner from "../components/viewCourse/CourseBanner";
import CourseInfo from "../components/viewCourse/CourseInfo";
import FloatingCard from "../components/viewCourse/FloatingCard";
import IconLine from "../components/viewCourse/IconLine";
import SectionTitle from "../components/viewCourse/SectionTitle";
import HomeLayout from "../layouts/HomeLayout";
import styles from "./course.module.css";

export default class course extends Component {
    
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <HomeLayout>

                <div className={styles.sec1}>

                    <CourseBanner/>

                </div>

                <div className={styles.sec2}>

                    <SectionTitle title="چه چیزی در این دوره یاد خواهید گرفت؟"/>

                    <div className={styles.sec3}>

                        {
                            arr1.map((v,i)=>(
                                <IconLine className={styles.crs_points} icon_className={styles.crs_points_icn}
                                text_className={styles.crs_points_txt} icon={"./svg/crs_point_icn.svg"} text={v}/>
                            ))
                        }

                    </div>

                    <div className={styles.space1}/>

                    <SectionTitle title="محتوای دوره"/>

                    <ContentCard text={txt1}/>

                    <ContentCard text={txt2}/>

                    <ContentCard text={txt3}/>

                    <ContentCard text={txt4}/>

                    <ContentCard text={txt5}/>

                    <div className={styles.space1}/>

                    <SectionTitle title="پیش نیاز های دوره"/>

                    <div className={styles.req_sec}>

                        <IconLine icon_className={styles.square_icon} 
                        icon={"./svg/crs_square_icn.svg"} text={txt6}/>

                        <IconLine icon_className={styles.square_icon} 
                        icon={"./svg/crs_square_icn.svg"} text={txt7}/>

                    </div>

                    <div className={styles.space1}/>

                    <SectionTitle title="توضیحات دوره"/>

                    <CourseInfo/>

                    <div className={styles.space1}/>

                    <SectionTitle title="نظرات کاربران"/>

                    <CommentsSec/>

                </div>

                <FloatingCard/>

                <div style={{height:"40rem"}}/>

            </HomeLayout>
        )
    }
}

const arr1 = [
    "استادی در فیزیک کوانتوم در حد تنت",
    "پیش بینی در حد نوستراداموس",
    "ساخت مدل های قوی ماشین زمان",
    "از ماشین زمان برای اهداف شخصی خودتان استفاده کنید",
    "از تکنیک‌های پیشرفته مانند افزایش یا کاهش ابعاد چهارگانه استفاده کنید",
    "نقل مکان در زمان در بعد پنجم",
]

const txt1="1. مقدمه ای بر درس فیزیک";
const txt2="2. نگاهی به هسته اتم"; 
const txt3="3. همه چیز در باره علم کوانتم";
const txt4="4. مبانی سینماتیک و نور";
const txt5="5. پادماده و خواص آن";

const txt6="فقط در حد دبستان بلد باشید کافیست";
const txt7="فرمول‌های دبیرستان هم بلد باشید، ممنون";

