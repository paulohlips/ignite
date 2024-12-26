import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/paulohlips.png" />
                    <div className={styles.authorInfo}>
                        <strong>Paulo Mendes</strong>
                        <span>Fullstack Developer</span>
                    </div>
                </div>

                <time title="May 11 08:13h" dateTime="2025-05-11 08:13:00">One hour ago</time>
            </header>

            <div className={styles.content}>
                <p>Title 👋</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero voluptate magni autem deleniti adipisci eligendi molestias aut, qui cupiditate ratione veritatis perferendis id explicabo laborum veniam sint omnis eos? 🚀</p>
                <p><a href="">pauloiscoding.com</a></p>
                <p>
                    <a href="">#newproject</a>{' '}
                    <a href="">#coding</a>{' '}
                    <a href="">#react</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Give a feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}