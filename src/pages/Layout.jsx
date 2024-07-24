import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Footer, Header } from '../components/index'

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Header />
            <main className='pt-[120px] sm:pt-[150px] md:pt-[170px] lg:pt-[194px] bg-[#FAFAFA]'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout   