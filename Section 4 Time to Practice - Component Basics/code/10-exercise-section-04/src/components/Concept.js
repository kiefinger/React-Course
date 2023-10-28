function Concept (props ) {
    return (
       <div className="concept">
          <img src={props.concept.image} alt="TODO: TITLE" />
          <h2>{props.concept.title}</h2>
          <p>{props.concept.description}</p>
       </div>
    );
}

export default Concept;