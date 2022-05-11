//icons
import { Icon } from '@iconify/react';

const SlideMenu = ({ setShowMenu }) => {

    const handleClick = () => {
        setShowMenu(false)
    }

    return (
        <div className="slideMenu">
            <Icon onClick={handleClick} className='closeIcon' icon="fe:close" />
            <ul className="slideMenuList">
                <li className="slideMenuLink">Home</li>
                <li className="slideMenuLink">About</li>
                <li className="slideMenuLink">Projects</li>
                <li className="slideMenuLink">Contact</li>
            </ul>
            <h3 className='slideMenuTitle'>sunnyside &#9728;</h3>
        </div>
    );
}

export default SlideMenu;