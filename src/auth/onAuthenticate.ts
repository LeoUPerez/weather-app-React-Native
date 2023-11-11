import * as LocalAuthentication from 'expo-local-authentication'

export default async function onAuthenticate() {
    const {success} = await LocalAuthentication.authenticateAsync();
}