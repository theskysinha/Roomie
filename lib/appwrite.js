import { Account, Client, Avatars, Databases, ID, Query, Storage } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform:"com.dev.roomie",
    projectId: "66dbe88300204b16d641",
    databaseId: "66dbea370014ba2fdc3b",
    userCollectionId: "66dbea5c002cdbd970db",
    roommateCollectionId: "66dbead500027a50a5cb",
    propertyCollectionId: "66dbeadc0037b3c33e56",
    storageId: "66dbed57001c4c1a4037"
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

export const createUser = async (email, password, name) => {
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        )

        if(!newAccount) throw new Error("Account not created");

        const avatarUrl = avatars.getInitials(name);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                name,
                avatarUrl
            }
        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function getAccount() {
    try {
      const currentAccount = await account.get();
  
      return currentAccount;
    } catch (error) {
      throw new Error(error);
    }
  }
  
  // Get Current User
  export async function getCurrentUser() {
    try {
      const currentAccount = await getAccount();
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }