import {Link} from "react-router";

function Block({block, onDelete}) {

    const handleFavorite = async (e) => {
        try {
            const response = await fetch(`http://145.24.223.35:8005/skyscraper/favo/${block._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Favorite status updated!');
                console.log(e.target.parentNode.parentNode.parentNode)
                const parentElement = e.target.parentNode.parentNode.parentNode; // Get the grandparent element

                if (e.target.textContent === 'Favorite') {
                    e.target.textContent = 'Unfavorite'
                    parentElement.classList.remove('bg-cyan-100');
                    parentElement.classList.add('bg-cyan-200');
                } else {
                    e.target.textContent = 'Favorite'
                    parentElement.classList.remove('bg-cyan-200');
                    parentElement.classList.add('bg-cyan-100');
                }
            } else {
                console.error('Failed to update favorite status');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    let classValue = ""
    if (block.favorite === 'true') {
        classValue = "p-4 bg-cyan-200 border-2 shadow-xl shadow-blue-200 rounded-2xl flex-1 max-w-xs"
    } else {
        classValue = "p-4 bg-cyan-100 border-2 shadow-xl shadow-blue-200 rounded-2xl flex-1 max-w-xs"
    }

    return (
        <article className={`${classValue} flex flex-col justify-between`}>
            <section className="flex flex-col gap-3 flex-grow">
                <h2 className="text-2xl font-bold text-gray-800">{block.title}</h2>
                <p className="text-gray-600">{block.description.substring(0, 100)}...</p>
                <p className="text-sm text-gray-500">City: {block.city}</p>
                <p className="text-sm text-gray-500">Category: {block.category}</p>
            </section>


            <div className="mt-auto">
                <div className="flex items-center justify-between gap-4 mt-2">
                    <Link
                        to={`/skyscraper/${block._id}`}
                        className="flex-1 py-2 px-4 bg-blue-400 text-white text-center rounded-lg hover:bg-blue-500 transition duration-300"
                    >
                        Details
                    </Link>
                    <button
                        onClick={handleFavorite}
                        className="flex-3 py-2 px-4 bg-yellow-300 text-white rounded-lg hover:bg-yellow-400 transition duration-300"
                    >
                        {block.favorite === 'true' ? 'Unfavorite' : 'Favorite'}
                    </button>
                </div>

                <div className="flex items-center justify-between gap-4 mt-2">
                    <button
                        onClick={() => onDelete(block._id)}
                        className="flex-1 py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-red-500 transition duration-300"
                    >
                        Delete
                    </button>
                    <Link
                        to={`/skyscraper/edit/${block._id}`}
                        className="flex-1 py-2 px-4 bg-green-400 text-white text-center rounded-lg hover:bg-green-500 transition duration-300"
                    >
                        Edit
                    </Link>
                </div>
            </div>
        </article>


    );
}

export default Block;
