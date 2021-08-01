import determinedDatabaseURL from "../../helpers/determinedDatabaseURL";
const apiVersion = process.env.VUE_APP_ACTOR_API_VERSION || 'v1'
const determinedDatabaseUrl = determinedDatabaseURL() + '/api';

const availableEndpoints = {
    events: `${determinedDatabaseUrl}/${apiVersion}/events`,
    acting_credits: `${determinedDatabaseUrl}/${apiVersion}/acting-credits`,
    live_chat: `${determinedDatabaseUrl}/${apiVersion}/live-chat`,
    signup: `${determinedDatabaseUrl}/${apiVersion}/auth/signup`,
    signin: `${determinedDatabaseUrl}/${apiVersion}/auth/signin`,
    logout: `${determinedDatabaseUrl}/${apiVersion}/auth/logout`,
}

export default availableEndpoints;