describe('Restful-Booker-2', function () {
    it('POST/PUT-UpdateBooking', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                "username": "admin",
                "password": "password123"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            const tokenId = response.body.token;
            expect(response.body).has.property('token', tokenId);
           // expect(response.body).to.eq('token')
            cy.log(JSON.stringify(response))
        })
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {


                "firstname": "Guru",
                "lastname": "Prathiba",
                "totalprice": 777,
                "depositpaid": false,
                "bookingdates": {
                    "checkin": "2022-12-08",
                    "checkout": "2022-12-12"
                },
                "additionalneeds": "Lunch"
            }
        }).then((res) => {
            const ID = res.body.bookingid;
            expect(res.status).to.eq(200);
            expect(res.body).has.property('bookingid', ID);
            expect(res.body.booking).has.property('firstname', 'Guru');
            expect(res.body.booking.lastname).to.eq("Prathiba")
            expect(res.body.booking.totalprice).equal(777)
            expect(res.body.booking.additionalneeds).equal("Lunch")
            expect(res.body.booking.bookingdates.checkin).equal("2022-12-08")
            expect(res.body.booking.bookingdates.checkout).equal("2022-12-12")
            expect(res.body.booking.depositpaid).equal(false)


        }).then((res) => {
            cy.log(JSON.stringify(res))
            const UserId = res.body.bookingid;
            cy.log('User Id Is:' + UserId);
            cy.request({
                method: 'PUT',
                url: 'https://restful-booker.herokuapp.com/booking/' + UserId,
                headers: {
                    "authorization": " Basic YWRtaW46cGFzc3dvcmQxMjM=",
                },
                body:  //updated details
                {
                    "firstname": "Anu",
                    "lastname": "jothi",
                    "totalprice": 345,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2022-01-01",
                        "checkout": "2022-01-05"
                    },
                    "additionalneeds": "Breakfast"
                }


            }).then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(200)
                expect(res.body.firstname).equal("Anu")
                expect(res.body.lastname).to.eq("jothi")
                expect(res.body.totalprice).equal(345)
                expect(res.body.additionalneeds).equal("Breakfast")
                expect(res.body.bookingdates.checkin).equal("2022-01-01")
                expect(res.body.bookingdates.checkout).equal("2022-01-05")
                expect(res.body.depositpaid).equal(true)


            })
        })
    })
    it('PartialUpdateBooking',function(){
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
            expect(Response.status).equal(200)
            expect(Response.body.booking.firstname).equal('Guru')
            expect(Response.body.booking.lastname).equal('Prathiba')
            expect(Response.body.booking.totalprice).equal(987)
            expect(Response.body.booking.depositpaid).equal(true)
            expect(Response.body.booking.bookingdates.checkin).equal('2020-12-01')
            expect(Response.body.booking.bookingdates.checkout).equal('2020-12-12')
            expect(Response.body.booking.additionalneeds).equal('Breakfast')
        }).then((Response)=>{
            cy.log(JSON.stringify(Response))
            const UserId = Response.body.bookingid;
            cy.log('User Id is:' + UserId);
            cy.request({
                method: 'PATCH',
                url: 'https://restful-booker.herokuapp.com/booking/'+UserId,
                failOnStatusCode: false,
                headers:{
                    "authorization":  " Basic YWRtaW46cGFzc3dvcmQxMjM=",    
                },
                body:
                {
                      //Partial Update 
                      "firstname" : "Ant",
                      "lastname" : "Cally"
                }
               
            }).then((Response) => {
                cy.log(JSON.stringify(Response))
                expect(Response.status).equal(200)
                expect(Response.body.firstname).equal('Ant')
                expect(Response.body.lastname).equal('Cally')
                expect(Response.body.totalprice).equal(987)
                expect(Response.body.depositpaid).equal(true)
                expect(Response.body.bookingdates.checkin).equal('2020-12-01')
                expect(Response.body.bookingdates.checkout).equal('2020-12-12')
                expect(Response.body.additionalneeds).equal('Breakfast')
            })
        })
    })
    it('DELETE-DeleteBooking',function(){
        var id2 = {
            "firstname": "Ram",
            "lastname": "Anto",
            "totalprice": 444,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2020-12-09",
                "checkout": "2020-12-14"
            },
            "additionalneeds": "Breakfast"
        }
        cy.request('POST', 'https://restful-booker.herokuapp.com/booking', id2).then((Response) => {


            expect(Response.status).equal(200)
            expect(Response.status).equal(200)
            expect(Response.body.booking.firstname).equal('Ram')
            expect(Response.body.booking.lastname).equal('Anto')
            expect(Response.body.booking.totalprice).equal(444)
            expect(Response.body.booking.depositpaid).equal(true)
            expect(Response.body.booking.bookingdates.checkin).equal('2020-12-09')
            expect(Response.body.booking.bookingdates.checkout).equal('2020-12-14')
            expect(Response.body.booking.additionalneeds).equal('Breakfast')
        }).then((Response)=>{
            cy.log(JSON.stringify(Response))
            const UserId = Response.body.bookingid;
            cy.log('User Id is:' + UserId);
            cy.request({
                method: 'DELETE',
                url: 'https://restful-booker.herokuapp.com/booking/'+UserId,
                failOnStatusCode: false,headers:{
                    "authorization":  " Basic YWRtaW46cGFzc3dvcmQxMjM=",
                
                      
                }
               
            }).then((Response) => {
                cy.log(JSON.stringify(Response))
                expect(Response.status).equal(201)
                expect(Response.body).to.eq('Created');
               
            })
        })
    })
    it('Ping-HealthCheck',()=>{    
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/ping',   
        }).then((response)=>{  
            expect(response.status).to.eq(201) 
            expect(response.body).to.eq('Created');
            cy.log(JSON.stringify(response)) 
       })
  })
})


