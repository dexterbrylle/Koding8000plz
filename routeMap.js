module.exports = [
    ['/api', 'index#index', 'get'],
    ['/api/lineproject', 'lineProject#index', 'get'],
    ['/api/lineproject/PovertyHeadCount', 'lineProject#PovertyHeadCount', 'get'],
    ['/api/lineproject/PovertyGap', 'lineProject#PovertyGap', 'get']
    /*['/api/lineproject', 'lineProject#index', 'get']
    ['/api/lineproject', 'lineProject#index', 'get']
    ['/api/lineproject', 'lineProject#index', 'get']
    ['/api/lineproject', 'lineProject#index', 'get']
    ['/api/lineproject', 'lineProject#index', 'get']*/
];