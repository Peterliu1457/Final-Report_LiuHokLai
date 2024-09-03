
import Logo from '../assets/logo.png'
function HeaderBar() {
    return (
        <div className={'w-full'}>
            <div className={'mt-10'}>
                <img src={Logo} className={'w-60'} alt={'Logo'}/>
            </div>
        </div>
    )
}
export default HeaderBar;