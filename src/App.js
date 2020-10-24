import React from 'react';
import './App.css';
import contacts from './contacts.json';

export default class App extends React.Component {
	state = {
		contactsOnPage: contacts.slice(0, 5)
	};

	 addNewContact = () =>{
		const randomNumber = Math.floor(Math.random()*contacts.length);
		const randomContact = contacts[randomNumber];
		console.log(contacts.length);
		this.state.contactsOnPage.forEach(contact => {
			if(!this.state.contactsOnPage.includes(randomContact)) {
				this.setState({
					contactsOnPage: [
						randomContact,
						...this.state.contactsOnPage
				]})
			} else{
				console.log('sorry, it already exists. Click again.');
			}
		})
	}

	nameSort = () => {
		const sortName = this.state.contactsOnPage.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);
		this.setState({
			contactsOnPage: sortName
		});
	};

	popularitySort = () => {
		const popularitySort = this.state.contactsOnPage.sort((a, b) => 
		b.popularity - a.popularity);
		this.setState({
			contactsOnPage: popularitySort
		});
	};

	deleteContact = (contactId) => {
		console.log(contactId);
		const filterDeletedContact = this.state.contactsOnPage.filter(el => {
			return contactId != el.id
		});
		this.setState({
			contactsOnPage: filterDeletedContact
		})
	}

	render() {
		return (
			<div className="App">
				<h2>IronContacts</h2>
				<button onClick={this.addNewContact}>
					Add Random Contact
				</button>
				<button onClick={this.nameSort}>
					Sort by name
				</button>
				<button onClick={this.popularitySort}>
					Sort by popularity
				</button>

				<table style={{marginLeft: "15em", marginTop:"2em"}}>
					<thead>
						<tr>
							<th>Picture</th>
							<th>Name</th>
							<th>Popularity</th>
						</tr>
					</thead>
					<tbody>
						{this.state.contactsOnPage.map(contact => (
							<tr key={contact.id}>
								<td>
									<img src={contact.pictureUrl} alt="" style={{width: 100}} />
								</td>
								<td>{contact.name}</td>
								<td>{contact.popularity}</td>
								<td>
									<button onClick={() => this.deleteContact(contact.id)}>
										Remove this contact
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
  	);
	}
}
