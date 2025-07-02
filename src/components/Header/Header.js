import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import imglogo from '../../assets/images/logo-navo.png';

const cx = classNames.bind(styles);

function Header({ contact }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('info')}>
                <h2 className={cx('title')}>Dịch vụ CSKH Navo</h2>
                <p className={cx('contact')}>Liên hệ: {contact}</p>
            </div>
            <div className={cx('logo')}>
                <img className={cx('img-logo')} src={imglogo} alt="logo" />
            </div>
        </header>
    );
}

export default Header;
