import { Link, usePage } from '@inertiajs/react';

export default function MainLayout({ children }) {
    const { props } = usePage();
    const user = props.auth?.user;
    const flash = props.flash;

    return (
        <div className="container">
            <nav className="nav">
                <Link href={'/'}>MyBank</Link>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '12' }}>
                    {user ? (
                        <>
                            <Link href={'/dashboard'}>Dashboard</Link>
                            <Link href={'/logout'} method="post" as="button" className="btn">
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href={'/login'}>Login</Link>
                            <Link style={{ marginLeft: '16px' }} href={'/register'}>
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </nav>
            {/* Flash banner toan cuc */}
            {flash?.success && <div className="success">{flash.success}</div>}
            {flash?.error && <div className="error">{flash.error}</div>}
            {children}
        </div>
    );
}
