import PropTypes from 'prop-types'

/* eslint-disable react/prop-types */
export const GifItem = ({title,url}) => {
  console.log(title,url);
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
    
  )
}

GifItem.propTypes = {
  title : PropTypes.string.isRequired,
  url   : PropTypes.string.isRequired 
}