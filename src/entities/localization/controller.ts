import instanceAPI from '../../service/api';
import { Ilocalization, ILocalizationService } from './model';

export class localizationController {
  async list () {
    try {
      const localizations = await instanceAPI.get<Array<Ilocalization>>('localization');
      return localizations.data;
    } catch (error) {
      throw new Error("Não foi possível buscar todas as filiais!");
    }
  }

  async listServices (idLocalization: number) {
    try {
      const list = await instanceAPI
        .get<Array<ILocalizationService>>(`localization_service/${idLocalization}`);

      return list.data;

    } catch (error) {
      throw new Error("Não foi possível buscar os serviços oferecidos pela filial cujo ID = " + idLocalization);
    }
  }
}