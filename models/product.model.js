const mongoose = require('mongoose');
const productschema = mongoose.Schema(
    {
        name: { 
            type :String,
            required : [true,'enter product name']
              },

        quantity :{ 
            type: String,
            required : true,
            default :0 
            },
            
        price : {
            type : String,
            required : true,
            default:0 
        },
    },
    {
        timestamps : true ,
    }
);
const product= mongoose.model("product",productschema);
module.exports=product;