interface User{
    id: number;
    first_name: string;
    last_name: string;
    country: string;
    date_of_birth: string;
    email: string;
    organization: string;
    rating_value: number;
    accepted_count: number;
    wrong_count: number;
    joined: string;
    runtime_count: number,
    timelimit_exceeded_count: number,
    unsolved_problems: number;
    contest_count: number;
    best_rank: {rank: number, total: number},

};

export const UserArr: User[] = [
    {
        id: 1,
        first_name: "Omar",
        last_name: "Radwan",
        country: "Egypt",
        organization: "Alexandria University",
        date_of_birth: "6/3/1999",
        email: "omarradwanx@gmail.com",
        rating_value: 1748,
        
        accepted_count: 100,
        wrong_count: 20,
        runtime_count: 30,
        timelimit_exceeded_count: 12,
        joined: "1/1/2020",
        unsolved_problems: 1,
        contest_count: 10,
        best_rank: {rank: 218, total:2000},
    },

]

export default UserArr;