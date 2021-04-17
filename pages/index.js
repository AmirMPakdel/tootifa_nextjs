import Head from 'next/head'
import styles from './index.module.css'
import HomeLayout from '../layouts/HomeLayout';
import SearchBar from '../components/mainPage/SearchBar'
import NewestCourses from '../components/mainPage/NewestCourses'
import TopSellers from '../components/mainPage/TopSellers'
import FreeCourses from '../components/mainPage/FreeCourses'
import SignupSec from '../components/mainPage/SignupSec'
import JoinAsTeacher from '../components/mainPage/JoinAsTeacher'
import Aboutus from '../components/mainPage/Aboutus'


export default function Home() {
  return (
    <HomeLayout>

      <div className={styles.search_section_con}>

        <SearchBar/>

      </div>

      <div className={styles.newest_courses_sec}>

        <NewestCourses/>

      </div>

      <div className={styles.about_signup_sec}>

        <SignupSec/>

      </div>

      <div className={styles.top_seller_sec}>

        <TopSellers/>

      </div>

      <div className={styles.join_as_teacher_sec}>

        <JoinAsTeacher/>

      </div>

      <div className={styles.free_courses_sec}>

        <FreeCourses/>

      </div>

      <div className={styles.about_us_sec}>

        <Aboutus/>

      </div>

      <div className={styles.footer_sec}>

      </div>
      
    </HomeLayout>
  );
}