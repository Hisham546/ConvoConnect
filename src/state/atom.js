import { atom } from "recoil";



export const username = atom({
  key: "name",
  default: '',

});
export const number = atom({
 key:'number',
 default:'',

});

export const rawID = atom({
key: 'rawContactId',
default:'',

})