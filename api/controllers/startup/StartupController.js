/**
 * StartupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: async function (req, res) {
        var listStartups = await startup.find({});
        // Startup.find({}).exec(function (err, startup) {
        //     if (err) {
        //         res.send(500, { error: 'Database Error' });
        //     }
        //     res.view('list', { startup: startup });
        // });
        res.view('pages/startup/list', { listStartups: listStartups });
    },
    create: async function (req, res) {
        //var name = req.body.name;
        var params = _.extend(req.query || {}, req.params || {}, req.body || {});

        sails.log('>> Create a new startup: ', params);

        var createdStartup = await startup.create({
           name: params.name,
           description: params.description,
           industry: params.industry,
           businessModel: params.businessModel,
           growthStage: params.growthStage,
           location: params.location,
           status: params.status,
        }).fetch();

        //startup.findOne

        sails.log('>> New startup id: ', createdStartup.id);

        res.redirect('/startup/edit/'+ createdStartup.id);

        // startup.create({ name: name}).exec(function (err, createdStartup) {
        //     if (err) {
        //         res.send(500, { error: 'Database Error: function create startup' });
        //     }

        //     //console.log(createdStartup);
        //     sails.log('New startup id: ', createdStartup);

        //     //res.redirect('/startup/edit' + createdStartup._id);
        //     res.redirect('/homepage');
        // });
    },
    delete: async function (req, res) {
        sails.log('>> Dekete a startup: ', req.params.id);

        var startupDeleted = await startup.destroyOne({id: req.params.id});

        if (startupDeleted) {
            sails.log('- Deleted Startup with id: ', req.params.id);
        } else {
            sails.log('The database does not have a Statup with id: ', req.params.id);
        }

        res.redirect('/startup/list');
    },
    edit: async function (req, res) {
        sails.log('>> Edit a startup: ', req.params.id);

        var startupEdit = await startup.findOne({_id: req.params.id});

        if (!startupEdit) {
            sails.log('- Could not find startup, sorry.');
          }
          else {
            sails.log('+ Found "%s"', startupEdit.name);
          }

        res.view('pages/startup/edit', { startupEdit: startupEdit });
    },
    update: async function (req, res) {
        var params = _.extend(req.query || {}, req.params || {}, req.body || {});

        //sails.log('>> Update a startup: ', req.body);
        //var new_name = req.body.name;
        sails.log('>> Update a startup ID: ', params);

        var updatedStartup = await startup.updateOne({ id: params.id})
        .set({
           name: params.name,
           description: params.description,
           industry: params.industry,
           businessModel: params.businessModel,
           growthStage: params.growthStage,
           location: params.location,
           status: params.status,
        });

        if (updatedStartup) {
            sails.log('+ Updated the Startup');
        }
        else {
            sails.log('- The database does not contain a Startup: ', req.body.id);
        }

        res.redirect('/startup/list');
    },
    dashboardList: async function (req, res) {
        var listStartups = await startup.find({});
        // Startup.find({}).exec(function (err, startup) {
        //     if (err) {
        //         res.send(500, { error: 'Database Error' });
        //     }
        //     res.view('list', { startup: startup });
        // });
        res.view('pages/dashboard/homepage', { listStartups: listStartups });
    }

};

