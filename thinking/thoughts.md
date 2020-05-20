# DB:
```js
// this is called rise-db (even though its literally just a configured dynamodb table)

// simple
// relational

// simple
// GET - just need id
// LIST - just need limit and next token
// CREATE - just need id
// UPDATE - just need id
// REMOVE - just need id

// TABLE: 
// PK: id


// relational
// GET - relationship + id
// LIST - relationship + path + limit
// CREATE - all relationship,s id
// UPDATE - all relationships, id
// REMOVE - owner + id

// TABLE: 
// PK: PK
// SK: SK
// GSI1: GSI1


module.exports = {
    notes: {
        type: 'relational',
        id: 'id',
        userId: 'relationship',
        orgId: 'relationship'
    },

    users: {
        type: 'simple',
        id: 'id'
    }
}






```