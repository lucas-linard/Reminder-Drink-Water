export const remindersSchema = {
    name: 'reminders',
    properties: {
      _id: 'string',
      time: 'string',
      day: 'bool{}',
      isOn: 'bool',
    },
    primaryKey: '_id',
  };
  