describe('Restful-Booker Website', function () {
    it('POST- Auth-CreateToken', function () {
        var id = {
            "username": "admin",
            "password": "password123"
        }
        cy.request('POST', 'https://restful-booker.herokuapp.com/auth', id).then((Response) => {
            expect(Response.status).equal(200)
            cy.log(JSON.stringify(Response))


        })


    })
    it('POST-CreateBooking', function () {
        var id1 = {
            "firstname": "Guru",
            "lastname": "Prathiba",
            "totalprice": 987,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2020-12-01",
                "checkout": "2020-12-12"
            },
            "additionalneeds": "Breakfast"
        }
        cy.request('POST', 'https://restful-booker.herokuapp.com/booking', id1).then((Response) => {


            expect(Response.status).equal(200)
            expect(Response.body.booking.firstname).equal('Guru')
            expect(Response.body.booking.lastname).equal('Prathiba')
            expect(Response.body.booking.totalprice).equal(987)
            expect(Response.body.booking.depositpaid).equal(true)
            expect(Response.body.booking.bookingdates.checkin).equal('2020-12-01')
            expect(Response.body.booking.bookingdates.checkout).equal('2020-12-12')
            expect(Response.body.booking.additionalneeds).equal('Breakfast')
        })
    })


    it('GET-GetBooking', function () {
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking/222', { failOnStatusCode: false }).then((Response) => {
            expect(Response.status).equal(200)
            expect(Response.body.firstname).equal('Bob')
            expect(Response.body.lastname).equal('Smith')
            expect(Response.body.totalprice).equal(111)
            expect(Response.body.depositpaid).equal(true)
            expect(Response.body.bookingdates.checkin).equal('2018-01-01')
            expect(Response.body.bookingdates.checkout).equal('2019-01-01')
            expect(Response.body.additionalneeds).equal('Breakfast')
        })
    })
    it('GET-GetBookingIds', function () {
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking').then((Response) => {
            expect(Response.status).equal(200)
            cy.log(JSON.stringify(Response))
        })
    })
    it('GET-Filter by names', function () {
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking?firstname=Sowmiya&lastname=Shanmugam').then((Response) => {
            expect(Response.status).equal(200)
            cy.log(JSON.stringify(Response))
        })
    })
    it('GET-Filter by checkin and checkout', function () {
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking?checkin=2020-12-01&checkout=2020-12-12').then((Response) => {
            expect(Response.status).equal(200)
            cy.log(JSON.stringify(Response))
        })
    })
})
 
