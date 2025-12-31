import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import React, { useState } from 'react';

const PaymentApproval = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allPayment = [], refetch } = useQuery({
        queryKey: ["payment"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment`)
            return res.data
        },
        staleTime: 0,
    });



    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [deptFilter, setDeptFilter] = useState("all");
    const [semFilter, setSemFilter] = useState("all");
    const [shiftFilter, setShiftFilter] = useState("all");
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const perPage = 10;

    
    const pendingPayment = allPayment?.data?.filter(s => s.status === "pending") || [];

    const filteredPayment = pendingPayment.filter((s) => {
        const q = search.toLowerCase();
        const matchSearch =
            s.fullName?.toLowerCase().includes(q) || s.roll?.toString().includes(q);
        const matchDept = deptFilter === "all" || s.department === deptFilter;
        const matchSem = semFilter === "all" || s.semester === semFilter;
        const matchShift = shiftFilter === "all" || s.shift === shiftFilter;

        return matchSearch && matchDept && matchSem && matchShift;
    });

    const totalPages = Math.ceil(filteredPayment.length / perPage);
    const paginatedData = filteredPayment.slice((page - 1) * perPage, page * perPage);


    console.log(paginatedData)

    const handleApprove = async (roll) => {

        try {
            // patch request
            const res = await axiosSecure.patch(`/user/change-status/${roll}`, { status: "approved" });

            if (res.data?.success) {
                refetch();
                alert("Student approved successfully");
                setIsModalOpen(false);
            }
        } catch (error) {
            console.error("Approve error:", error.response?.data || error.message);
            alert("Student approval failed!");
        }
    };


    const handleDelete = async (roll) => {

        console.log(roll)

        try {
            // patch request
            const res = await axiosSecure.delete(`/student/${roll}`);

            if (res.data?.success) {
                refetch();
                alert("Student delete successfully");
                setIsModalOpen(false);
            }
        } catch (error) {
            console.error("Delete error:", error.response?.data || error.message);
            alert("Student Delete failed!");
        }
    };




    return (
        <div className="space-y-6">

            <div className="space-y-4">
                <h1 className="text-xl font-semibold">Pending Payement List</h1>

                <div className="flex flex-col md:flex-row md:justify-between items-center sticky top-0 bg-white z-10 gap-4 p-4 border-b border-gray-300">
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        <select value={deptFilter} onChange={(e) => { setDeptFilter(e.target.value); setPage(1); }} className="px-3 py-2 text-sm border border-slate-400 rounded-md">
                            <option value="all">All Dept</option>
                            {[...new Set(pendingPayment.map(s => s.department))].map(d => <option key={d} value={d}>{d}</option>)}
                        </select>

                        <select value={semFilter} onChange={(e) => { setSemFilter(e.target.value); setPage(1); }} className="px-3 py-2 text-sm border border-slate-400 rounded-md">
                            <option value="all">All Semester</option>
                            {[...new Set(pendingPayment.map(s => s.semester))].map(s => <option key={s} value={s}>{s}</option>)}
                        </select>

                        <select value={shiftFilter} onChange={(e) => { setShiftFilter(e.target.value); setPage(1); }} className="px-3 py-2 text-sm border border-slate-400 rounded-md">
                            <option value="all">All Shift</option>
                            {[...new Set(pendingPayment.map(s => s.shift))].map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input type="text" placeholder="Search student..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} className="w-full pl-9 pr-3 py-2 text-sm border border-slate-400 rounded-md focus:ring-2 focus:ring-slate-300" />
                    </div>
                </div>

                <div className="bg-white border border-slate-400 rounded-lg shadow-sm overflow-x-auto">
                    <table className="w-full text-sm border-collapse min-w-[600px] md:min-w-full">
                        <thead className="bg-slate-200 border-b border-slate-400">
                            <tr className="text-slate-800">
                                {[ "Roll", "Amount", "Txn ID", "Number", "Semester", "Date", "Status", "Action"].map(h => (
                                    <th key={h} className={`px-4 py-3 font-semibold ${h === "Action" ? "text-center" : "text-left"} border-r last:border-r-0 border-slate-400`}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedData.map((s, i) => (
                                <tr key={i} className="border-b hover:bg-slate-50">
                                    <td className="px-4 py-3 border-r">{s.roll}</td>
                                    <td className="px-4 py-3 border-r">{s.amount}</td>
                                    <td className="px-4 py-3 border-r">{s.txnId}</td>
                                    <td className="px-4 py-3 border-r">{s.number}</td>
                                    <td className="px-4 py-3 border-r">{s.semester}</td>
                                    <td className="px-4 py-3 border-r">{new Date(s.createdAt).toLocaleDateString()}</td>
                                    <td className="px-4 py-3 border-r">{s.status}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex justify-center gap-2">
                                            <button className="flex px-3 py-1 items-center justify-center rounded-md border border-slate-400 cursor-pointer hover:bg-slate-100"
                                                onClick={() => { setSelectedPayment(s); setIsModalOpen(true); }}>
                                                Approve
                                            </button>


                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {paginatedData.length === 0 && <tr><td colSpan={7} className="text-center py-4 text-gray-500">No student found</td></tr>}
                        </tbody>
                    </table>

                    <div className="flex justify-end items-center gap-2 p-3 border-t">
                        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 border border-slate-400 rounded disabled:opacity-50"><ChevronLeft size={16} /></button>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 border rounded ${page === i + 1 ? "bg-slate-700 text-white border-slate-700" : "border-slate-400"}`}>
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-2 border border-slate-400 rounded disabled:opacity-50"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg max-h-[34rem] overflow-y-auto p-6 relative w-full max-w-3xl">
                        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setIsModalOpen(false)}><X /></button>
                        <StudentApprovalDetails student={""} handleApprove={handleApprove} handleDelete={handleDelete} />
                    </div>
                </div>
            )}

        </div>
    );
};

export default PaymentApproval;