
export const Task = ({TitleTask, descriptionTask}) => {
    return (
        <li>
            <div className="flex justify-between items-center bg-amber-100 p-2 rounded">
                <div>
                    <input
                    className="w-6 h-6 border-amber-500"
                    type="checkbox"
                    />
                    <h2 className="font-bold">{TitleTask}</h2>
                    <p className="font-bold">{descriptionTask}</p>
                </div>
                <button className="bg-red-400 text-black px-2 py-1 rounded hover:bg-red-700 cursor-pointer transition duration-100">
                    Delete
                </button>
            </div>
        </li>
    )
}