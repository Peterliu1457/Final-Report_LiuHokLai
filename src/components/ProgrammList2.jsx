import React from 'react';
import Image1 from '../assets/images/list2/1.jpg';
import Image2 from '../assets/images/list2/2.jpg';
import Image3 from '../assets/images/list2/3.jpg';
import Image4 from '../assets/images/list2/4.jpg';
import Image5 from '../assets/images/list2/5.jpg';
import Image6 from '../assets/images/list2/6.jpg';

function ProgrammList2() {
    const programs = [
        {
            title: "2.5次元的誘惑05-",
            image: Image1
        },
        {
            title: "(7月新番)亦葉",
            image: Image2
        },
        {
            title: "1不時輕聲地以偽語遮羞的鄰座",
            image: Image3
        },
        {
            title: "異世界悠閒紀行",
            image: Image4
        },
        {
            title: "殺手寓言-18",
            image: Image5
        },
        {
            title: "神之塔 第二季-05另一隊",
            image: Image6
        }
    ];

    return (
        <div className="grid grid-cols-3 gap-6">
            {programs.map((program, index) => (
                <div key={index} className="col-span-1 grid grid-cols-2 gap-2">
                    <img src={program.image} alt={program.title} className="col-span-1 h-auto mb-2" />
                    <p className="flex items-center col-span-1">{`[繁]${program.title}`}</p>
                </div>
            ))}
        </div>
    );
}

export default ProgrammList2;
