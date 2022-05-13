import { useLottie } from 'lottie-react'
import Vault from './../../assets/vault.json'
import './Animation.css'

const WinAnimation = () => {
    const comboCheckOptions = {
        animationData: Vault,
        loop: false,
        autoplay: true,
        initialSegment:[1,75]
    };

    const { View } = useLottie(comboCheckOptions);

    return View;
};
 
export default WinAnimation;