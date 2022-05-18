import LocalHostConfig from "../config/localhost_config.json"
import KubernetesConfig from "../config/kubernetes_config.json"


let backend_url: string
let connection_type: string
switch (process.env.REACT_APP_CONFIG) {
    case 'kubernetes': {
        backend_url = `${KubernetesConfig.backend.host}:${KubernetesConfig.backend.port}${KubernetesConfig.backend.subPath}`
        connection_type = KubernetesConfig.backend.connectionType
        break;
    }
    default: {
        backend_url = `${LocalHostConfig.backend.host}:${LocalHostConfig.backend.port}${LocalHostConfig.backend.subPath}`
        connection_type = LocalHostConfig.backend.connectionType
        break;
    }
}
export const ALL_CONTESTS_URL = `${connection_type}://${backend_url}/all-contests`;
export const CONTEST_URL = `${connection_type}://${backend_url}/all-contests/contest/`;
export const CREATE_CONTEST_URL = `${connection_type}://${backend_url}/create-contest`;
export const CREATE_PROBLEM_URL = `${connection_type}://${backend_url}/create-problem`;
export const HOME_URL = `${connection_type}://${backend_url}/home`;
export const LOGIN_URL = `${connection_type}://${backend_url}/login`;
export const LOGOUT_URL = `${connection_type}://${backend_url}/logout`;
export const PROBLEM_URL = `${connection_type}://${backend_url}/problem`;
export const PROFILE_URL = `${connection_type}://${backend_url}/profile`;
export const PROFILE_URL_IMG = `${connection_type}://${backend_url}/profile-img`;
export const REGISTRATION_URL = `${connection_type}://${backend_url}/all-contests/Registration/contest-name`;
export const SIGNUP_URL = `${connection_type}://${backend_url}/sign-up`;
export const SIGNUP_URL_IMG = `${connection_type}://${backend_url}/sign-up-img`;
export const SUBMIT_URL = `${connection_type}://${backend_url}/submit`;
export const TOPICS_URL = `${connection_type}://${backend_url}/topic`;
export const USER_PROBLEMS_URL = `${connection_type}://${backend_url}/user-problems/`;
export const USER_SUBMISSIONS_URL = `${connection_type}://${backend_url}/user-submissions/`;
export const VIEW_SUBMISSION_URL = `${connection_type}://${backend_url}/submission/`;
