
const StudentDetails = ({student}) => {
    if (!student) return <p className="text-center text-gray-500">No student data available.</p>;

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{student.fullName}</h2>
        <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">{student.department}</span>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Student Image */}
        <div className="flex-shrink-0">
          <img
            src={student.image || "https://via.placeholder.com/150"}
            alt={student.fullName}
            className="w-40 h-40 rounded-xl object-cover border border-gray-200"
          />
        </div>

        {/* Details */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Roll:</p>
            <p>{student.roll}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Registration:</p>
            <p>{student.registration}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Session:</p>
            <p>{student.session}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Shift:</p>
            <p>{student.shift}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Semester:</p>
            <p>{student.semester}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Email:</p>
            <p>{student.email}</p>
          </div>
          <div className="">
            <p className="font-semibold">Phone Number:</p>
            <p>{student.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Status:</p>
            <p>{student.isDeleted ? "Deleted" : "Active"}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-right text-gray-500 text-sm">
        {student.createdAt && (
          <p>Created At: {new Date(student.createdAt).toLocaleDateString()}</p>
        )}
        {student.updatedAt && (
          <p>Last Updated: {new Date(student.updatedAt).toLocaleDateString()}</p>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;