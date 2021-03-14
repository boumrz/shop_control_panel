import { client } from './axios';
import { DeferList as request } from '../constants/urls';
import { ResponseDeferFutureType } from '../types';

class DeferList {
    public async deferList(payload: any): Promise<ResponseDeferFutureType> {
        return client
            .post(
                `http://194.87.94.73:3001${request(payload)}`
            )
            .then((response) => {
                if (response.data) {
                    return response.data;
                }

                return {};
            })
            .catch((err) => {
                throw err.response;
            });
    }
}

export const service: DeferList = new DeferList();
