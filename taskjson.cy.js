describe('Jsonplaceholder using api', function () {
    it('POST-Using post method', function () {
        var user = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit,suscipit recusandae consequuntur expedita et cum,reprehenderit molestiae ut ut quas totam,nostrum rerum est autem sunt rem eveniet architecto"
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', user).then((Response) => {
            expect(Response.status).equal(201)
            expect(Response.body.userId).equal(1)
            expect(Response.body.id).equal(101)
            expect(Response.body.title).equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
            expect(Response.body.body).equal('quia et suscipit,suscipit recusandae consequuntur expedita et cum,reprehenderit molestiae ut ut quas totam,nostrum rerum est autem sunt rem eveniet architecto')
        })


    })
    it('GET ids',function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/posts').then((response)=>{  
            expect(response.status).to.eq(200) 
            cy.log(JSON.stringify(response)) 
       })
    })
    it('GET single id',function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1').then((response)=>{  
            expect(response.status).to.eq(200) 
           // cy.log(JSON.stringify(response)) 
            const Id = response.body.id;
            expect(response.body).has.property('id', Id);
            expect(response.body.title).equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
            expect(response.body.body).equal('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto')
            
       })
    })
    it('GET commands',function(){
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1/comments').then((response)=>{  
            expect(response.status).to.eq(200) 
           // cy.log(JSON.stringify(response)) 
            const Id = response.body.id;
            //expect(response.body).has.property('id', Id);
            expect(response.body[0].email).equal('Eliseo@gardner.biz')
            expect(response.body[0].body).equal('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium')
       })
    })
    it('Get using ID',()=>{    
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments?id=10',  
    
           
        }).then((response)=>{  
            expect(response.status).to.eq(200) 
            expect(response.body[0].body).to.eq("voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis")
            expect(response.body[0].id).to.eq(10)
            expect(response.body[0].postId).to.eq(2)   
            expect(response.body[0].email).equal("Carmen_Keeling@caroline.name")
            expect(response.body[0].name).equal("eaque et deleniti atque tenetur ut quo ut")
           
       })
     })
    it('POST/PUT-Using put method', function () {
        var user1 = {
            "userId": 2,
            "id": 15,
            "title": "eveniet quod temporibus",
            "body": "reprehenderit quos placeat,velit minima officia dolores impedit repudiandae molestiae nam,voluptas recusandae quis delectus,officiis harum fugiat vitae"
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', user1).then((Response) => {
            expect(Response.status).equal(201)
            expect(Response.body.userId).equal(2)
            expect(Response.body.id).equal(101)
            expect(Response.body.title).equal('eveniet quod temporibus')
            expect(Response.body.body).equal('reprehenderit quos placeat,velit minima officia dolores impedit repudiandae molestiae nam,voluptas recusandae quis delectus,officiis harum fugiat vitae')
        }).then((Response) => {
            const Id = Response.body.userId;
            cy.log('id:' + Id);
            cy.request({
                method: 'PUT',
                url: 'https://jsonplaceholder.typicode.com/posts/' + Id,
                failOnStatusCode: false,


                body: {
                    "userId": 2,
                    "id": 15,
                    "title": "Using put method",
                    "body": "By using put method i have updated the data",
                    //"check":"fine"
                }
            }).then((Response) => {
                expect(Response.status).equal(200)
                expect(Response.body.userId).equal(2)
                expect(Response.body.id).equal(2)
                expect(Response.body.title).equal('Using put method')
                expect(Response.body.body).equal('By using put method i have updated the data')
                //expect(Response.body.check).equal('fine')
            })


        })
    })
    it('POST/PATCH-Using patch method', function () {
        var user2 = {
            "userId": 6,
            "id": 51,
            "title": "soluta aliquam aperiam consequatur illo quis voluptas",
            "body": "sunt dolores aut doloribus,dolore doloribus voluptates tempora et,doloremque et quo,cum asperiores sit consectetur dolorem"
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', user2).then((Response) => {
            expect(Response.status).equal(201)
            expect(Response.body.userId).equal(6)
            expect(Response.body.id).equal(101)
            expect(Response.body.title).equal('soluta aliquam aperiam consequatur illo quis voluptas')
            expect(Response.body.body).equal('sunt dolores aut doloribus,dolore doloribus voluptates tempora et,doloremque et quo,cum asperiores sit consectetur dolorem')
        }).then((Response) => {
            const id1 = Response.body.userId;
            cy.log('Id Is:' + id1);
            cy.request({
                method: 'PATCH',
                url: 'https://jsonplaceholder.typicode.com/posts/' + id1,
                failOnStatusCode: false,


                body: {
                    //update
                    "title": "Using patch method i have updated my titile data",
                    //"check":"fine"
                }
            }).then((Response) => {
                expect(Response.status).equal(200)
                expect(Response.body.userId).equal(1)
                expect(Response.body.id).equal(6)
                expect(Response.body.title).equal('Using patch method i have updated my titile data')
                //expect(Response.body.check).equal('fine')
                //expect(Response.body.body).equal('sunt dolores aut doloribus,dolore doloribus voluptates tempora et,doloremque et quo,cum asperiores sit consectetur dolorem')
            })


        })
    })
    it('POST/DELETE-Using delete', function () {
        var user3 = {
            "userId": 10,
            "id": 100,
            "title": "at nam consequatur ea labore ea harum",
            "body": "cupiditate quo est a modi nesciunt soluta,ipsa voluptas error itaque dicta in,autem qui minus magnam et distinctio eum,accusamus ratione error aut"
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', user3).then((Response) => {
            expect(Response.status).equal(201)
            expect(Response.body.userId).equal(10)
            expect(Response.body.id).equal(101)
            expect(Response.body.title).equal('at nam consequatur ea labore ea harum')
            expect(Response.body.body).equal('cupiditate quo est a modi nesciunt soluta,ipsa voluptas error itaque dicta in,autem qui minus magnam et distinctio eum,accusamus ratione error aut')
        }).then((Response) => {


            const Id = Response.body.userId;
            cy.log('Id Is:' + Id);
            cy.request({
                method: 'DELETE',
                url: 'https://jsonplaceholder.typicode.com/posts/' + Id,
                failOnStatusCode: false,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((Response) => {


                expect(Response.status).to.eq(200)
                //const Id = Response.body.userId;
                //cy.log('Id Is:' + Id);
                //cy.request('GET','https://jsonplaceholder.typicode.com/posts/' + Id)


            })
        })
    })
})
