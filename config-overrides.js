/**
 * Created by 崔国辉 on 2018/11/13 0013 11:35
 * Develop by 崔国辉 on 2018/11/13 0013 11:35
 */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
     config = injectBabelPlugin(
         ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
       );
     config = rewireCssModules(config, env);
     return config;
};
