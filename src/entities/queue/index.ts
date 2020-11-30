import { queueController } from './controller';
import { QueueWebStorage } from './webstorage';

const queue = new queueController();
const queueWebstorage = new QueueWebStorage();

export { queue, queueWebstorage }