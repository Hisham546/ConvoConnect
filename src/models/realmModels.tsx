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

const UserIdSchema = {
  name: 'UserId',
  properties: {
    userId: 'string', // Ensure userId is defined as a string property
  },
};

// Define the UserId class
export class UserId extends Realm.Object {
  static schema: { name: string; properties: { userId: string; }; };
  // Empty class definition
}

// Assign the schema to the UserId class
UserId.schema = UserIdSchema;