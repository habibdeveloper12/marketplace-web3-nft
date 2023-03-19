import jwtDecode from 'jwt-decode';
import { FETCH_USER_INFO } from '../graphql/queries';
import EnochClient from './EnochClient';
import ToastService from './ToastService';

class MarketplaceService {
  decodeToken(token: string | null) {
    if (token) {
      return jwtDecode(token);
    }
  }

  async getUserInfo(id: string) {
    try {
      const res = await EnochClient.query(FETCH_USER_INFO, {
        variables: { id: id }
      });
      return res;
    } catch (err) {
      ToastService.error(err.message);
    }
  }
}

export default new MarketplaceService();
