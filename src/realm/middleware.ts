import Realm from 'realm';
import {User} from './';

export const openRealm = async (path: string, schema: any) => {
  Realm.open({
    path: path,
    schema: schema,
  });
};
