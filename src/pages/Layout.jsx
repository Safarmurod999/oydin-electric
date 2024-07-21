import { useEffect } from 'react';
import { Footer, Header } from '../components/index'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Header />
            <main className='pt-[120px] sm:pt-[150px] md:pt-[170px] lg:pt-[194px] bg-[#FAFAFA]'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout   