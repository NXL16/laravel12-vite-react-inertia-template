import MainLayout from './layouts/MainLayout';

export default function Welcome({ appNameFromPHP }) {
    return (
        <MainLayout>
            <div className="card">
                <h1>{appNameFromPHP}</h1>
                <p>Welcome to My Bank.</p>
                <a href="/login">Login</a> . <a href="/register">Register</a>
            </div>
        </MainLayout>
    );
}