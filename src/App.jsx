

import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import './i18n';
import CategoryPage from "./pages/CategoryPage.jsx";
import WatchHistory from "./pages/WatchHistory.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import NavigationTrack from "./components/NavigationTrack.jsx";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
function App() {

  return (
      <div className={'container mx-auto'}>
          <Header/>
          <Routes>
              <Route path={''} index element={<HomePage />}/>
              <Route path={'category/:category'} element={<CategoryPage />}/>
              <Route path={'watch-history'} element={<WatchHistory />}/>
              <Route path={'help-center'} element={<HelpCenter />}/>
          </Routes>
      </div>
  )
}

export default App
