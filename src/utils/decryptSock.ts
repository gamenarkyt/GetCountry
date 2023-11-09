

export const decryptSock = (encryptedString: string) => {
    let decryptedString = ""
    try {
        decryptedString = atob(encryptedString)
        
    } catch (error) {
        console.log('@', error)
    }
    console.log('@', decryptedString);
    
    return decryptedString
}