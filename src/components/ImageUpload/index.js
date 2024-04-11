import React, { useState } from 'react';

const ImageUpload = ({ onChange }) => {
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')

    const ImageUpload = () => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'cspmjsnn')
        data.append('cloud_name', 'dkcetq9et')

        fetch('https://api.cloudinary.com/v1_1/dkcetq9et/image/upload', {
            method: 'post',
            body: data
        }).then((response) => response.json()).then((data) => {
            setUrl(data.url)
            console.log("data.url: ", data.url)

        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button onClick={ImageUpload}>Upload Image</button>
        </div>
    )
}

export default ImageUpload;