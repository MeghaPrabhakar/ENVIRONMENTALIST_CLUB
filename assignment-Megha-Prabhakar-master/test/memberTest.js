const assert = require('chai').assert;
const fetch = require('node-fetch');
const getCookies = require('../getCookies');
const urlBase = 'http://127.0.0.1:3000/'

describe('Get Member Tests', function () {
    this.timeout(15000);
    let res;
    let tours = null;
    before(async function(){
        res = await fetch(urlBase + 'member');
    })
    it('Everything is OK', async function(done){
        assert.equal(res.status, 200);
        setTimeout(done, 15000);
    });
    it('Returns an array', async function(){
        tours = await res.json();
        assert.isArray(tours);
        setTimeout(done, 15000);
    });
    it('All tour elements have name and date', function(){
        tours.forEach(function(tour){
            assert.containsAllKeys(tour, ['name', 'date']);
        });
        setTimeout(done, 15000);
    });
    it('Cookie with appropriate name is returned', function(){
        let cookies = getCookies(res);
        assert.include(cookies, 'Member');
        console.log(`Member test cookies: ${cookies}`);
    });
})