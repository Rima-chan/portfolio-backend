const Projects = require('../models/Project');

exports.getAllProjects = (req, res) => {
    Projects.find()
      .then(projects => {
          for (let project of projects) {
              const mappedImages = project.attachments.map(image => `${req.protocol}://${req.get('host')}/images/${image}`);
              project.attachments = mappedImages;
          }
          return res.status(200).json(projects)
        })
      .catch(e => res.status(500).json({error: 'Cannot find projects ' + e}));
}