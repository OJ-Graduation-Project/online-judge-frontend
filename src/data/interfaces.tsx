export interface TestCase {
    problemId:number,
	testCaseNumber: number,
	input: string,
	output: string
}

export interface Problem {
    _id: number,
	problemName: string,
	numberOfSubmissions: number,
	writerId: number,
	description: string,
	timeLimit: string,
	memoryLimit: string,
	difficulty: string,
	testcases: TestCase[],
	problemSubmissionsId: [],
    topic:[],
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
    _id: number,
    contestName: string,
    contestProblemsId: number[],
    duration: string,
    RegisteredUserids: number[],
    problemsScore: number[],
    contestStartDate: string,
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
	_id:number,    
	problemId:number,         
	userId:number,        
    date:string,         
	language:string,   
	submittedCode:string,  
	time:string, 
	space:string,
	accepted:string,
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
    _id:number
}

export interface TitleInfoProps {
    title: string;
    value: string;
  }