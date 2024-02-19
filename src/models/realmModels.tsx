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

export class UserId extends Realm.Object<UserId> {

  userid!: string;
  static schema: ObjectSchema = {
    name: 'UserId',
    properties: {
      userId: { type: 'string', indexed: 'full-text' },
    },

  };

}