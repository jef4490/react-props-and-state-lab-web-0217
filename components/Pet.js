const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
  let petId = this.props.pet.id
    this.props.onAdoptPet(petId)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet Name {this.props.pet.name} {this.props.pet.gender === 'male' ? '♂' : '♀' }</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted ? <button className="ui primary button" onClick={this.handleClick} id={this.props.pet.id}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
