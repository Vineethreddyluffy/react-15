import './index.css'

const DestinationItems = props => {
  const {List} = props
  const {name, imgUrl} = List
  return (
    <li className="card">
      <img src={imgUrl} alt={name} className="image" />
      <p className="para">{name}</p>
    </li>
  )
}
export default DestinationItems
