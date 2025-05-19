import React, { useState } from 'react';
import Header from '../Header/Header';
import RatingSelected from '../RatingSelected/RatingSelected';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';

const cx = classNames.bind(styles);

const urlParams = new URLSearchParams(window.location.search);
const billId = urlParams.get('billId');
console.log('xxx:', billId);

const BACKEND_API = 'http://localhost:5000';

const DATA = [
    {
        spaceService: 'Không gian phục vụ',
        feedbackService: 'Góp ý chúng tôi',
        thanks: 'Cảm ơn bạn đã đánh giá dịch vụ !',
    },
];
let rating_service = '';
let rating_space = '';
let rateBack = {
    rate1: '',
    rate2: '',
    rate3: '',
};
function Layout() {
    const [current, setCurrent] = useState(1);
    const [rating, setRating] = useState(5);
    const [subFeedback, setsubFeedback] = useState('');
    const [sorry, setSorry] = useState(true);

    function handleNext() {
        if (current === 1) {
            rating_service = rating;
            rateBack.rate1 = rating;
        } else if (current === 2) {
            rating_space = rating;
            rateBack.rate2 = rating;
        }
        setCurrent(current + 1);
        setRating(5);
    }

    async function handleSubmit(value) {
        let store = {
            billId: Number(billId),
            serviceRating: rating_service,
            spaceRating: rating_space,
            comment: value || subFeedback,
        };
        console.log('store:', store);
        handleSorry();
        setCurrent(current + 1);
        try {
            await axios.post(`${BACKEND_API}/feedbacks/create`, store);
            setCurrent(current + 1);
        } catch (error) {
            alert('Gửi đánh giá thất bại. Vui lòng thử lại!');
        }
    }

    function handleBack(value) {
        if (current === 3) {
            setRating(rateBack.rate2);
            setsubFeedback(value);
        } else if (current === 2) {
            setRating(rateBack.rate1);
        }
        setCurrent(current - 1);
    }
    function handleSorry() {
        if (rating_service >= 4 && rating_space >= 4) {
            setSorry(false);
        } else {
            setSorry(true);
        }
    }
    const titleFinish =
        rating_service >= 4 && rating_space >= 4 ? (
            'Cảm ơn bạn đã đánh giá dịch vụ!'
        ) : (
            <>
                Thành thật xin lỗi quý khách <br /> về trải nghiệm chưa hoàn hảo !
            </>
        );
    return (
        <div className={cx('wrapper')}>
            <Header contact="19001006" />
            <div className={cx('container')}>
                {current === 1 && (
                    <RatingSelected
                        data={DATA}
                        onNext={handleNext}
                        current={current}
                        rating={rating}
                        setRating={setRating}
                    />
                )}
                {current === 2 && (
                    <RatingSelected
                        title="Không gian phục vụ"
                        onNext={handleNext}
                        current={current}
                        onBack={handleBack}
                        rating={rating}
                        setRating={setRating}
                    />
                )}
                {current === 3 && (
                    <RatingSelected
                        title="Góp ý chúng tôi"
                        onNext={handleSubmit}
                        current={current}
                        onBack={handleBack}
                    />
                )}
                {current === 4 && (
                    <RatingSelected
                        title={titleFinish}
                        current={current}
                        finish={true}
                        rating={rating}
                        setRating={setRating}
                        sorry={sorry}
                    />
                )}
            </div>
        </div>
    );
}

export default Layout;
