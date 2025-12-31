

const StudentApprovalDetails = ({ student, handleApprove, handleDelete }) => {
    if (!student) return null;


    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 rounded-lg">

            {/* Header */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <h2 className="text-2xl sm:text-xl font-semibold w-full sm:w-auto">
                    Student Application Details
                </h2>
            </div>

            <p className={`text-sm text-center pb-5 font-medium ${student.user?.status === "pending" ? "text-orange-600" : "text-green-600"}`}>
                Status: {student.user?.status}
            </p>

            {/* Student Image + Basic Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <img
                    src={student.image}
                    alt="student"
                    className="w-28 h-28 rounded-lg mx-auto border object-cover"
                />

            </div>

            {/* Application Info */}
            <div className="mb-6">
                <h3 className="text-lg sm:text-sm font-semibold text-gray-500 mb-3">Application Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { label: "Full Name", value: student.fullName },
                        { label: "Roll", value: student.roll },
                        { label: "Department", value: student.department },
                        { label: "Shift", value: student.shift },
                        { label: "Semester", value: student.semester },
                        { label: "Email", value: student.email },
                        { label: "Phone Number", value: student.number },
                        { label: "Applied Date", value: new Date(student.createdAt).toLocaleDateString() },
                    ].map((item) => (
                        <div key={item.label}>
                            <label className="block text-sm font-medium text-gray-700">{item.label}</label>
                            <input
                                type="text"
                                value={item.value || ""}
                                className="border border-gray-300 rounded px-3 py-2 w-full bg-gray-50"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-4 pt-5">
                <button onClick={() => handleDelete(student?.roll)} className="px-4 py-2 bg-red-600 text-white cursor-pointer rounded hover:bg-red-600" > Delete</button>
                <button onClick={() => handleApprove(student?.roll)} className="px-4 py-2 bg-green-600 text-white cursor-pointer rounded hover:bg-green-600" >Approve</button>
            </div>
        </div>
    );
};


export default StudentApprovalDetails;