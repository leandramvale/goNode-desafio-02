const { Project, Item } = require('../models');

module.exports = {
  async index(req, res, next) {
    try {
      const projects = await Project.findAll({
        include: [Item],
        where: {
          UserId: req.session.user.id,
        },
      });

      return res.render('dashboard/index', { projects, userName: req.session.user.name });
    } catch (err) {
      return next(err);
    }
  },
};
