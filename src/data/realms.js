import { BSON } from 'realm';
import { Profile } from '../models/realmModels';
import useRealmCustomHook from '../operations/customHook';

export const realmStoreUserData = () => {
    const storeUserSession = (number) => { 
        const realm = useRealmCustomHook(); // Using the custom hook here within the functional component
        console.log('.....realm fun called')
        realm.write(() => {
            realm.create(Profile, {
                _id: new BSON.ObjectId(),
                username: number,
            });
        });
    };
    return storeUserSession
}
