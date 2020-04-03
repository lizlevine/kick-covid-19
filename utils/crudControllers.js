module.exports = model => ({
    getAll: async (req, res) => {
      const result = await model.findAll();
      res.json(result);
    },
    create: async (req, res) => {
      const data = req.body;
      const result = await model.create(data);
      res.json(result);
    },
    getOne: async (req, res) => {
      const result = await model.findAll({ where: { id: req.params.id } });
      res.json(result);
    },
    updateOne: async (req, res) => {
      const data = req.body;
      const result = await model.update(data, { where: { id: req.params.id } });
      res.json(result);
    },
    deleteOne: async (req, res) => {
      const result = await model.destroy({ where: { id: req.params.id } });
      res.json(result);
    }
  });