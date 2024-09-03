import React from 'react';
import Image1 from '../assets/images/list1/1.jpg';
import Image2 from '../assets/images/list1/2.jpg';
import Image3 from '../assets/images/list1/3.jpg';
import Image4 from '../assets/images/list1/4.jpg';
import Image5 from '../assets/images/list1/5.jpg';
import Image6 from '../assets/images/list1/6.jpg';


function ProgrammList1() {
    const programs = [
        {
            "title": "(7月新番)[繁]好想告訴你 第三季01-",
            "image": Image1
        },
        {
            "title": "[繁]為何我的世界被遺忘了？ 04-",
            "image": Image2
        },
        {
            "title": "[繁]我要【招架】一切～反誤解的世界最強想成為冒險家～ 06-",
            "image": Image3
        },
        {
            "title": "[繁]從路人角色開始的探索英雄譚07-",
            "image": Image4
        },
        {
            "title": "✡ 劍來・01~03 (首播合集)・2024.8月新番 - HD-1080P ✡",
            "image": Image5
        },
        {
            "title": "✡ 斗破苍穹 年番／鬥破蒼穹 年番・108 ( SVIP超前版 )・2022.7月新番 - HD-1080P ✡~1",
            "image": Image6
        }
    ];

    return (
        <div className="grid grid-cols-3 gap-4">
            {programs.map((program, index) => (
                <div key={index} className="relative  p-2">
                    <img src={program.image} alt={program.title} className="w-full h-auto" />
                    <p className="text-center overflow-hidden text-ellipsis whitespace-nowrap mt-1">{`[繁]${program.title}`}</p>
                    {program.badge && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-1 rounded">
              {program.badge}
            </span>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProgrammList1;
