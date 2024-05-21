import { Router } from "express";
// import userController from "../controllers/users.js";
 import administrationController from "../controllers/administration.js";

const administrationRouter = Router();
administrationRouter.get("/admins",administrationController.getAll);
administrationRouter.get("/admin/:id",administrationController.getOneById);
administrationRouter.post("/admin",administrationController.create);
administrationRouter.put("/admin/:id",administrationController.update);
administrationRouter.delete("/admin/:id",administrationController.delete);

export default administrationRouter;