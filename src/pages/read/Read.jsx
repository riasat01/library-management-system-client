import { useState } from "react";
import useAxiosSecure from "../../custom-hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserAuth } from "../../auth-provider/AuthProvider";
import { useEffect } from "react";
import swal from "sweetalert";


const Read = () => {
    const axiosSecure = useAxiosSecure();
    const params = useParams();
    const [book, setBook] = useState({});
    const { user } = useContext(UserAuth);
    useEffect(() => {
        axiosSecure.get(`/book/${params.id}?email=${user?.email}`)
            .then(res => {
                // console.log(res);
                setBook(res?.data);
            })
            .catch(error => swal('Error', `${error.message}`, 'error'));
    }, [])
    // console.log(isZero);
    const { name, author } = book;
    return (
        <div className="mx-4 md:mx-12 lg:mx-24 mt-24 mb-12 space-y-4">
            <h1 className="text-3xl font-bold">{name}</h1>
            <em>-{author}</em>
            <p>Embark on a literary journey through our Novel category, where every book is a doorway to a world of imagination and emotions. Whether you seek heartwarming tales of love, epic adventures, or poignant coming-of-age stories, our curated collection of novels promises to captivate and transport you to realms crafted by the finest wordsmiths.</p>
            <p>Get ready for a pulse-pounding experience in our Thriller category, where suspense, mystery, and unexpected twists await at every turn. From psychological thrillers that mess with your mind to edge-of-your-seat crime dramas, our collection will keep you on the edge, ensuring sleepless nights as you unravel the intricacies of each gripping narrative.</p>
            <p>Step back in time with our History category, where the pages come alive with tales of triumph, tragedy, and the fascinating events that shaped our world. Immerse yourself in the richness of historical narratives, biographies, and accounts that bring the past to vivid life, offering a glimpse into the tapestry of human history.</p>
            <p>Indulge in the complexities of the human experience with our Drama category. From timeless classics to modern masterpieces, our selection explores the depth of human emotion, relationships, and societal dynamics. These compelling narratives will resonate with the essence of life, inviting you to ponder, empathize, and appreciate the intricacies of the human condition.</p>
            <p>Embark on a journey to the future and beyond in our Sci-Fi category. From dystopian landscapes to intergalactic adventures, our collection of science fiction promises mind-bending concepts, innovative technologies, and thought-provoking explorations of the unknown. Brace yourself for a ride through speculative realms that challenge the boundaries of reality and push the limits of imagination.</p>
        </div>
    );
};

export default Read;