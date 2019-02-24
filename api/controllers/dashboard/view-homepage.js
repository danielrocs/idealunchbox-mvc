module.exports = {


  friendlyName: 'View homepage',


  description: 'Display "" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/homepage'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
