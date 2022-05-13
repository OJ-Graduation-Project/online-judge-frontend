import LocalHostConfig from "../config/localhost_config.json"
import KubernetesConfig from "../config/kubernetes_config.json"


let backend_url: string
switch (process.env.REACT_APP_CONFIG) {
    case 'kubernetes': {
        backend_url = `${KubernetesConfig.backend.host}:${KubernetesConfig.backend.port}`
        break;
    }
    default: {
        backend_url = `${LocalHostConfig.backend.host}:${LocalHostConfig.backend.port}`
        break;
    }
}
export const ALL_CONTESTS_URL = `http://${backend_url}/all-contests`;
export const CONTEST_URL = `http://${backend_url}/all-contests/contest/`;
export const CREATE_CONTEST_URL = `http://${backend_url}/create-contest`;
export const CREATE_PROBLEM_URL = `http://${backend_url}/create-problem`;
export const HOME_URL = `http://${backend_url}/home`;
export const LOGIN_URL = `http://${backend_url}/login`;
export const LOGOUT_URL = `http://${backend_url}/logout`;
export const PROBLEM_URL = `http://${backend_url}/problem`;
export const PROFILE_URL = `http://${backend_url}/profile`;
export const REGISTRATION_URL = `http://${backend_url}/all-contests/Registration/contest-name`;
export const SIGNUP_URL = `http://${backend_url}/sign-up`;
export const SUBMIT_URL = `http://${backend_url}/submit`;
export const TOPICS_URL = "http://${AppConfig.backend.host}:${AppConfig.backend.port}/topic";
export const USER_PROBLEMS_URL = `http://${backend_url}/user-problems/`;
export const USER_SUBMISSIONS_URL = `http://${backend_url}/user-submissions/`;

