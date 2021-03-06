/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { controller: 'startup/StartupController', action: 'dashboardList' },
  'GET /homepage':        { controller: 'startup/StartupController', action: 'dashboardList' },
  'GET /startup/create':  { view:   'pages/startup/create' },
  'GET /startup/list':  { controller: 'startup/StartupController', action: 'list' },
  'POST /startup/create':     {controller: 'startup/StartupController', action: 'create'},
  'GET /startup/edit/:id':   {controller: 'startup/StartupController', action: 'edit'},
  'POST /startup/update':     {controller: 'startup/StartupController', action: 'update'},
  'GET /startup/delete/:id':     {controller: 'startup/StartupController', action: 'delete'},
  //'GET /forms/create':  { view:   'pages/forms/create', locals: {layout: 'layouts/layout-form'}  },
  'GET /forms/create':  { view:   'pages/forms/create' },



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
