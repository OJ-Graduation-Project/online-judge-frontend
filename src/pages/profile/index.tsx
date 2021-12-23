import React from "react";
import styles from "./styles.module.css";
import TitleInfo from "./components";
import { UserArr } from "../../data/User";
import { Chart } from "react-google-charts";
import logo from "./../../assets/logo.png"
import TopNav from "../../components/topNav";


const Profile: React.FC = () => {
    var x = UserArr[0];
    return (
        <div>            
            <TopNav/>
            <div className={styles["all-container"]} >
                <div className={styles["left-container"]} >

                    <div className={styles["info-image"]}>
                        <div className={styles["user-stats-container"]} >
                            <h2> {x.first_name + " " + x.last_name}</h2>
                            <TitleInfo title="Country" value={x.country} />
                            <TitleInfo title="Organization" value={x.organization} />
                            <TitleInfo title="Rating" value={x.rating_value.toString()} />
                            <TitleInfo title="Joined" value={x.joined}/>
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
                                ['Accepted', x.accepted_count],
                                ['Runtime Error', x.runtime_count],
                                ['Time limit', x.timelimit_exceeded_count],
                                ['Wrong Answers Count', x.wrong_count],
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