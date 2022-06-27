module.exports.adminLogin = async (request, response, next) => {
  const users = [
    {
      name: "pranay",
      password: "1234",
    },

    {
      name: "srishti",
      password: "1234",
    },
  ];

  try {
    const { email, password } = request.body;

    const checkUser = users.findIndex((user) => user.name === email);
    if (checkUser >= 0) {
      if (users[checkUser].password === password) {
        return response.status(200).json({
          success: true,
          message: "Login Successful",
          data: { email: email },
        });
      } else {
        return response.status(401).json({
          success: true,
          message: "Wrong Password",
          data: {},
        });
      }
    } else {
      return response.status(401).json({
        success: true,
        message: "User doesnt exists!!",
        data: {},
      });
    }
  } catch (error) {
    console.log(
      "Server Error at adminLogin in authentication/customer => Error : ",
      error
    );
    return response.status(500).json({
      success: false,
      message: "Server Error! Failed to login user!",
      data: error,
    });
  }
};

module.exports.adminRegistration = async (request, response, next) => {
  response.send;
};
