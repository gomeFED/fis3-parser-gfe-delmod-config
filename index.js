//的require Config 正则表达式
var requireConfigExp = /require\.config\((\{[\s\S]*?\})\);?/img;
//sea Config 正则表达式
var seaConfigExp = /seajs\.config\((\{[\s\S]*?\})\);?/img;
/**
 * 解析freemarker模板
 * @param  {string} content     文件内容
 * @param  {File}   file        fis 的 File 对象 [fis3/lib/file.js]
 * @param  {object} settings    插件配置属性
 * @return {string}             处理后的文件内容
 */
module.exports = function(content, file, settings) {

    var isEntryFile = (~content.indexOf('/html') || ~content.indexOf('/HTML')) && (~content.indexOf('/head') || ~content.indexOf('/HEAD')) && (~content.indexOf('/body') || ~content.indexOf('/BODY'))
    if(isEntryFile) {
        var temRegExp = requireConfigExp;

        //sea的处理
        if(seaConfigExp.test(content)) {
            temRegExp = seaConfigExp;
        }
        content = content.replace(temRegExp, '');
    }
    return content;
};