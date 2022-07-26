// Write your code here
import Component from 'react'
import './index.css'

class ShowHide extends Component {
  render() {
    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div>
          <button type="button" className="button-custom">
            Show/Hide FirstName
          </button>
          <button type="button" className="button-custom">
            Show/Hide LastName
          </button>
        </div>
      </div>
    )
  }
}
export default ShowHide
