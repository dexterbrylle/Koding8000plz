module.exports = [
    ['/api', 'index#index', 'get'],
    ['/api/lineproject', 'lineProject#index', 'get'],
    ['/api/lineproject/PovertyHeadCount', 'lineProject#PovertyHeadCount', 'get'],
    ['/api/lineproject/PovertyGap', 'lineProject#PovertyGap', 'get'],
    ['/api/lineproject/getPovertyHeadCount125', 'lineProject#getPovertyHeadCount125', 'get']
    /*['/api/lineproject', 'lineProject#index', 'get']
    ['/api/lineproject', 'lineProject#index', 'get']
    ['/api/lineproject', 'lineProject#index', 'get']
    ['/api/lineproject', 'lineProject#index', 'get']*/
];