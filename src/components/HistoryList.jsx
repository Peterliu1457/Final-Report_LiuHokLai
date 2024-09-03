import React from 'react';
import Image1 from '../assets/images/list1/1.jpg';
import Image2 from '../assets/images/list1/2.jpg';
import Image3 from '../assets/images/list1/3.jpg';
import Image4 from '../assets/images/list1/4.jpg';
import Image5 from '../assets/images/list1/5.jpg';
import Image6 from '../assets/images/list1/6.jpg';
import {useTranslation} from "react-i18next";
function HistoryList() {
    const posts = [
        {
            image: Image1,
            title: '[綜合討論] 幻想三國誌系列中，你最喜愛的女性腳色是？(9P)',
            author: 'Sam',
            replies: 4,
            views: 570100,
            lastReplyAuthor: 'Sam',
            lastReplyDate: '2024-07-14',
            lastReplyTime: '04:56 PM'
        },
        {
            image: Image2,
            title: '[最終幻想7：重生] 4K電影剪輯版 - 全2集',
            author: 'kklan55422',
            replies: 237,
            views: 690400,
            lastReplyAuthor: 'atoutou007',
            lastReplyDate: '2024-07-10',
            lastReplyTime: '04:56 PM'
        },
        {
            image: Image3,
            title: '如果有半價便當爭奪戰，你會去參加嗎?(3P)',
            author: '天晴',
            replies: 4,
            views: 570100,
            lastReplyAuthor: 'hhh333',
            lastReplyDate: '2024-02-13',
            lastReplyTime: '04:56 PM'
        },
        {
            image: Image4,
            title: '魔彈之王與戰姬人氣大投票(7P)',
            author: '晴mk',
            replies: 5,
            views: 570100,
            lastReplyAuthor: 'asdadad659',
            lastReplyDate: '2024-02-13',
            lastReplyTime: '04:56 PM'
        },
        {
            image: Image5,
            title: '買小說還是網上看?',
            author: 'HAHA',
            replies: 4,
            views: 570100,
            lastReplyAuthor: 'aaaa22',
            lastReplyDate: '2024-02-13',
            lastReplyTime: '04:56 PM'
        },
    ];

    const {t} = useTranslation();
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead >
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xl text-gray-800 font-bold uppercase tracking-wider">

                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xl font-bold text-gray-800 uppercase tracking-wider">
                        {t('title')}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xl font-bold text-gray-800 uppercase tracking-wider">
                        {t('author')}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xl font-bold text-gray-800 uppercase tracking-wider">
                        {t('viewCount')}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xl font-bold text-gray-800 uppercase tracking-wider">
                        {t('lastUpdated')}
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {posts.map((post, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <img src={post.image} alt={post.title} className="w-24 h-24 object-cover" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <a href="#" className="text-lg font-semibold text-black hover:underline">
                                {post.title}
                            </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {post.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {post.views}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {post.lastReplyDate} {post.lastReplyTime}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default HistoryList;
