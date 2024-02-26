import {GoogleAPIScopes} from './scopes';
import {credentials} from '../keys/ludosport-414716-a04f1ec6d74b';
import {JWT} from 'google-auth-library';

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
