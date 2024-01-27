import { FunctionComponent } from "react";

interface PosterProps {
    id: number;
    title: string;
    overview: string;
    photo: string;
}

const Poster: FunctionComponent<PosterProps> = (props) => {
    return (
        <div className="container" key={props.id}>
            <h2>{props.title}</h2>
            <p>{props.overview}</p>
            <img src={props.photo} alt={props.title} />
        </div>
    );
};

export default Poster;
