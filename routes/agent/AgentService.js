//var searchMaster = require('../../model/searchMasters');
var Agent = require('../../model/agents');
var config = require('../../config');
var path = require('path');
var async = require("async");
var fs      = require('fs');
var Q = require('q');

var service = {};

service.getAgentList = getAgentList;
service.addAgent = addAgent;

module.exports = service;

//Start Web Api: "get Agent List" Method GET / Parameter: page, pagelimit

function getAgentList(page=1, pageLimit=10) {
    var deferred = Q.defer();

    var query = {};

    var options = {
        select: '_id name emailid mobile',
        sort:   { _id: 1 },
        lean:   true,
        page:   parseInt(page), 
        limit:  parseInt(pageLimit) 
    };

    Agent.paginate(query, options, function(err, result) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(result);
    });

    return deferred.promise;
}

//End Web Api: "get Agent List" Method GET

//Start Web Api: "add Agent" Method POST / Parameter: name, emailid, mobile

function addAgent(postData) {
    //console.log('postData: ', postData);
    var deferred = Q.defer();
    var data = {
        name: postData.name, 
        emailid: postData.emailid,
        mobile: postData.mobile
    };
    var AgentData = new Agent(data);

    AgentData.save(function(err, result) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(result);
    });

    return deferred.promise;
}

//End Web Api: "add Agent" Method POST