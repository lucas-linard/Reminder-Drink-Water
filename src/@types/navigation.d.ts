export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            gender: undefined;
            weight: {
                 gender: 'male' | 'female';
            };
            wakeUpTime: {
                gender: 'male' | 'female';
                weight: number;
                unit: 'kg' | 'lbs';
            };
            sleepTime: {
                gender: 'male' | 'female';
                weight: number;
                unit: 'kg' | 'lbs';
                wakeUpTime: string;
                sleepTime: string;
            };
        }
    }
}