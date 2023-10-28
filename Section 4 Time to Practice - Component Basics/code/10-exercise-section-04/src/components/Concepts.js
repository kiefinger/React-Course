import Concept from "./Concept";
import ListElement from "./UI/ListElement";
function Concepts (props) {

    return (
        <ul id="concepts">
            <ListElement className="concept">
                <Concept concept={props.concepts[0]}/>
            </ListElement>
            <ListElement className="concept">
                <Concept concept={props.concepts[1]}/>
            </ListElement>
            <ListElement className="concept">
                <Concept concept={props.concepts[2]}/>
            </ListElement>
        </ul>

    );
}
export default Concepts;
