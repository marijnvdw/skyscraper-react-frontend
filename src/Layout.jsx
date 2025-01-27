import {Link, Outlet} from "react-router";

function Layout() {
    return(
        <div className="mx-auto max-w-screen-xl">
            <header>
                <nav className="flex gap-4">
                    <Link to={'/'} className="italic p-4 font-bold0">Home</Link>
                    <Link to={'/skyscraper'} className="italic p-4 font-bold0">skyscraperList</Link>
                    <Link to={'/skyscraper/create'} className="italic p-4 font-bold0">skyscraperCreateForm</Link>
                    {/*<Link to={'/skyscraper/:id'} className="italic p-4 font-bold0">skyscraperDetail</Link>*/}
                    {/*<Link to={'/skyscraper/edit/:id'} className="italic p-4 font-bold0">skyscraperEdit</Link>*/}
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </div>
    )
}
export default Layout;