
export default function Video() {
    
    return (
        <>
            <video  className="w-full h-full object-contain  " muted autoPlay playsInline loop>
                <source src={`/videos/Copy of Website Banner (1).mp4`} type="video/mp4" />
            </video>
        </>
    )
}