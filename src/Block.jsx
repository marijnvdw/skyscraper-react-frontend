import {Link} from "react-router";

function Block({block, onDelete}) {
    return (
        <article key={block._id} className="p-4 bg-cyan-100 border-2 shadow-xl shadow-blue-200 rounded-2xl flex-1 max-w-xs ">
            <section>
                <h2 className="text-2xl">{block.title}</h2>
                <p>{block.description}</p>
                <p>{block.city}</p>
                <p>{block._id}</p>
                <div>
                    <Link to={`/skyscraper/${block._id}`} className="italic p-4 font-bold">Details</Link>
                    <Link to={`/skyscraper/edit/${block._id}`} className="italic p-4 font-bold">Edit</Link>
                </div>
                <button
                    onClick={() => onDelete(block._id)}
                    className="mt-4 p-2 bg-red-500 text-white rounded-xl"
                >
                    Delete
                </button>
            </section>
        </article>
    );
}

export default Block;
