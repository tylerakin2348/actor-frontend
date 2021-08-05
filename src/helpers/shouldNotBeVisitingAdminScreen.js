const shouldNotBeVisitingAdminScreen = function() {
  let authenticationServiceStatus = process.env.VUE_APP_AUTHENTICATION_SERVICE_STATUS;
  let userIsSignedIn = JSON.parse(localStorage.getItem("logged_in_status"));
  if (authenticationServiceStatus === "disabled") {
    return false;
  }

  if (!userIsSignedIn) {
    return true;
  }
};

export default shouldNotBeVisitingAdminScreen;
