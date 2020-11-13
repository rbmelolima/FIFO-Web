import { UserController } from './controller';
import { UserWebStorage } from './webstorage';

const userWebstorage = new UserWebStorage();
const userController = new UserController();

export { userController, userWebstorage }