const determinedDatabaseURL = function() {
    if (process.env.VUE_APP_ENVIRONMENT === "production") {
        return process.env.VUE_APP_DATABASE_URL_PROD;
    }
    return process.env.VUE_APP_DATABASE_URL_DEV;
}

export default determinedDatabaseURL;