const checkForAvailableData = function(current_vue_instance, api_response, mutation_to_trigger) {
  if (api_response.data.length > 0) {
    current_vue_instance.$store.commit(`${mutation_to_trigger}`, true);
  } else {
    current_vue_instance.$store.commit(`${mutation_to_trigger}`, false);
  }
};

export default checkForAvailableData;
