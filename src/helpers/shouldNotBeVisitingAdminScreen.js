const shouldNotBeVisitingAdminScreen = function() {
    let authenticationServiceStatus = process.env.VUE_APP_AUTHENTICATION_SERVICE_STATUS;
    let userIsSignedIn = localStorage.signedIn;
    
    if (authenticationServiceStatus === 'disabled') {
        return false;
    }

    if ((! userIsSignedIn)) {
        return true;
    }
};

export default shouldNotBeVisitingAdminScreen;