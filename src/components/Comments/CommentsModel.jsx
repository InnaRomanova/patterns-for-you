
import "./Comments";
import { register } from "swiper/element/bundle";
import smileAvatar from "../../images/smile-avatar.png";
import CommentSend from "../Elements/CommentSend";
import CommentAnswer from "../Elements/CommentAnswer";
import { Link } from 'react-router-dom';

register();

function CommentsModel() {
    // const swiperElRef = useRef(null);
    // const [slidesPerView, setSlidesPerView] = useState(4)

    // const handlePrev = useCallback(() => {
    //     if (!swiperElRef.current) return;
    //     swiperElRef.current.swiper.slidePrev();
    // }, []);

    // const handleNext = useCallback(() => {
    //     if (!swiperElRef.current) return;
    //     swiperElRef.current.swiper.slideNext();
    // }, []);

    // useEffect(() => {
    //     function handleResize() {
    //         const display = window.innerWidth;
    //         if (display > 1920) {
    //             setSlidesPerView(4);
    //         } else if (display > 1400) {
    //             setSlidesPerView(3);
    //         } else if (display > 879) {
    //             setSlidesPerView(2);
    //         } else if (display < 879) {
    //             setSlidesPerView(1);
    //         }
    //     }
    //     window.addEventListener("resize", handleResize);
    //     handleResize();
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);




    return (
        <>
            <section className="details__container">

                <button className="com-model__name" id="section-comment">Добавить комментарий</button>

                <form className="com-model__form">
                    <img className="com-model__avatar" alt="аватарка" src={smileAvatar} />

                    <textarea className="com-model__comment" defaultValue="Добавить комментарий ..." id="comment" name="story" rows="5" cols="33">
                    </textarea>
                    <CommentSend />
                </form>


                <div className="com-model__add-personal">
                    <img src={smileAvatar} alt="аватарка" className="com-model__avatar" />
                    <div className="com-model__add-container">
                        <div className="com-model__add-info">
                            <h4 className="com-model__add-name">Алексеева Елена</h4>
                            <p className="com-model__add-text">Очень хорошее платье. Ношу с удовольствием.
                                Сшито качественно!</p>
                        </div>
                        <div className="com-model__add-answer">
                            <CommentAnswer /><p className="com-model__answer">Ответить</p>
                        </div>
                    </div>
                </div>

                <div className="com-model__add-personal com-model__add-personal_active">
                    <img src={smileAvatar} alt="аватарка" className="com-model__avatar" />
                    <div className="com-model__add-container">
                        <div className="com-model__add-info">
                            <h4 className="com-model__add-name">Алексеева Елена</h4>
                            <p className="com-model__add-text">Очень хорошее платье.
                                Разрабатывать сайт на реакте не так-то просто!
                                Сшито качественно!</p>
                        </div>
                        <div className="com-model__add-answer">
                            <CommentAnswer /><p className="com-model__answer">Ответить</p>
                        </div>
                    </div>
                </div>
                <div className=" com-model__block">
                    <a href="#section-comment" className="com-model__button">
                        <button className="com-model__button-add">
                            Добавить комментарий
                        </button>
                    </a>

                </div>

            </section>
        </>
    )
}

export default CommentsModel;
