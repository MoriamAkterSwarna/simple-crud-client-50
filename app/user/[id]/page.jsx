import UpdateCard from '@/app/components/UpdateCard';
import { getSingleUser } from '@/app/lib/data';


const SingleUser = async({params}) => {
    const {id} = await params
    const user = await getSingleUser(id)

    return (
        <section className="min-h-[calc(100vh-120px)] bg-gradient-to-br from-slate-100 via-white to-emerald-50 px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur sm:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">User Profile</p>
                        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{user.name}</h1>
                    </div>
                    <span className="rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                        {user?.role || 'No role'}
                    </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</p>
                        <p className="mt-2 break-all text-base font-semibold text-slate-800">{user.email}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Role</p>
                        <p className="mt-2 text-base font-semibold capitalize text-slate-800">{user.role || 'Not assigned'}</p>
                    </div>
                </div>
            </div>


            <UpdateCard user={user} id={id} />
        </section>
    );
};

export default SingleUser;