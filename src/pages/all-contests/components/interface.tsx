interface Contest {
    contestId: number,
    contestName: string,
    contestProblemsId: number[],
    duration: string,
    numberOfRegisteredUsers: number,
    problemsScore: number[],
    startTime: string,
    wrongSubmissionCost: number
  }

  export default Contest;