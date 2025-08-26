import { useForm } from '@inertiajs/react';
import MainLayout from '../layouts/MainLayout';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.prevenDefault();
        post('/login', { onFinish: () => reset('password') });
    };

    return (
        <MainLayout>
            <div className="card" style={{ maxWidth: 420, margin: '0 auto' }}>
                <h2>Login</h2>
                <form onSubmit={submit}>
                    <div className="from-row" style={{ flexDirection: 'column' }}>
                        <label>Email</label>
                        <input
                            type="email"
                            className="input"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            autoComplete="email"
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>

                    <div className="from-row" style={{ flexDirection: 'column' }}>
                        <label>Password</label>
                        <input type="password" className="input" value={data.password} onChange={(e) => setData('password', e.target.value)} />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0 16px' }}>
                        <input type="checkbox" id="remember" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} />
                        <label htmlFor="remember" style={{ margin: 0 }}>
                            Remember Login
                        </label>
                    </div>

                    <button type="submit" className="btn" disabled={processing}>
                        {processing ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p style={{ marginTop: 12 }}>
                    Don&apos;t have account? <Link href="/register">Register</Link>
                </p>
            </div>
        </MainLayout>
    );
}
