import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext'
import config from '../config'
import './Note.css'

export default class Note extends Component {
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(() => {
        this.context.deleteNote(noteId)
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({error})
      })
  }
  
  render() {
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/notes/${this.props.id}`}>
            {this.props.title}
          </Link>
        </h2>
        <button onClick={this.handleClickDelete} className='Note__delete' type='button'>
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Created
            {' '}
            <span className='Date'>
              {format(this.props.date_created, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
