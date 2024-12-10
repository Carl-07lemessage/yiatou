import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

export default function RootLayout({ children }) {
  return (
 
      <section>
        <div className="flex overflow-y-hidden">
          <div className="md:w-1/5 hidden relative lg:block overflow-y-hidden ">
            <Sidebar />
          </div>

          
          <div className="flex flex-col w-4/5 lg:overflow-y-auto">
          <Nav />
            {children}
          </div>
        </div>
      </section>

  );
}
