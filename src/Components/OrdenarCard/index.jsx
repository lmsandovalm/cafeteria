const OrdenarCard = props => {
    const { id, nombre, photo, precio, handleDelete } = props 

    return(
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={photo} alt={nombre} />
                </figure>
                    <p className="text-sm font-light">{ nombre }</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text/;g font-medium">{ precio }</p>
                <div className="flex justify-center items-center bg-amber-700 rounded-full w-6 h-6 m-1 p-1 text-black" onClick={()=>handleDelete(id)}> x </div>
            </div>
        </div>
    )
}

export default OrdenarCard