import { BSON, ObjectSchema } from "realm";
import Realm from 'realm'

// Define your object model
export class Profile extends Realm.Object<Profile> {
  _id!: BSON.ObjectId;
  username!: string;
  static schema: ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      username: { type: 'string', indexed: 'full-text' },
    },
    primaryKey: '_id',
  };
  
}