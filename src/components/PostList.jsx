import React from 'react';
import Image1 from '../assets/images/game/1.jpg';
import Image2 from '../assets/images/game/2.jpg';
import Image3 from '../assets/images/game/3.jpg';
import Image4 from '../assets/images/game/4.jpg';
import Image5 from '../assets/images/game/5.jpg';
import Image6 from '../assets/images/game/6.jpg';


function PostList() {
    const posts = [
        {
            icon: '📁',
            title: 'pc game桌布(1920x1080)(5P)',
            type: '电脑桌布分享',
            author: 'cheeseeric',
            replies: 1,
            views: 531,
            lastReplyAuthor: 'bsa01690',
            lastReplyDate: '2017-11-12',
            lastReplyTime: '06:01 PM',
            image: Image1
        },
        {
            icon: '🖼️',
            title: 'PC遊戲玩家如果玩過三款微軟遊戲 更有機會獲得PC Game Pass試玩 (2P)',
            type: '電玩單機遊戲情報討論',
            author: 'Eddeblue',
            replies: 4,
            views: 5534,
            lastReplyAuthor: 'd40119',
            lastReplyDate: '2022-4-28',
            lastReplyTime: '11:56 AM',
            image: Image2
        },
        {
            icon: '📁',
            title: '現在還有人玩pc game嗎?...',
            type: '吹水聊天室',
            author: 'cmkuo',
            replies: 588,
            views: 12746,
            lastReplyAuthor: 'peitasi',
            lastReplyDate: '2020-2-20',
            lastReplyTime: '03:34 PM',
            image: Image3
        },
        {
            icon: '🏠',
            title: '《區域檢舉信箱》PC Game 檢舉理處 (1P)',
            type: '電玩單機遊戲情報討論',
            author: 'bsexpb054',
            replies: 224,
            views: 3856797,
            lastReplyAuthor: 'ss777s',
            lastReplyDate: '2016-2-18',
            lastReplyTime: '07:39 PM',
            image: Image4
        },
        {
            icon: '📁',
            title: '銀河英雄傳說5 pc game(1P)',
            type: '二手交易',
            author: 'smallkings',
            replies: 0,
            views: 988,
            lastReplyAuthor: 'smallkings',
            lastReplyDate: '2021-5-9',
            lastReplyTime: '08:16 PM',
            image: Image5
        },
        {
            icon: '📁',
            title: '[討論區扣分規] 請問在【PC GAME 看門狗 Watch Dogs】被懲處?並申訴一下我的評分問題...(1P)',
            type: '新手教學區',
            author: 'smallkings',
            replies: 0,
            views: 896,
            lastReplyAuthor: '四个字符',
            lastReplyDate: '2020-7-27',
            lastReplyTime: '09:54 AM',
            image: Image6
        },
    ];

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border">
                <tbody>
                {posts.map((post, index) => (
                    <tr key={index} className="border-b">
                        <td className="p-2 text-center">{post.icon}</td>
                        <td className={'p-2'}>
                            <img src={post.image} className={'w-20'}/>
                        </td>
                        <td className="p-2">
                            <a href="#" className="text-gray-700 hover:underline">
                                {post.title}
                            </a>
                        </td>
                        <td className="p-2 text-gray-600">{post.type}</td>
                        <td className="p-2">{post.author}</td>
                        <td className="p-2">
                            <div className={'flex flex-col items-center'}>
                                <span className={'text-blue-500 font-bold'}>{post.replies}</span>
                                <span className={'text-sm'}>{post.views}</span>
                            </div>
                        </td>
                        <td className="p-2 flex flex-col items-center">
                            <div className={'flex flex-col items-center h-full pt-2'}>
                                <span>{post.lastReplyAuthor}</span>
                                <p className={'text-gray-400 text-sm'}>
                                    <span>{post.lastReplyDate}</span>
                                    <span>{post.lastReplyTime}</span>
                                </p>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PostList;
