import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Badge, Button } from "react-bootstrap";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { successToast } from "utilities/toast";

const stylehehe = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};


export default function SendMail({ reportSB, userName, userEmail, message, setMessage }) {
    const form = useRef();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // console.log("reportSB", reportSB);

    // useEffect(() => {
    //     // console.log("form.current: ", form.current);
    //     if (reportSB[7] === 'Đang xử lý') {
    //         setMessage('Hiện tại ý kiến phản ánh của bạn đã được chúng tôi tiếp nhận và đang trong quá trình xử lý xác minh. Nếu bạn có yêu cầu gì hãy liên hệ với chúng tôi qua email này. Xin cảm ơn!')
    //     }
    //     else if (reportSB[7] === 'Từ chối') {
    //         setMessage('Chúng tôi rất tiếc phải thông báo rằng ý kiến phản ánh của bạn đã bị từ chối. Nếu bạn có bất kỳ thắc mắc nào, hãy liên hệ với chúng tôi qua email này. Xin cảm ơn!')
    //     }
    //     else if (reportSB[7] === 'Đã hoàn thành') {
    //         setMessage('Chúng tôi xin thông báo rằng ý kiến phản ánh của bạn đã được xử lý và hoàn thành. Nếu bạn có bất kỳ thắc mắc nào, hãy liên hệ với chúng tôi qua email này. Xin cảm ơn!')
    //     }
    //     sendEmail();
    // }, [reportSB])

    const sendEmail = (e) => {
        // e.preventDefault();
        emailjs
            .sendForm('service_91lbmvf', 'template_l42wy2s', form.current, {
                publicKey: 'RYs5IzAKg3Ee-7913',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    handleClose();
                    successToast("Gửi email thành công");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    // console.log("reportSB", reportSB);
    return (
        <div>
            <div>
                <Button onClick={handleOpen}>
                    <MailIcon />
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <form ref={form} onSubmit={sendEmail}>


                        <label hidden>Name</label>
                        <input hidden type="text" name="user_name" value={userName} />
                        <label hidden>Email</label>
                        <input hidden type="email" name="user_email" value={userEmail} />
                        <label hidden>Message</label>
                        <textarea hidden name="message" value={message} />
                        <input hidden type="submit" value="Send" />

                        <Box sx={stylehehe}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '90ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    required
                                    name="user_name"
                                    id="outlined-required"
                                    label="Gửi đến Khách hàng"
                                    defaultValue={reportSB[4]}
                                    disabled
                                />
                                <TextField
                                    required
                                    name="user_email"
                                    id="outlined-required"
                                    label="Địa chỉ email"
                                    defaultValue={reportSB[10]}
                                    disabled
                                />
                                <TextField
                                    name="message"
                                    id="outlined-multiline-static"
                                    label="Lời nhắn"
                                    multiline
                                    rows={4}
                                    height={100}
                                    onChange={(e) => setMessage(e.target.value)}
                                    defaultValue={message}
                                />
                            </Box>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={sendEmail}
                                >
                                    <SendIcon /> Gửi tin
                                </Button>
                            </Stack>
                        </Box>
                    </form>
                </Modal>
            </div>

        </div>
    )
}
