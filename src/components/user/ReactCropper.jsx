import { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Box, Slider, IconButton } from '@mui/material';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Modal from "./Modal";

const ReactCropper = ({ showModal, onModalClose, imgURL, onSaveHandler }) => {
    const cropperRef = useRef(null);
    const [croppedImg, setCroppedImg] = useState("");
    const [zoom, setZoom] = useState(1);

    const onCrop = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        setCroppedImg(cropper.getCroppedCanvas().toDataURL());
    };

    const handleZoomChange = (event, newValue) => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        cropper.zoomTo(newValue);
        setZoom(newValue);
    };

    const handleRotate = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        cropper.rotate(90);
    };

    return (
        <Modal
            showModal={showModal}
            onSaveHandler={() => onSaveHandler(croppedImg)}
            onModalClose={onModalClose}
        >
            <Box
                sx={{
                    width: '450px',
                    height: '450px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    border: '1px solid #ddd',
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                <Cropper
                    src={imgURL}
                    initialAspectRatio={1}
                    guides={false}
                    crop={onCrop}
                    ref={cropperRef}
                    viewMode={1}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    responsive={true}
                    autoCropArea={1}
                    aspectRatio={1}
                    checkOrientation={false}
                    background={false}
                    style={{ width: '100%', height: '100%' }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 2,
                    gap: 2,
                }}
            >
                <IconButton onClick={handleRotate}>
                    <RotateLeftIcon />
                </IconButton>
                <Slider
                    value={zoom}
                    min={0.5}
                    max={3}
                    step={0.1}
                    onChange={handleZoomChange}
                    aria-labelledby="zoom-slider"
                />
            </Box>
        </Modal>
    );
};

export default ReactCropper;
