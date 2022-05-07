export interface TestCase {
    problemId:number,
	testCaseNumber: number,
	input: string,
	output: string
}

export interface Problem {
    problemId: number,
	problemName: string,
	numberOfSubmissions: number,
	writerId: number,
	description: string,
	timeLimit: string,
	memoryLimit: string,
	difficulty: string,
	testcases: TestCase[],
	problemSubmissionsId: []
}
export interface scoreRequest{
    page:number,
    contestid:number,
}

export interface scoreResponse{
  firstName:string
  score:number,
  userid:number,
}

export interface Contest {
    contestId: number,
    contestName: string,
    contestProblemsId: number[],
    duration: string,
    numberOfRegisteredUsers: number,
    problemsScore: number[],
    startTime: string,
    wrongSubmissionCost: number
  }

  export interface SubmissionRequest {
	problemID: number,
	ownerID: number,
	language: string,
	code: string,
	submissionId: number,
    date: string ,
    isContest:boolean,
    contestid:string
}

export interface FailedTestCase {
    testCase: TestCase,
    reason: string,
    userOutput: string,
}

export interface Submission {
	submissionId:number,    
	problemId:number,         
	userId:number,        
    date:string,         
	language:string,   
	submittedCode:string,  
	time:string, 
	space:string,
	accepted:number,
	failedTestCase :FailedTestCase,
}

export interface UserProfile {
    firstName: string,
    lastName: string,
    country: string,
    organization: string,
    rating: number,
    registrationDate: string,
    acceptedCount: number,
    runtimeCount: number,
    timelimit_exceeded_count: number,
    wrongCount: number,
    userSubmissionsId: number[],
    userContestsId: number[],
    createdProblemsId: number[],
}

export interface TitleInfoProps {
    title: string;
    value: string;
  }