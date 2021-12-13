import Task from "./task.model";

export default {
  async create(req, res) {
    try {
      const createTask = await Task.create(req.body);
      return res.send(createTask);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async get(req, res) {
    let query = {};
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    try {
      const getTasks = await Task.find(query, ["title", "userId"]).populate({
        path: "userId",
        select: ["name"],
      });
      return res.send(getTasks);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
  async delete(req, res) {
    try {
      const deletedTask = await Task.deleteOne({ _id: req.query.id });
      return res.send(deletedTask);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async update(req, res) {
    const query = { _id: req.body._id };
    const newValue = {
      title: req.body.title,
      userId: req.body.userId,
    };
    try {
      const updatedTask = await Task.updateOne(query, newValue);
      return res.send(updatedTask);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
