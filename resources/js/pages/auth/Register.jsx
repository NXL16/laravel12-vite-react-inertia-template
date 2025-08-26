import { useForm } from '@inertiajs/react';
import MainLayout from '../layouts/MainLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.prevenDefault();
        post('/register', { onFinish: () => reset('password', 'password_confirmation') });
    };

    return (
        <MainLayout>
            <div className="card" style={{ maxWidth: 480, margin: '0 auto' }}>
                <h2>Register</h2>
                <form onSubmit={submit} noValidate>
                    <div className="from-row" style={{ flexDirection: 'column' }}>
                        <label htmlFor="name">Fullname</label>
                        <input id="name" className="input" value={data.name} onChange={(e) => setData('name', e.target.value)} autoComplete="name" />
                        {errors.name && <div className="error">{errors.name}</div>}
                    </div>

                    <div className="from-row" style={{ flexDirection: 'column' }}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="input"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            autoComplete="email"
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>

                    <div className="from-row" style={{ flexDirection: 'column' }}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="input"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            autoComplete="new-password"
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>

                    <div className="from-row" style={{ flexDirection: 'column' }}>
                        <label htmlFor="password_confirmation">Config your password</label>
                        <input
                            id="password_confirmation"
                            type="password"
                            className="input"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            autoComplete="new-password"
                        />
                    </div>

                    <button type="submit" className="btn" disabled={processing}>
                        {processing ? 'Creating...' : 'Create'}
                    </button>
                </form>
                <p style={{ marginTop: 12 }}>
                    Already have account? <Link href="/login">Login</Link>
                </p>
            </div>
        </MainLayout>
    );
}
