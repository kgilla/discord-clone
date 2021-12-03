import { MdAccessibleForward } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  const initItemState = [0, 1, 2, 3, 4].map((item) => {
    return { key: item, isActive: false };
  });

  const [items, setItems] = useState(initItemState);

  const handleClick = (item) => {
    setItems(
      items.map((i) =>
        i.key === item.key ? { ...i, isActive: !i.isActive } : i
      )
    );
  };

  return (
    <div className="fixed top-0 left-0 h-screen m-0 flex">
      <div className="h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        {items.map((item) => {
          return (
            <SidebarIcon
              key={item.key}
              onClick={() => handleClick(item)}
              icon={<MdAccessibleForward size="28" />}
              isActive={item.isActive}
            />
          );
        })}
      </div>
      <SideDrawer />
    </div>
  );
};

const SidebarIcon = ({ onClick, icon, text = "tooltip", isActive }) => {
  return (
    <button className="sidebar-icon group" onClick={onClick}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </button>
  );
};

const SideDrawer = () => {
  return (
    <div className="h-screen w-64 m-0 flex flex-col bg-gray-700 text-white shadow-lg">
      <div className="h-12 flex items-center justify-center border-b border-gray-900 shadow-md">
        <input
          className="w-60 bg-gray-900 p-1 rounded"
          placeholder="Find or start a conversation"
        />
      </div>
      <div className="flex flex-col items-center">
        <SideDrawerItem title="Friends" />
        <SideDrawerItem title="Nitro" />
        <SideDrawerItem title="Raid-Helper" />
        <SideDrawerItem title="padwee" />
        <SideDrawerItem
          title="Buds"
          subtitle="Playing World of Warcraft Cl..."
        />
      </div>
    </div>
  );
};

const SideDrawerItem = ({ image, title, subtitle }) => {
  return (
    <div className="w-60 my-1 p-1 flex rounded group hover:bg-gray-600 hover:cursor-pointer">
      <figure className="w-10 h-10 rounded-3xl bg-gray-900 mr-2">
        <image src={image}></image>
      </figure>
      <section className="flex flex-col justify-center text-gray-300 group-hover:text-gray-200">
        <h3>{title}</h3>
        <p className="text-xs">{subtitle}</p>
      </section>
    </div>
  );
};

export default Sidebar;
