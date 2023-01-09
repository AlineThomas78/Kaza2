import './index.css';

function Tags ({tag}) {
    return (
        <div className='tags' >
            {tag.map((tags, index) => (
                <div  className='tag' key={index}><p>{tags}</p></div>
              ))}
        </div>
    )
}

export default Tags;