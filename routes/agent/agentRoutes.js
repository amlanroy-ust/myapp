var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

//**********Include Services***********/
var agentService = require('./AgentService');


//**********Start creating routes***********/

router.get('/welcome', welcome);
//router.get('/getAgent/:agent_id', getAgent);
router.get('/getAgentList', getAgentList);
router.post('/addAgent', addAgent);

//**********End creating routes***********/

//Start Test Api

function welcome(req, res){
    console.log('welcome...', welcome);
    res.status(200).send({'test': 'ok...'});
}

//End Test Api

//Start Web Api: "get Agent List" Method GET / Parameter: page, pagelimit

function getAgentList(req, res){
    //console.log('req.query: ', req.query);
    var page = req.query.page;
    var pageLimit = req.query.pagelimit;
    agentService.getAgentList(page, pageLimit)
    .then(function (results) {
        res.status(200).send(results);
    })
    .catch(function (err) {
        console.log('err: ', err);
        res.status(400).send(err);
    });
}

//End Web Api: "get Agent List" Method GET

//Start Web Api: "add Agent" Method POST / Parameter: name, emailid, mobile

function addAgent(req, res){
    console.log('req.body: ', req.body);
    //var agentid = req.body.agentid;
    //var leadid = req.body.leadid;
    agentService.addAgent(req.body)
    .then(function (results) {
        res.status(200).send(results);
    })
    .catch(function (err) {
        console.log('err: ', err);
        res.status(400).send(err);
    });
}

//End Web Api: "add Agent" Method POST

module.exports = router;
