import * as LocalAuthentication from 'expo-local-authentication'
import useFetch from "../hooks/useFetch";
import {useState} from "react";
import * as Location from "expo-location";

export default async function onAuthenticate() {

    const {success} = await LocalAuthentication.authenticateAsync();
}