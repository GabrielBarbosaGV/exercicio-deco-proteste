export type CountiesPersistenceStateStatus = 'waiting' | 'creating' | 'done' | 'failed';

export interface CountiesPersistenceState {
    status: CountiesPersistenceStateStatus
};

export const initialCountiesPersistenceState: CountiesPersistenceState = {
    status: 'waiting'
};