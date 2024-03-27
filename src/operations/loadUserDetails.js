import database from '@react-native-firebase/database';



export const LoadUserData = async (phoneNumber) => {
    try {
        // Query the database to find the entry with the matching phoneNumber
        const ref = database().ref("userdetails");
        const snapshot = await ref.orderByChild("phoneNumber").equalTo(phoneNumber).once("value");
        
        let userData = {};
        snapshot.forEach(childSnapshot => {
            const { username, image } = childSnapshot.val();
            userData = { username, image };
        });

        return userData;
    } catch (error) {
        console.error("Error fetching user data from database:", error);
        return null; // Or handle the error as needed
    }
}
