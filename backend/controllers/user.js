import ShopEaseUser from "../models/user.model.js";

export const getUserById = async (req, res) => {
  try {
    const user = await ShopEaseUser.findById(req.params.userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: `user not found`, error });
  }
};
