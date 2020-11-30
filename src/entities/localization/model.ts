import { IService } from '../services/model';

export interface Ilocalization {
  id: number,
  name: string,
  description: string
}

export interface ILocalizationService {
  id: number,
  localization_id: number,
  service_id: number,
  localization: Ilocalization,
  service: IService
}