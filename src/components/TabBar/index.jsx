import TabBarItem from "../TabBarItem";

export default function TabBar() {
  return (
    <nav className="w-full h-[100px] bg-black py-6 px-16 border-t-4 border-primary shadow-tabbar md:hidden">
      <ul className="w-full flex justify-between items-center ">
        <TabBarItem
          title="Home"
          path="/"
          svg="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
        <TabBarItem
          title="Nuevo video"
          path="/new-video"
          svg="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </ul>
    </nav>
  );
}
