const req = require.context('../../icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys()
/**
 * require.context函数执行后返回的是一个函数,并且这个函数有3个属性
 * resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
 * keys {Function} -返回匹配成功模块的名字组成的数组
 * id {String} -执行环境的id,返回的是一个字符串
 *
 */
const re = /\.\/(.*)\.svg/

const svgIcons = requireAll(req).map(i => {
  return i.match(re)[1]
})

export default svgIcons
