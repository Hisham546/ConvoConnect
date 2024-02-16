// useRealmCustomHook.js
import { useRealm } from '@realm/react';

const useRealmCustomHook = () => {
  const realm = useRealm();
  return realm;
};

export default useRealmCustomHook;
