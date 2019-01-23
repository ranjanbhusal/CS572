
1. db.restcollection.find({})

2. db.restCollection.find({}, {name:1, district:1, cuisine:1})

3. db.restCollection.find({}, {restaurant_id:1, name:1, district:1, cuisine:1, _id:0})

4. db.restCollection.find({}, {name:1, district:1, 'address.zipcode':1, _id:0})

5. db.restCollection.find({district: 'Bronx'})

6. db.restCollection.find({district: 'Bronx'}).limit(5).pretty()

7. db.restCollection.find({district: 'Bronx'}).skip(5).limit(5).pretty()

8. db.restCollection.find({'address.coord': {'$lt': -95.754168}}).pretty()

9. db.restCollection.find({'cuisine' : {'$ne':'American'} , 'grades.score': {'$gt':70}, 'address.coord': {'$lt': -65.754168}}).pretty()

10. db.restCollection.find({'name' : {'$regex': '^Wil'} }, {name:1, district:1, cuisine:1}).pretty()

11. db.restCollection.find({'name': {'$regex': 'ces$'}}, {restaurant_id:1, name:1, district:1, cuisine:1}).pretty()

12. db.restCollection.find({'name': {'$regex': 'Reg'}}, {restaurant_id:1, name:1, district:1, cuisine:1}).pretty()

13. db.restCollection.find({'cuisine': {'$in' : ['American', 'Chinese']}, 'district':'Bronx'}).pretty()

14. db.restCollection.find({'district': {'$in' : ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurant_id:1, district:1, name:1, cuisine:1}).pretty()

15. db.restCollection.find({'district': {'$nin' : ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurant_id:1, district:1, name:1, cuisine:1}).pretty()

16. db.restCollection.find({'grades.score':{'$lte':10}},{restaurant_id:1, name:1, district:1, cuisine:1}).pretty()

17. db.restCollection.find({'address.coord.1': {'$gt':42, '$lte': 52}}, {restaurant_id:1, name:1, address:1}).pretty()

18. db.restCollection.find({}).sort({name:1}).pretty()

19. db.restCollection.find({}).sort({name:-1}).pretty()

20. db.restCollection.find({}).sort({cuisine:1, district:-1}).pretty()

21. db.restCollection.find({}).count() //3773
	db.restCollection.find({'address.street': {'$exists': true}}).count() //3773
	
22. db.restCollection.find({'address.coord': {'$type': 'double'}}).count() //3773

23. db.restCollection.find({'name': {'$regex': '^Mad'}}, {name:1, district:1, 'address.coord':1}).pretty()	




