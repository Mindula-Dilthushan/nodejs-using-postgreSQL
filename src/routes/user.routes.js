const router = require("express-promise-router")();
const userController = require("../controllers/user.controller");

// create user router
router.post("/users", userController.createUser);

// list of all user router
router.get("/users", userController.listAllUsers);

// list of user by Id router
router.get("/users/:id", userController.findUserById);

// update the user router
router.put("/users/:id", userController.updateUserById);

// delete user router
router.delete("/users/:id", userController.deleteUserById);

module.exports = router;
