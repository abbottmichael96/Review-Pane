import { useState } from "react";
import styles from "./Rating.module.css";

export function Rating() {

    const [selectedRating, setSelectedRating] = useState<Number>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    function ratingHandler(rating: number){
        setSelectedRating(rating);
    }

    function formSubmitted(x: React.FormEvent) {
        x.preventDefault();
        setIsSubmitted(true);
    }

    return ( 
        <form onSubmit={formSubmitted} className={styles.panel}>

            <svg className={styles.star} width="17" 
            height="16" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/>
            </svg>

            <h1 className={styles.title}>
                How did we do?
            </h1>

            <p className={styles.bodytext}>
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>

            <div className = {styles.buttongroup}>
                {[1,2,3,4,5].map((rating) =>(
                    <button
                    type="button"
                    onClick={() => ratingHandler(rating)} className={styles.button}>
                        {rating}
                    </button>))}
            </div>

            <button 
                disabled={selectedRating === undefined} className={styles.submit}>
                Submit
            </button>
        </form>)
}