import axios from "axios";

const setAuthToken = tok => {
  if (tok) {
    axios.defaults.headers.common["Authorization"] = tok;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
