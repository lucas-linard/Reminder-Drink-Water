export const userSchema = {
    name: 'User',
    properties: {
        _id: 'string',
        gender: 'string',
        weight: 'int',
        unit: 'string',
        wakeUpTime: 'string',
        sleepTime: 'string',
    },
    
    primaryKey: "_id",
}