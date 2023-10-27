import {Image, ImageStyle, StyleProp} from 'react-native';

// import PngImages from '../../assets/images';
import clearImageSrc from '../../assets/images/clear.png';
import CloudsImageSrc from '../../assets/images/clouds.png';
import DrizzleImageSrc from '../../assets/images/drizzle.png';
import MistImageSrc from '../../assets/images/mist.png';
import RainImageSrc from '../../assets/images/rain.png';
import SnowImageSrc from '../../assets/images/snow.png';

export function ImageClear({style}: { style: StyleProp<ImageStyle> }) {
    return (
        <Image
            style={style}
            source={clearImageSrc}
        />)
}

export function ImageClouds({style}: { style: StyleProp<ImageStyle> }) {
    return (
        <Image
            style={style}
            source={CloudsImageSrc}
        />)
}

export function ImageDrizzle({style}: { style: StyleProp<ImageStyle> }) {
    return (
        <Image
            style={style}
            source={DrizzleImageSrc}
        />)
}

export function ImageMist({style}: { style: StyleProp<ImageStyle> }) {
    return (
        <Image
            style={style}
            source={MistImageSrc}
        />)
}

export function ImageRain({style}: { style: StyleProp<ImageStyle> }) {
    return (
        <Image
            style={style}
            source={RainImageSrc}
        />)
}

export function ImageSnow({style}: { style: StyleProp<ImageStyle> }) {
    return (
        <Image
            style={style}
            source={SnowImageSrc}
        />)
}
