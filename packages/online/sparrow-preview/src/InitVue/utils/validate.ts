
export default {
  '/src/utils/validate.js': 
    {
      code: decodeURIComponent(`%2F**%0A%20*%20Created%20by%20PanJiaChen%20on%2016%2F11%2F18.%0A%20*%2F%0A%0A%2F**%0A%20*%20%40param%20%7Bstring%7D%20path%0A%20*%20%40returns%20%7BBoolean%7D%0A%20*%2F%0Aexport%20function%20isExternal(path)%20%7B%0A%20%20return%20%2F%5E(https%3F%3A%7Cmailto%3A%7Ctel%3A)%2F.test(path)%0A%7D%0A%0A%2F**%0A%20*%20%40param%20%7Bstring%7D%20str%0A%20*%20%40returns%20%7BBoolean%7D%0A%20*%2F%0Aexport%20function%20validUsername(str)%20%7B%0A%20%20const%20valid_map%20%3D%20%5B'admin'%2C%20'editor'%5D%0A%20%20return%20valid_map.indexOf(str.trim())%20%3E%3D%200%0A%7D%0A%0A%2F**%0A%20*%20%40param%20%7Bstring%7D%20url%0A%20*%20%40returns%20%7BBoolean%7D%0A%20*%2F%0Aexport%20function%20validURL(url)%20%7B%0A%20%20const%20reg%20%3D%20%2F%5E(https%3F%7Cftp)%3A%5C%2F%5C%2F(%5Ba-zA-Z0-9.-%5D%2B(%3A%5Ba-zA-Z0-9.%26%25%24-%5D%2B)*%40)*((25%5B0-5%5D%7C2%5B0-4%5D%5B0-9%5D%7C1%5B0-9%5D%7B2%7D%7C%5B1-9%5D%5B0-9%5D%3F)(%5C.(25%5B0-5%5D%7C2%5B0-4%5D%5B0-9%5D%7C1%5B0-9%5D%7B2%7D%7C%5B1-9%5D%3F%5B0-9%5D))%7B3%7D%7C(%5Ba-zA-Z0-9-%5D%2B%5C.)*%5Ba-zA-Z0-9-%5D%2B%5C.(com%7Cedu%7Cgov%7Cint%7Cmil%7Cnet%7Corg%7Cbiz%7Carpa%7Cinfo%7Cname%7Cpro%7Caero%7Ccoop%7Cmuseum%7C%5Ba-zA-Z%5D%7B2%7D))(%3A%5B0-9%5D%2B)*(%5C%2F(%24%7C%5Ba-zA-Z0-9.%2C%3F'%5C%5C%2B%26%25%24%23%3D~_-%5D%2B))*%24%2F%0A%20%20return%20reg.test(url)%0A%7D%0A%0A%2F**%0A%20*%20%40param%20%7Bstring%7D%20str%0A%20*%20%40returns%20%7BBoolean%7D%0A%20*%2F%0Aexport%20function%20validLowerCase(str)%20%7B%0A%20%20const%20reg%20%3D%20%2F%5E%5Ba-z%5D%2B%24%2F%0A%20%20return%20reg.test(str)%0A%7D%0A%0A%2F**%0A%20*%20%40param%20%7Bstring%7D%20str%0A%20*%20%40returns%20%7BBoolean%7D%0A%20*%2F%0Aexport%20function%20validUpperCase(str)%20%7B%0A%20%20const%20reg%20%3D%20%2F%5E%5BA-Z%5D%2B%24%2F%0A%20%20return%20reg.test(str)%0A%7D%0A%0A%2F**%0A%20*%20%40param%20%7Bstring%7D%20str%0A%20*%20%40returns%20%7BBoolean%7D%0A%20*%2F%0Aexport%20function%20validAlphabets(str)%20%7B%0A%20%20const%20reg%20%3D%20%2F%5E%5BA-Za-z%5D%2B%24%2F%0A%20%20return%20reg.test(str)%0A%7D%0A%0A%2F**%0A%20*%20%40param%20%7Bstring%7D%20email%0A%20*%20%40returns%20%7BBoolean%7D%0A%20*%2F%0Aexport%20function%20validEmail(email)%20%7B%0A%20%20const%20reg%20%3D%20%2F%5E((%5B%5E%3C%3E()%5C%5B%5C%5D%5C%5C.%2C%3B%3A%5Cs%40%22%5D%2B(%5C.%5B%5E%3C%3E()%5C%5B%5C%5D%5C%5C.%2C%3B%3A%5Cs%40%22%5D%2B)*)%7C(%22.%2B%22))%40((%5C%5B%5B0-9%5D%7B1%2C3%7D%5C.%5B0-9%5D%7B1%2C3%7D%5C.%5B0-9%5D%7B1%2C3%7D%5C.%5B0-9%5D%7B1%2C3%7D%5C%5D)%7C((%5Ba-zA-Z%5C-0-9%5D%2B%5C.)%2B%5Ba-zA-Z%5D%7B2%2C%7D))%24%2F%0A%20%20return%20reg.test(email)%0A%7D%0A%0A%2F**%0A%20*%20%40param%20%7Bstring%7D%20str%0A%20*%20%40returns%20%7BBoolean%7D%0A%20*%2F%0Aexport%20function%20isString(str)%20%7B%0A%20%20if%20(typeof%20str%20%3D%3D%3D%20'string'%20%7C%7C%20str%20instanceof%20String)%20%7B%0A%20%20%20%20return%20true%0A%20%20%7D%0A%20%20return%20false%0A%7D%0A%0A%2F**%0A%20*%20%40param%20%7BArray%7D%20arg%0A%20*%20%40returns%20%7BBoolean%7D%0A%20*%2F%0Aexport%20function%20isArray(arg)%20%7B%0A%20%20if%20(typeof%20Array.isArray%20%3D%3D%3D%20'undefined')%20%7B%0A%20%20%20%20return%20Object.prototype.toString.call(arg)%20%3D%3D%3D%20'%5Bobject%20Array%5D'%0A%20%20%7D%0A%20%20return%20Array.isArray(arg)%0A%7D%0A`)
    }    
  
}