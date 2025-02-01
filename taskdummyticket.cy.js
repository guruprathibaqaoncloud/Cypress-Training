describe("Validate Dummy ticket site",()=>{
    it("Assert all non I/P fields",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        // Assert Url and Title
        cy.url().should('eq','https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.url().should('not.eq','https://www.dummyticket.com/')
        cy.title().should('eq','Dummy ticket for applying visa - Verifiable flight reservation for embassy')
        cy.title().should('not.eq','Dummy ticket for applying visa reservation for embassy')
        // Assert non niput fields of content field
        cy.get('.navbar-logo-img-normal').should('be.visible').should('exist')
        cy.get('#menu-item-13 > .nav-item-child').should('be.visible').should('exist')
        cy.get('#menu-item-574 > .nav-item-child').should('be.visible').should('exist')
        cy.get('#menu-item-1556 > .nav-item-child').should('be.visible').should('exist')


        cy.get('.ffb-h2-1 > :nth-child(2)').should('be.visible').should('exist')
        .should('have.text','Dummy ticket booking')
        cy.get('.ffb-paragraph-2').should('be.visible').should('exist')
        .should('have.text','Please complete the below form and follow instructions in order to make your Dummy ticket')
        cy.get('.ffb-id-35h89rtm > :nth-child(2)').should('be.visible').should('exist')
        .should('have.text','Choose the correct option:')
        cy.get('.woocommerce-billing-fields > :nth-child(1)').should('be.visible').should('exist')
        .should('have.text','Passenger details:')
        cy.get('.woocommerce-additional-fields > h3').should('be.visible').should('exist')
        .should('have.text','Additional information')


        // To check Dummy ticket for Visa Application checkbox
        cy.get('#product_549').should('be.visible').should('exist').check()
        // Assert the Headings of Input fields


        cy.get('#travname_field > label').should('be.visible').should('exist')
        cy.get('#travlastname_field > label').should('be.visible').should('exist')
        cy.get('#dob_field > label').should('be.visible').should('exist')
        cy.get('#sex_field > [for="1"]').should('be.visible').should('exist')
        cy.get('.woocommerce-billing-fields > :nth-child(32)').should('exist').should('have.text','Travel Details')
        cy.get('#traveltype_field > [for="1"]').should('exist')
        cy.get('[style="color:#2d2d2d;"]').should('exist').should('have.text','Delivery options:')
        cy.get('#bill_field > h2').should('exist').should('have.text','Billing Details')
    })
        it("Validate all I/P fields with valid Inputs....",()=>{
            cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
             
            // To check Dummy ticket for Visa Application checkbox
        cy.get('#product_549').should('be.visible').should('exist').check()
       
        // Give Inputs to input fields
            // Passenger details
        cy.get('#travname').should('be.visible').should('exist').type("Nantha")
        cy.get('#travlastname').should('be.visible').should('exist').type("T")
        cy.get('#order_comments').should('be.visible').should('exist').type("Not yet any commands")
        cy.get('#dob').should('be.visible').should('exist').click()
        cy.wait(2000)
        cy.get('.ui-datepicker-year').select("1998")
        cy.get('.ui-datepicker-month').select("Feb")
        cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click()
        cy.get('#sex_1').should('be.visible').should('exist').click()
        // Travel details
        cy.get('#traveltype_1').should('be.visible').should('exist').click()
        cy.get('#fromcity').should('be.visible').should('exist').type("Chennai")
        cy.get('#tocity').should('be.visible').should('exist').type("Dubai")
        cy.get('#departon').should('be.visible').should('exist').click()
        cy.wait(2000)
        cy.get('.ui-datepicker-month').should('be.visible').should('exist').select("Feb")
        cy.get(':nth-child(4) > :nth-child(7) > .ui-state-default').should('be.visible').should('exist').click()
        cy.get('#notes').should('be.visible').should('exist').type("No additional information")
        // Delivery Options
        cy.get('#appoinmentdate').should('be.visible').should('exist').click()
        cy.wait(2000)
        cy.get('.ui-datepicker-next > .ui-icon').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click()
        cy.get('#deliverymethod_3').should('be.visible').should('exist').click()
        // Billing details
        cy.get('#billname').should('be.visible').should('exist').type("Nantha")
        cy.get('#billing_phone').should('be.visible').should('exist').type("9524877400")
        cy.get('#billing_email').should('be.visible').should('exist').type("Nantha@gmail.com")
     
        cy.get('#billing_address_1').should('be.visible').should('exist').type("123,pollachi")
        cy.get('#billing_address_2').should('be.visible').should('exist').type("coimbatore")
        cy.get('#billing_city').should('be.visible').should('exist').type("Coimbatore")
        cy.get('#select2-billing_state-container').should('be.visible').should('exist').click()
        cy.get('.select2-search__field').type("Tamil Nadu").type('{enter}')
        cy.get('#billing_postcode').type("646464")
        // Click place order btn
        cy.get('#place_order').should('be.visible').should('exist').click()
            cy.wait(5000)
            // payment page inputs
        cy.url().should('contain','https://api.payu.in/public')
        cy.get('.title-text').should('exist').should('have.text','Enter card details')
        cy.get('.total-amount').should('exist').should('be.visible')
        cy.get('#cardNumber').should('exist').should('be.visible').type("95024087704509052480")
        cy.get('#cardExpiry').should('exist').should('be.visible').type("0128")
        cy.get('.input-box > [data-testid]').should('exist').should('be.visible').type("520")
        cy.wait(2000)
        cy.get('#cardOwnerName').should('exist').should('be.visible').type("Nantha")
        cy.wait(2000)
        cy.get('[type="submit"] > div').should('be.visible').should('exist').click()
    })




    it("Validate I/P field with Invalid data's",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
         
        // To check Dummy ticket for Visa Application checkbox
    cy.get('#product_549').should('be.visible').should('exist').check()
   
    // Give Inputs to input fields


    cy.get('#travlastname').should('be.visible').should('exist').type("T")
    cy.get('#order_comments').should('be.visible').should('exist').type("Not yet any commands")
    cy.get('#sex_1').should('be.visible').should('exist').click()
    cy.get('#traveltype_1').should('be.visible').should('exist').click()
    cy.get('#fromcity').should('be.visible').should('exist').type("Chennai")
    cy.get('#tocity').should('be.visible').should('exist').type("Dubai")
    cy.get('#departon').should('be.visible').should('exist').click()
    cy.wait(2000)
    cy.get('.ui-datepicker-month').should('be.visible').should('exist').select("Feb")
    cy.get(':nth-child(4) > :nth-child(7) > .ui-state-default').should('be.visible').should('exist').click()
    cy.get('#notes').should('be.visible').should('exist').type("No additional information")
 
    cy.get('#appoinmentdate').should('be.visible').should('exist').click()
    cy.wait(2000)
    cy.get('.ui-datepicker-next > .ui-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click()
   
    cy.get('#deliverymethod_3').should('be.visible').should('exist').click()
    // Billing details
    cy.get('#billname').should('be.visible').should('exist').type("Nantha")
    cy.get('#billing_phone').should('be.visible').should('exist').type("9524877400")
    cy.get('#billing_email').should('be.visible').should('exist').type("Nantha@gmail.com")
 
    cy.get('#billing_address_1').should('be.visible').should('exist').type("123,pollachi")
    cy.get('#billing_address_2').should('be.visible').should('exist').type("coimbatore")
    cy.get('#billing_city').should('be.visible').should('exist').type("Coimbatore")
    cy.get('#select2-billing_state-container').should('be.visible').should('exist').click()
    cy.get('.select2-search__field').type("Tamil Nadu").type('{enter}')
    cy.get('#billing_postcode').type("646464")
    // Click place order btn
    cy.get('#place_order').should('be.visible').should('exist').click()
        cy.wait(5000)
        // Assert error message
        cy.get('[data-id="travname"]').should('be.visible').should('exist')
        .should('have.text','\n\t\t\tFirst / Given name is a required field.\t\t')
        cy.get('[data-id="dob"]').should('be.visible').should('exist')
        .should('have.text','\n\t\t\tDate of birth is a required field.\t\t')


    })




    it.only("Validate I/P field with Invalid data's",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
         
        // To check Dummy ticket for Visa Application checkbox
    cy.get('#product_549').should('be.visible').should('exist').check()
   
    // Give Inputs to input fields


    cy.get('#travname').should('be.visible').should('exist').type("Nantha")
    cy.get('#travlastname').should('be.visible').should('exist').type("T")
    cy.get('#order_comments').should('be.visible').should('exist').type("Not yet any commands")
    cy.get('#dob').should('be.visible').should('exist').click()
    cy.wait(2000)
    cy.get('.ui-datepicker-year').select("1998")
    cy.get('.ui-datepicker-month').select("Feb")
    cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').click()
    cy.get('#sex_1').should('be.visible').should('exist').click()
    cy.get('#traveltype_1').should('be.visible').should('exist').click()
    cy.get('#fromcity').should('be.visible').should('exist').type("Chennai")
    cy.get('#tocity').should('be.visible').should('exist').type("Dubai")
    cy.get('#departon').should('be.visible').should('exist').click()
    cy.wait(2000)
    cy.get('.ui-datepicker-month').should('be.visible').should('exist').select("Feb")
    cy.get(':nth-child(4) > :nth-child(7) > .ui-state-default').should('be.visible').should('exist').click()
    cy.get('#notes').should('be.visible').should('exist').type("No additional information")
 
    cy.get('#appoinmentdate').should('be.visible').should('exist').click()
    cy.wait(2000)
    cy.get('.ui-datepicker-next > .ui-icon').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click()
   
    cy.get('#deliverymethod_3').should('be.visible').should('exist').click()
    // Billing details
    cy.get('#billname').should('be.visible').should('exist').type("Nantha")
    cy.get('#billing_address_1').should('be.visible').should('exist').type("123,pollachi")
    cy.get('#billing_address_2').should('be.visible').should('exist').type("coimbatore")
    cy.get('#billing_city').should('be.visible').should('exist').type("Coimbatore")
    cy.get('#select2-billing_state-container').should('be.visible').should('exist').click()
    cy.get('.select2-search__field').type("Tamil Nadu").type('{enter}')
    cy.get('#billing_postcode').type("646464")
    // Click place order btn
    cy.get('#place_order').should('be.visible').should('exist').click()
        cy.wait(5000)
        // Assert error message
       cy.get('[data-id="billing_phone"]').should('be.visible').should('exist')
       .should('have.text','\n\t\t\tBilling Phone is a required field.\t\t')
       cy.get('[data-id="billing_email"]').should('be.visible').should('exist')
       .should('have.text','\n\t\t\tBilling Email address is a required field.\t\t')


    })
})

