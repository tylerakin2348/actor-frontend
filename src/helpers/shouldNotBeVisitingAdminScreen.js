const shouldNotBeVisitingAdminScreen = function(currentVueInstance) {
    let authenticationServiceStatus = currentVueInstance.$authenticationServiceStatus;
    let userIsSignedIn = localStorage.signedIn;
    let currentValidRouteIncludesAdmin = currentVueInstance.$route.path.includes('admin') && currentVueInstance.$route.name !== "404";
    
    if (authenticationServiceStatus === 'disabled') {
        return false;
    }

    if ((authenticationServiceStatus === 'enabled') && (! userIsSignedIn) && currentValidRouteIncludesAdmin) {
        console.log('yup')
        return true;
    }
};

export default shouldNotBeVisitingAdminScreen;