const { Project, Item } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      await Project.create({
        ...req.body, UserId: req.session.user.id,
      });

      req.flash('success', 'Projeto criado com sucesso!');

      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const project = await Project.findById(req.params.id);

      const itens = await Item.findAll({
        where: { ProjectId: req.params.id },
      });

      return res.render('projects/show', {
        project,
        itens,
        userName: req.session.user.name,
        activeItem: itens[0],
      });
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const { projectId } = req.params;

      await Item.destroy({ where: { projectId } });

      await Project.destroy({ where: { id: projectId } });

      req.flash('success', 'Projeto excluído com sucesso!');

      return res.redirect('/app/dashboard');
    } catch (err) {
      return next(err);
    }
  },

};
