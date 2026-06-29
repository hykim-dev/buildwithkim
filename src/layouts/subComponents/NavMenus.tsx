import menuData from '@/data/menuData';
import Link from 'next/link';

const NavMenus = () => {
  return (
    <ul>
      {menuData.map((item, index) => (
        <li
          key={index}
          className={`is-active ${item.subItems ? 'has-dropdown' : ''} ${item.static ? 'p-static' : ''}`}
        >
          {/* Main menu */}
          <Link href={item.href}>
            <span className="explore-text" data-text={item.title}>
              {item.title}
            </span>
          </Link>

          {/* Sub menu */}
          {item.subItems && (
            <ul className="tp-submenu submenu">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.href}>{subItem.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;
