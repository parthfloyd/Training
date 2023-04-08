const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const {userOneId, userOne, setupDatabase} = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Parth',
        email: 'parth@example.com',
        password: 'haha1234'
    }).expect(201);

    //Assert that database was changed correctly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    //Assertion about the response body
    expect(response.body).toMatchObject({
        user: {
            name: 'Parth',
            email:'parth@example.com'
        },
        token: user.tokens[0].token
    });
    
    expect(user.password).not.toBe('haha1234');
});

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200);

    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);
});

test('Should not login non existent user' , async () => {
    await request(app).post('/users/login').send({
        email: "kachra@gmail.com",
        password:"dedhsoRupiya"
    }).expect(400);
});


test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});

test('Should not get prof for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401);
})


test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar','tests/fixtures/profile-pic.jpg')
        .expect(200)
    
    const user = await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer));
});

test('Should update valid fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name:"Atmanirbhar"
        })
        .expect(200);
    
    const user = await User.findById(userOneId);
    expect(user.name).toBe("Atmanirbhar");
});

test('Should not update invalid fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            hobby:"Kite Flying"
        })
        .expect(400);
    
});