import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/paulohlips.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Paulo Mendes</strong>
                            <time title="May 11 08:13h" dateTime="2022-05-11 08:13:00">One hour ago</time>
                        </div>
                        <button title="Delete Comment">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Great job, congrats!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}