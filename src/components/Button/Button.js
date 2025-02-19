import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ title, primary, outline, small, large, leftIcon, rightIcon, className, onClick }) {
    const classes = cx('wrapper-btn', className, { outline, primary, small, large });
    return (
        <div className={cx(classes)} onClick={onClick}>
            {leftIcon && <div className={cx('icon')}> {leftIcon}</div>}
            {title && <div className={cx('title')}>{title}</div>}
            {rightIcon && <div className={cx('icon')}> {rightIcon}</div>}
        </div>
    );
}

export default Button;
