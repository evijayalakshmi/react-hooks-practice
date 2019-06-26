import React from 'react';
import ImageToggleOnMouseOver from './ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver
                primaryImg={require("./../assets/img/IMG_5247(bw).jpg")}
                secondaryImg={require("./../assets/img/IMG_5247.JPG")}
            />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver
                primaryImg={require("./../assets/img/IMG_5249(bw).jpg")}
                secondaryImg={require("./../assets/img/IMG_5249.JPG")}
            />
        </div>
    );
};

export default ImageChangeOnMouseOver;