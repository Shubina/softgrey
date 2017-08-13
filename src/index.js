import React from 'react';

import ReactDOM from 'react-dom';

const mountNode = document.querySelector('#form');


class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      sendMsg: 'Your email has been sent'
    };
     this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  submit(e, state) {
   let self = this;

    e.preventDefault()
  
    var data = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment
    }

   
    $.ajax({
      type: 'POST',
      url: '../subscribe.php',
      data: data
    })
    .done(function(data) {
      self.clearForm();
      $('.send-msg').addClass('success');
    })
    .fail(function(jqXhr) {
      self.setState({sendMsg: 'Send error' });
      $('.send-msg').addClass('error');
    });

  }

 
  render() {

	  return (
	    <form onSubmit={this.submit}>
		    <label htmlFor="email-input">newsletter</label>
		    <input 
			    type="email" 
			    id="email-input" 
			    value={this.state.value}
    	     onChange={this.handleChange} 
	          	 />
		    <input 
		    	type="submit" 
		    	className="btn" 
		    	value="subscribes"
	    	 	 />
           <div className="send-msg">{this.state.sendMsg}</div>
	  	</form>
	  );
	}
};

ReactDOM.render(<Subscribe />, mountNode);
