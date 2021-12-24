const router = require("express-promise-router")();
const userController = require("../controllers/user.controller");

router.post("/users", userController.createUser);

router.get("/users", userController.listAllUsers);

router.get("/users/:id", userController.findUserById);

router.put("/users/:id", userController.updateUserById);

router.delete("/users/:id", userController.deleteUserById);

module.exports = router;
