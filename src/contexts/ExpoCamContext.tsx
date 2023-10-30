import {createContext, Dispatch, SetStateAction, useRef, useState} from "react";
import * as ImagePicker from "expo-image-picker";
import {Camera} from "expo-camera";
import {Alert} from "react-native";
import {ContextProviderProps} from "../@types/context-provider-props";

interface ContextType {
    searchPicGallery: () => void;
    getPermissionsCam: () => void;
    camera: any;
    takePicture: () => void;
    selectActions: () => void;
    stateCamera: boolean;
    setStateCamera: Dispatch<SetStateAction<boolean>>;
    setImage: Dispatch<SetStateAction<string>>;
    image: string;
}

export const expoCamContext = createContext<ContextType>({} as any);

export const ExpoCamContextProvider = ({children}: ContextProviderProps) => {
    const [stateCamera, setStateCamera] = useState(false);
    const [image, setImage] = useState<SetStateAction<any>>("");
    const camera: any = useRef();

    async function searchPicGallery() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]!.uri);
            // uploadImageDB();
        }
    }

    async function getPermissionsCam() {
        await Camera.requestCameraPermissionsAsync().then(({granted}) => {
            if (granted) {
                setStateCamera(true);
            }
        });
    }

    function selectActions() {
        Alert.alert("", "What do you want?", [
            {
                text: 'Search photo in gallery',
                onPress: () => searchPicGallery(),
            },
            {
                text: 'Take photo',
                onPress: async () => getPermissionsCam(),
            },
        ])
    }

    function takePicture() {
        camera.current.takePictureAsync().then((data: any) => {
            setImage(data.uri);
            setStateCamera(false)
        });
    }

    return (
        <expoCamContext.Provider
            value={{
                camera,
                image,
                setImage,
                setStateCamera,
                stateCamera,
                searchPicGallery,
                getPermissionsCam,
                selectActions,
                takePicture
            }}>
            {children}
        </expoCamContext.Provider>
    )
}
