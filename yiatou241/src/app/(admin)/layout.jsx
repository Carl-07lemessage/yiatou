import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {
  return (
 
      <section>
        <div className="flex overflow-y-hidden">
          <div className="md:w-1/5 hidden relative lg:block overflow-y-hidden ">
            <Sidebar />
          </div>

          {/* <AdminNavbar data={data} /> */}
          <div className="flex flex-col w-4/5 lg:overflow-y-auto">
            {children}
          </div>
        </div>
      </section>

  );
}
