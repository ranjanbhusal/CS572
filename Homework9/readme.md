db.zipCollection.aggregate([
	{$match: {state: 'IA'}},
	{$group: {_id: '$state', zip: {$push: '$_id'}}}
])

db.zipCollection.aggregate([
	{$match: {pop: {'$gt': 1000}}},
	{$group: {_id: '$state', zip_code: {$push: '$_id'}}},
	{$project: {_id:0, state: '$_id', zip_code:1}}
])


db.zipCollection.aggregate([
	{$group: {_id: {state: '$state', city: '$city'}, zip_total: {$sum: 1}}},
	{$match: {zip_total: {'$gt':1}}},
	{$project: {_id:0, state:'$_id.state', city:'$_id.city', zip_total:1}},
	{$sort: {state:1, city:1}}
])


db.zipCollection.aggregate([
	{$group: {_id: {state: '$state', city: '$city'}, pop: {$sum: '$pop'}}},
	{$sort: {pop: 1}},
	{$group: {_id: '$_id.state', city: {$first: '$_id.city'}, population: {$first: '$pop'} }},
	{$project: {_id:0, state: '$_id', city:1, population:1}},
	{$sort: {state:1}}
])





