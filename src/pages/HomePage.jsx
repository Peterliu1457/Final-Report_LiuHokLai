import HeaderBar from "../components/HeaderBar.jsx";
import NavBar from "../components/NavBar.jsx";
import NavigationTrack from "../components/NavigationTrack.jsx";
import ForumIndex from "../components/ForumIndex.jsx";
import ProgrammList1 from "../components/ProgrammList1.jsx";
import ProgrammList2 from "../components/ProgrammList2.jsx";
import HotToggle from "../components/HotToggle.jsx";
import {useState} from "react";
import HotTopics from "../components/HotTopics.jsx";


function HomePage() {
    const [topic, setTopic] = useState('topic');
    return (
        <div className={'w-full'}>
            <HeaderBar/>
            <NavBar/>
            <NavigationTrack />
            <div className={'grid grid-cols-2 gap-5 mt-2 w-full'}>
                <div className={'col-span-1'}>
                    <ForumIndex/>
                </div>
                <div className={'col-span-1'}>
                    <ProgrammList1/>
                </div>
            </div>
            <div className={'grid grid-cols-10 gap-5 w-full mt-4 pb-10'}>
                <div className={'col-span-1'}>
                    <HotToggle onChange={setTopic}/>
                </div>
                <div className={'col-span-9'}>
                    {topic === 'topic' ? <HotTopics /> : <ProgrammList2/>}
                </div>
            </div>
        </div>
    );
}

export default HomePage;