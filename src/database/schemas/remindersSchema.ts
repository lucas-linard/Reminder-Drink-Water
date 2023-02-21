export const remindersSchema = {
    name: 'reminders',
    properties: {
        _id: 'string',
        time: 'string',
        days: 'array',
        isOn: 'bool',
    },
    
    primaryKey: "_id",
}