import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RatingSelected.module.scss';
import classNames from 'classnames/bind';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import thanksimg from '../../assets/images/thanks_submit.png';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function RatingSelected({ data, onNext, onBack, current, title, finish, rating, setRating }) {
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <p>Đánh giá dịch vụ</p>
            </header>
            <div className={cx('content')}>
                {data && data[0].nameService ? (
                    <>
                        <div className={cx('title')}>{data[0].nameService}</div>
                        <div className={cx('name-staff')}>CSKH: {data[0].nameStaff}</div>
                    </>
                ) : (
                    <div className={cx('title')}>{title}</div>
                )}

                {current < 3 && (
                    <div className={cx('rating')}>
                        {[1, 2, 3, 4, 5].map((index) => {
                            return (
                                <div
                                    className={cx('star', index > (hover || rating) && 'no-select')}
                                    key={index}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(0)}
                                    onClick={() => {
                                        setRating(index);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faStar} className={cx('star-index')} />
                                </div>
                            );
                        })}
                    </div>
                )}
                {current === 3 && (
                    <textarea
                        className={cx('input')}
                        placeholder="Nhập góp ý"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={4} // Số dòng hiển thị ban đầu
                    />
                )}
                <div className={cx('button')}>
                    {!data && current < 4 ? (
                        <>
                            {isMobile ? (
                                <Button
                                    outline
                                    leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
                                    onClick={() => onBack(feedback)}
                                />
                            ) : (
                                <Button outline title={'Quay lại'} onClick={() => onBack(feedback)} />
                            )}
                            {current === 3 ? (
                                isMobile ? (
                                    <Button title="Hoàn thành" large={true} primary onClick={() => onNext(feedback)} />
                                ) : (
                                    <Button title="Hoàn thành" primary onClick={() => onNext(feedback)} />
                                )
                            ) : isMobile ? (
                                <Button title="Tiếp tục" large primary onClick={onNext} />
                            ) : (
                                <Button title="Tiếp tục" primary onClick={onNext} />
                            )}
                        </>
                    ) : (
                        !finish &&
                        (isMobile ? (
                            <Button title="Tiếp tục" large primary onClick={onNext} />
                        ) : (
                            <Button title="Tiếp tục" primary onClick={onNext} />
                        ))
                    )}
                </div>
                {finish && <img src={thanksimg} className={cx('img-thanks')} alt="xin cam on" />}
            </div>
        </div>
    );
}

export default RatingSelected;
