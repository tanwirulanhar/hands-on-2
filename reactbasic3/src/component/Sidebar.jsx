const Sidebar = ({toggleSidebar}) => {
    return (
        <div>
        <button onClick={toggleSidebar}>x</button>
        <p>Home</p>
        <p>Contact</p>
        <p>Profile</p>
      </div>
    );
};

export default Sidebar;