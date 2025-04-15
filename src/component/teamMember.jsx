
function TeamMemberComponent({ src, name, designation, area }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 w-64 m-4 text-center">
        <img
          src={src}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{designation}</p>
        <p className="text-gray-400 text-sm">{area}</p>
      </div>
    );
  }
  
  export default TeamMemberComponent;