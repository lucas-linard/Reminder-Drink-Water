import Realm from 'realm';

import { hydrationSchema } from './schemas/hydrationSchema';
import  { userSchema } from './schemas/userSchema';
import { remindersSchema } from './schemas/remindersSchema';
export const getRealm = async () => await Realm.open({
  path: "reminder",
  schema: [hydrationSchema, userSchema, remindersSchema],
  deleteRealmIfMigrationNeeded: true
});