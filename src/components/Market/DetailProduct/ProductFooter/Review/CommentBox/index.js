import "./style.scss"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const CommentBox = ({ listComment }) => {
    const formatDate = (date) => {
        const dateParts = date.split(' ')[0].split('-');
        const timePart = date.split(' ')[1];
        return `${timePart} ${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }
    return (
        <section >
            <div className="containerpy-5 text-body" >
                <div className="row d-flex ">
                    <div className="col-md-11 col-lg-9 col-xl-7">
                        {listComment.map((comment, index) => (
                            <div key={index} className="d-flex flex-start mb-4">
                                <div style={{ width: '60px', height: "60px", marginRight: "10px" }}>
                                    <img className="rounded-circle shadow-1-strong me-3"
                                        src={comment[2]} alt="avatar" />
                                </div>
                                <div className="card w-100">
                                    <div className="card-body p-4">
                                        <div className="">
                                            <h5>{comment[1]}</h5>
                                            <p className="small">
                                                {formatDate(comment[0].created_at)}
                                            </p>
                                            <p>
                                                {comment[0].content}
                                            </p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <a href="#!" className="link-muted me-2">
                                                        <ThumbUpAltIcon />
                                                        {comment[0].likes}</a>
                                                    <a href="#!" className="link-muted">
                                                        <ThumbDownAltIcon />
                                                        {comment[0].dislikes}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommentBox