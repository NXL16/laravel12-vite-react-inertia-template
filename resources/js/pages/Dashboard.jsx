import { Link, usePage } from '@inertiajs/react';
import MainLayout from './layouts/MainLayout';

export default function Dashboard() {
    const { props } = usePage();
    const user = props.auth?.user;

    return (
        <MainLayout>
            <div className="card">
                <h2>Dashboard</h2>
                <p>
                    Greetjing, <strong>{user?.name}</strong>
                </p>
                <ul>
                    <li>
                        <Link href="/account">Manage bank account</Link>
                    </li>
                    <li>
                        <Link href="/account">Transfer</Link>
                    </li>
                    <li>
                        <Link href="/account">Transaction statement</Link>
                    </li>
                </ul>

                {props.flash?.success && <p className="success">{props.flash.success}</p>}
            </div>
        </MainLayout>
    );
}
