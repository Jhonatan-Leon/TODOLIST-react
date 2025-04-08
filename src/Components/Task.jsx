
export const Task = ({id, Title, description}) => {
    return (
        <li id={id}>
            <div className="flex justify-between items-center bg-amber-100 p-2 rounded">
                <div>
                    <input
                    className="w-6 h-6 border-amber-500"
                    type="checkbox"
                    />
                    <h2 className="font-bold">{Title}</h2>
                    <p className="font-bold">{description}</p>
                </div>
                <button className="bg-red-400 text-black px-2 py-1 rounded hover:bg-red-700 cursor-pointer transition duration-100" value={id}>
                    Delete
                </button>
            </div>
        </li>
    )
}