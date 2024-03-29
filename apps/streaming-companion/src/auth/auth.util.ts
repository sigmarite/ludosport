import {JWT} from 'google-auth-library';
import {GoogleAPIScopes} from './scopes';
import {credentials} from '../keys/ludosport-414716-57a26dce2da3';

export class AuthUtil {

  public static createServiceAccount(): JWT {
    const SCOPES = [
      GoogleAPIScopes.Sheets,
    ];

    return new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: SCOPES,
    });
  }
}
