import { IUser } from '../user/model';

export interface IQueue {
  id: number,
  localization_id: number,
  service_id: number,
  users_id: number,
  entry_queue: string,
  entry_service: any,
  status: string
}

export interface IStatusQueue {
  id: number,
  localization_id: number,
  service_id: number,
  users_id: number,
  entry_queue: string,
  entry_service: any,
  status: string
  position: number,
  user: IUser,
}
