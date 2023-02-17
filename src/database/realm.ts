import Realm from 'realm';

import { hydrationSchema } from './schemas/hydrationSchema';

export const getRealm = async () => await Realm.open({
  path: "reminder",
  schema: [hydrationSchema],
  deleteRealmIfMigrationNeeded: true
});