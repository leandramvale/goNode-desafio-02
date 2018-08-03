const { Item, Project } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const { projectId } = req.params;

      await Item.create({
        ...req.body, ProjectId: projectId,
      });

      req.flash('success', 'Seção criada com sucesso!');

      return res.redirect(`/app/projects/${projectId}`);
    } catch (err) {
      return next(err);
    }
  },

  async show(req, res, next) {
    try {
      const { projectId, id } = req.params;

      const project = await Project.findById(projectId);

      const itens = await Item.findAll({
        where: { ProjectId: projectId },
      });

      const item = await Item.findById(id);

      return res.render('projects/show', {
        project,
        itens,
        userName: req.session.user.name,
        activeItem: item,
      });
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const { projectId, id } = req.params;

      const item = await Item.findById(id);

      await item.update(req.body);

      req.flash('success', 'Seção atualizada com sucesso!');

      return res.redirect(`/app/projects/${projectId}/itens/${item.id}`);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      const { projectId, id } = req.params;

      await Item.destroy({ where: { id } });

      req.flash('success', 'Seção excluída com sucesso!');

      return res.redirect(`/app/projects/${projectId}`);
    } catch (err) {
      return next(err);
    }
  },

};
