module.exports = function(dirName, filenameExt, callback) {
    var filteredFiles = [];

    require('fs').readdir(dirName, function(err, files) {
        if (err) { return callback(err); }
        filterListByExt(files, filenameExt);
        return callback(null, filteredFiles);
    });

    function filterListByExt(list, ext) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].split('.')[1] === ext) {
                filteredFiles.push(list[i]);
                console.log(list[i]);
            }
        }
    }
}
