import User from "./user.model";

export default {
  async create(req, res) {
    try {
      const foundUser = await User.findOne({ email: req.body.email });
      if (foundUser) {
        return res.status(500).send({ error: "User with email already exit" });
      }
      const createdUser = await User.create(req.body);
      return res.send(createdUser);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async get(req, res) {
    try {
      const getUsers = await User.find(req.body);
      return res.send(getUsers);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async delete(req, res) {
    try {
      const deleteUser = await User.deleteOne({ _id: req.query.id });
      return res.send(deleteUser);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async update(req, res) {
    const query = { _id: req.body._id };
    const newValue = {
      name: req.body.name,
      email: req.body.email,
    };
    try {
      const updatedUser = await User.updateOne(query, newValue);
      return res.send(updatedUser);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
