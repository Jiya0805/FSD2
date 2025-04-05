// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {
//     //module code
//    }
// );
console.log(__filename) // D:\B2_43\T1\Node.js\wrapper.js
console.log(__dirname) // D:\B2_43\T1\Node.js
console.log(arguments)
// [Arguments] {
//     '0': {},
//     '1': [Function: require] {
//       resolve: [Function: resolve] { paths: [Function: paths] },
//       main: Module {
//         id: '.',
//         path: 'D:\\B2_43\\T1\\Node.js',
//         exports: {},
//         filename: 'D:\\B2_43\\T1\\Node.js\\wrapper.js',
//         loaded: false,
//         children: [],
//         paths: [Array]
//       },
//       extensions: [Object: null prototype] {
//         '.js': [Function (anonymous)],
//         '.json': [Function (anonymous)],
//         '.node': [Function (anonymous)]
//       },
//       cache: [Object: null prototype] {
//         'D:\\B2_43\\T1\\Node.js\\wrapper.js': [Module]
//       }
//     },
//     '2': Module {
//       id: '.',
//       path: 'D:\\B2_43\\T1\\Node.js',
//       exports: {},
//       filename: 'D:\\B2_43\\T1\\Node.js\\wrapper.js',
//       loaded: false,
//       children: [],
//       paths: [
//         'D:\\B2_43\\T1\\Node.js\\node_modules',
//         'D:\\B2_43\\T1\\node_modules',
//         'D:\\B2_43\\node_modules',
//         'D:\\node_modules'
//       ]
//     },
//     '3': 'D:\\B2_43\\T1\\Node.js\\wrapper.js',
//     '4': 'D:\\B2_43\\T1\\Node.js'
//   }
