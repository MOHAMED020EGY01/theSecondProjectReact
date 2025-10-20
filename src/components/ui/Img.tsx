interface IImg{
    src: string;
    alt: string;
    className?: string;
    classNameParent?: string;
}
const Img = ({ src, alt, className, classNameParent }: IImg) => {
    return (
        <div className={classNameParent}>
            <img src={src} alt={alt} className={className} />
        </div>
    )
}
export default Img;
