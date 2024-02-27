import Lottie from 'react-lottie';
import animationData from '../../assets/loading.json';
import s from './Loader.module.css';

export const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
    };

    return (
        <div className={s.loader}>
            <Lottie data-test-id='loader' options={defaultOptions} height={150} width={150} />
        </div>
    );
};
