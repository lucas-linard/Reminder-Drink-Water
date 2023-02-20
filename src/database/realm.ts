import Realm from 'realm';

import { hydrationSchema } from './schemas/hydrationSchema';
import  { userSchema } from './schemas/UserSchema';
export const getRealm = async () => await Realm.open({
  path: "reminder",
  schema: [hydrationSchema, userSchema],
  deleteRealmIfMigrationNeeded: true
});