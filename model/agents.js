var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var AgentSchema = new Schema({
    name: {type: String, default: null},
    emailid: {type: String, default: null},
    mobile: {type: String, default: null}
},
{ 
    collection: 'doc_agent_master' 
}
);

AgentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('doc_agent_master', AgentSchema);
