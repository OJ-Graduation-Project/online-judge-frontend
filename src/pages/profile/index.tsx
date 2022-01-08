import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./styles.module.css";
import TitleInfo from "./components";
import { UserArr } from "../../data/User";
import { Chart } from "react-google-charts";
import logo from "./../../assets/logo.png"
import TopNav from "../../components/topNav";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'
const cookies = new Cookies();

interface Profile {
	firstName: string,
	lastName: string,
    Country: string,
	Organization: string,
	Rating: number,
	Joined: string,
    acceptedCount: number,
    runtimeCount: number,
    timelimit_exceeded_count: number,
    wrongCount: number,
}

const Profile: React.FC = () => {
    // var x = UserArr[0];
    const navigate = useNavigate()

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    let profile = {
        firstName: "", lastName: "test", Country: 0, Organization: 0,
        Rating: 0 , Joined: "1-1-2001", acceptedCount: 9, wrongCount:5, timelimit_exceeded_count:0,
        runtimeCount: 5 } as unknown as Profile
    let [items, setItems] = useState(profile)
    let [DataisLoaded, setDataisLoaded] = useState(false)
    useEffect(() => {
        let hasCookie = cookies.get("cookie")
        console.log("C IS: "+ hasCookie)
        if(!hasCookie){
            navigate("/login");
        }
        fetch('http://localhost:8000/profile',{
            method : 'POST',
            // headers:{'content-type':'application/json'},
            body:JSON.stringify({name})
        })
        .then((res) => res.json())
        .then((json) => {
            setItems(json);
            setDataisLoaded(true);
        })
    },[])

    return (
        <div>            
            <TopNav/>
            <div className={styles["all-container"]} >
                <div className={styles["left-container"]} >

                    <div className={styles["info-image"]}>
                        <div className={styles["user-stats-container"]} >
                            <h2> {profile.firstName + " " + profile.lastName }</h2>
                            <TitleInfo title="Country" value={profile.Country} />
                            <TitleInfo title="Organization" value={profile.Organization} />
                            <TitleInfo title="Rating" value={profile.Rating.toString()} />
                            <TitleInfo title="Joined" value={profile.Joined}/>
                        </div>
                        <div className={styles["image"]} >
                            <img className={styles["img"]} src={logo} alt="logo"/>
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

                <div className={styles["right-container"]} >
                    <a href={""}>Submissions</a>
                    <a href={""}>Contests</a>
                    <a href={""}>Problems Created</a>
                </div>

            </div>
        </div>
    );
};

export default Profile;
{/* <div className={styles["user-info-container"]}>
                <h2>{UserArr[0].first_name + " " + UserArr[0].last_name}</h2>
                <TitleInfo title="Country" value={UserArr[0].country} />
                <TitleInfo title="Email" value={UserArr[0].email} />
                <TitleInfo title="Organization" value={UserArr[0].organization} />
            </div> */}