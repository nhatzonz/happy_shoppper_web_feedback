import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import RatingSelected from '../RatingSelected/RatingSelected';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';

import axios from 'axios';

const cx = classNames.bind(styles);

// Lấy dữ liệu từ URL
const urlParams = new URLSearchParams(window.location.search);
const nameClient = urlParams.get('customerName') || 'Khách hàng';
const serviceID = urlParams.get('serviceID') || 'Dịch vụ';
const nameService = urlParams.get('serviceName') || 'Dịch vụ';
const staffcode = urlParams.get('staffCode') || 'Nhân viên';
const nameStaff = urlParams.get('staffName') || 'Khách hàng';
console.log(serviceID, staffcode);

// Tạo DATA mới
const DATA = [
    {
        nameService,
        nameStaff,
        nameClient,
        serviceID,
        staffcode,
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

    function handleSubmit(value) {
        let store = {
            service_id: serviceID,
            staff_code: staffcode,
            customer_name: nameClient,
            rating_service: rating_service,
            rating_space: rating_space,
            comment: value || subFeedback,
        };

        console.log('Data to submit:', store);

        axios
            .post('http://ichi.io.vn/api/feedback', store)
            .then((response) => {
                console.log('Feedback submitted:', response.data);
                setCurrent(current + 1);
            })
            .catch((error) => {
                console.error('Error submitting feedback:', error.response?.data || error.message);
                alert('Gửi đánh giá thất bại. Vui lòng thử lại!');
            });
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
                        title="Cảm ơn bạn đã đánh giá dịch vụ !"
                        current={current}
                        finish={true}
                        rating={rating}
                        setRating={setRating}
                    />
                )}
            </div>
        </div>
    );
}

export default Layout;
