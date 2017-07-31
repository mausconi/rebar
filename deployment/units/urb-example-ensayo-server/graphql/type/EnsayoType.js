Object.defineProperty(exports,"__esModule",{value:true});

var _graphqlRelay=require('graphql-relay');
var _graphql=require('graphql');

var _Ensayo=require('../model/Ensayo');var _Ensayo2=_interopRequireDefault(_Ensayo);
var _NodeInterface=require('../../../../units/urb-base-server/graphql/NodeInterface');var _NodeInterface2=_interopRequireDefault(_NodeInterface);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _default=

new _graphql.GraphQLObjectType({
name:'Ensayo',

interfaces:[_NodeInterface2.default],

isTypeOf:function isTypeOf(object){return object instanceof _Ensayo2.default;},

fields:{
id:(0,_graphqlRelay.globalIdField)('Ensayo'),
Ensayo_Title:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.Ensayo_Title;}},
Ensayo_Description:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.Ensayo_Description;}},
Ensayo_Content:{type:_graphql.GraphQLString,resolve:function resolve(obj){return obj.Ensayo_Content;}}}});exports.default=_default;;var _temp=function(){if(typeof __REACT_HOT_LOADER__==='undefined'){return;}__REACT_HOT_LOADER__.register(_default,'default','units/urb-example-ensayo-server/graphql/type/EnsayoType.js');}();;
//# sourceMappingURL=EnsayoType.js.map