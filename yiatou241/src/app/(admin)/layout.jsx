import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

export default function RootLayout({ children }) {
  return (
    <section className="h-screen overflow-hidden">
    <div className="flex h-full">
      <div className="overflow-y-hidden md:w-1/5">
        <Sidebar />
      </div>

      <div className="flex overflow-y-auto flex-col md:w-4/5 ">
        <div className="fixed md:w-4/5">
          <Nav />
        </div>
        <div className=" mt-[100px]">{children}</div>
      </div>
    </div>
  </section>
  );
}
