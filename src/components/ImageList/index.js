import './index.css'

const ImageList = props => {
  const {imageDetails, checkAnswer} = props
  const {id, thumbnailUrl} = imageDetails

  const getImage = () => {
    checkAnswer(id)
  }
  return (
    <li>
      <button onClick={getImage} type="button" className="image-button">
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}
export default ImageList
