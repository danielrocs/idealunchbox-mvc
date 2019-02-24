module.exports = {


  friendlyName: 'View singup',


  description: 'Display "Singup" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/authentication/singup'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
