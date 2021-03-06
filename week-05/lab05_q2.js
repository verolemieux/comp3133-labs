db.getCollection("Restaurants").find(
    { "cuisine": "Japanese" }
  );
    
db.getCollection('Restaurants').find(
    { "cuisine": "Japanese" },
    { "cuisine": 1, "name": 1 }
  );
  
db.getCollection('Restaurants').find(
    { "cuisine": "Japanese" },
    { "cuisine": 1, "name": 1 }
  ).sort( { "name": 1 });
  
db.getCollection('Restaurants').find(
    { "cuisine": { $eq: "Japanese" }},
    { "_id": 1, "city": 1, "cuisine": 1, "name": 1, "restaurant_id": 1 }
  ).sort( { "restaurant_id": 1 });

 