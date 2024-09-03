const all = [
    {
        "type": "小說",
        "title": "[長月達平]Re：從零開始的異世界生"
    },
    {
        "type": "時事",
        "title": "[30年來首調漲！ 台鹽鹽品9月起變"
    },
    {
        "type": "有趣",
        "title": "[第一次吃冰！貓貓舌頭一碰到「秒"
    },
    {
        "type": "有趣",
        "title": "[法拉利.麥拉倫爭奇鬥艷 信義區「"
    },
    {
        "type": "手機",
        "title": "免費開放世界生存遊戲推薦Once Hum"
    },
    {
        "type": "時事",
        "title": "[曹興誠轟「國會被親共走狗把持」 "
    },
    {
        "type": "軟件",
        "title": "WinXvideo AI v3.5.0 超清/流暢/穩"
    },
    {
        "type": "有趣",
        "title": "[烏日「紙片屋」走入歷史 建商收購"
    },
    {
        "type": "無損",
        "title": "中島美嘉 - ROOTS ~Piano & Voice~"
    },
    {
        "type": "無損",
        "title": "milet - milet live at 日本武道館"
    },
    {
        "type": "有趣",
        "title": "制服撞衫「統一肉燥麵」 學生：還"
    },
    {
        "type": "華語",
        "title": "王傑 - 60首精選歌曲 (正式發行版)"
    },
    {
        "type": "時事",
        "title": "[彰化海龍風電工安意外 17人送醫「"
    },
    {
        "type": "華語",
        "title": "群星 - KKBOX華語新歌榜 Top50 (20"
    },
    {
        "type": "有趣",
        "title": "[和男友吵架到一半 狗狗幸災樂禍咬"
    },
    {
        "type": "時事",
        "title": "黃國昌也連連看！爆併肩挺服貿張晉"
    },
    {
        "type": "無損",
        "title": "V.A. - 亂馬1/2 開幕&閉幕的主題歌"
    },
    {
        "type": "日韓",
        "title": "NMIXX(엔믹스) – Fe3O4: STICK OU"
    },
    {
        "type": "日韓",
        "title": "문별 (玟星) - Starlit of Twinkle"
    },
    {
        "type": "時事",
        "title": "[賴清德：我們不再反攻大陸 也不願"
    },
    {
        "type": "遊戲",
        "title": "[PC] 大俠立志傳：碧血丹心+DLC 倩"
    },
    {
        "type": "無損",
        "title": "Daniel Powter - Best Of Me [日本"
    },
    {
        "type": "無損",
        "title": "MISIA - Ascension (533.7MB＠FLAC"
    },
    {
        "type": "華語",
        "title": "動力火車 - 結伴 (豪華版) (正式發"
    }
];


const TopicColumn = ({topics = []}) => {
    return (
        <div className={'p-2 border border-gray-200'}>
            {topics.map(topic => {
                return (
                    <div key={topic.title} className={'flex items-center'}>
                        <div className={'w-[2px] h-[2px] bg-orange-400 me-2'} style={{
                            borderRadius: '50%'
                        }}></div>
                        <p className={'text-blue-400 me-2'}>
                            [{topic.type}]
                        </p>
                        <p className={'me-2'}>
                            {topic.title}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

function HotTopics() {



    return (
        <div className={'p-3 border border-gray-200 grid grid-cols-3 gap-6'}>
            <div>
                <TopicColumn topics={all.slice(0, 8)}/>
            </div>
            <div>
                <TopicColumn topics={all.slice(8, 16)}/>
            </div>
            <div>
                <TopicColumn topics={all.slice(16, 24)}/>
            </div>

        </div>
    )
}

export default HotTopics;