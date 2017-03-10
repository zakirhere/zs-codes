var findInTheBook = function(searchWord) {
    var foundTextInPage = [];

    var bookArray = [{
        'page': 1,
        'content': 'this is page one content'
    },
    {
        'page': 2,
        'content': 'this is page two content. I have nothing to write here.'
    },
       {
        'page': 3,
        'content': 'this is page three content'
        }
    ];

    bookArray.forEach(function(contents) {
        if(contents.content.indexOf(searchWord) >= 0) {
            foundTextInPage.push(contents.page)
        }
    });        
    console.log(foundTextInPage);
}

findInTheBook('this')
