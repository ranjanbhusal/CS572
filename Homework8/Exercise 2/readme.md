Create a NoSQL design model for an application to manage a library, taking into consideration the following requirements:

Books have an ISBN number and are categoriezed by author and tagged by keyworkds facilitate search.
Books can be borrowed by students, so the librarian will be able to check all borrowed books and their return date so he may cntact students who are late returning their books.
NoSQl Model design for above requirments



{
	_id: Object.id(),
	name: 'Modern Web Application',
	ISBN_number: 'MWA572',
	Author: {name: 'Assad Saad', email: 'asaad@mum.edu'},
	keywords: ['mwa', 'modern web application', 'mongo', 'mongodb', 'node', 'angular'],
	borrowed: true,
	borrowed_by: {name: 'Ranjan Bhusal', email: 'rbhusal@mum.edu'},
	borrowed_date: new Date(Jan 22, 2019),
	returning_date: new Date(Feb2, 2019)
}


Lab8 Exercise

Revisit Homework07 and write down your suggestiong to tune your Library application performance. (Indexes).

I will create indexes on the following fields

borrowed
returned_date

