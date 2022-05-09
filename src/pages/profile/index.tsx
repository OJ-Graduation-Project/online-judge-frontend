import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles.module.css";
import TitleInfo from "./components";
import { Chart } from "react-google-charts";
import logo from "./../../assets/logo.png"
import TopNav from "../../components/topNav";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {PROFILE_URL} from "../../data/EndPoints";
import {UserProfile} from "../../data/interfaces";
const cookies = new Cookies();




const columns: GridColDef[] = [
    { field: "SubmissionID", headerName: "SubmissionID", width: 300 },
];



const Profile: React.FC = () => {
    // var x = UserArr[0];
    const navigate = useNavigate()
    // const urlParams = new URLSearchParams(window.location.search);
    const userID = 1629;

    let p: UserProfile = {
        firstName: "", lastName: "test", country: "", organization: "",
        rating: 0, registrationDate: "1-1-2001", acceptedCount: 9, wrongCount: 5, timelimit_exceeded_count: 0,
        runtimeCount: 5, userSubmissionsId: [], userContestsId: [], createdProblemsId: [],_id:0
    }
    let [profile, setProfile] = useState(p)
    let [DataisLoaded, setDataisLoaded] = useState(false)


    useEffect(() => {
        let hasCookie = cookies.get("cookie")
        console.log("C IS: "+ hasCookie)
        if(!hasCookie){
            navigate("/login");
        }
        fetch(PROFILE_URL,{
            method : 'POST',
            credentials: 'include',
            // headers:{'content-type':'application/json'},
            body:JSON.stringify({userId: userID })
        })
            .then((res) => res.json())
            .then((json) => {
                setProfile(json);
                setDataisLoaded(true);
            })
    }, [])
    console.log(profile)
    if (DataisLoaded) {
        return (
            <div>
                <TopNav />
                <div className={styles["all-container"]} >
                    <div className={styles["left-container"]} >

                        <div className={styles["info-image"]}>
                            <div className={styles["user-stats-container"]} >
                                <h2> {profile.firstName + " " + profile.lastName}</h2>
                                <TitleInfo title="Country" value={profile.country} />
                                <TitleInfo title="Organization" value={profile.organization} />
                                <TitleInfo title="Rating" value={profile.rating.toString()} />
                                <TitleInfo title="Joined" value={profile.registrationDate} />
                            </div>
                            <div className={styles["image"]} >
                                <img className={styles["img"]} src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className={styles["chart-container"]} >
                            <Chart
                                loader={<div>Loading Chart</div>}
                                width={'98%'}
                                chartType="PieChart"
                                data={[
                                    ['Task', 'Hours per Day'],
                                    ['Accepted', profile.acceptedCount],
                                    ['Runtime Error', profile.runtimeCount],
                                    ['Time limit', profile.timelimit_exceeded_count],
                                    ['Wrong Answers Count', profile.wrongCount],
                                ]}
                                options={{
                                    title: 'User Stats',
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />

                        </div>


                    </div>

                    <div className={styles["right-container"]}>
                        <a href={"/user-submissions/" + profile._id}>Submissions</a>
                        <a href={"/user-problems/" + profile._id}>Problems Created</a>
                        {/* <a href={""}>Contests Created</a> */}
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading profile please wait! :)</h1>
    }
};

export default Profile;
{/* <div className={styles["user-info-container"]}>
                <h2>{UserArr[0].first_name + " " + UserArr[0].last_name}</h2>
                <TitleInfo title="Country" value={UserArr[0].country} />
                <TitleInfo title="Email" value={UserArr[0].email} />
                <TitleInfo title="Organization" value={UserArr[0].organization} />
            </div> */}