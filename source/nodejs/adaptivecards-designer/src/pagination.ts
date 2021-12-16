
export class Pagination {

    size: number;
    page: number;
    step: number;
    e: HTMLElement;
    code: string = '';
    onPageChange: (page) => void;

    constructor(size: number, page: number, onPageChange:(page) => void) {
        this.size = size;
        if(this.size == 0) {
            this.size = 1;
        }
        this.page = page;
        this.step = 3;
        this.onPageChange = onPageChange;
        this.init(document.getElementById('pagination'));
    }
    // --------------------
    // Utility
    // --------------------

    // converting initialize data


    // add pages by number (from [s] to [f])
    add(s, f) {
        for (var i = s; i < f; i++) {
            this.code += '<a>' + i + '</a>';
        }
    }

    // add last page with separator
    last() {
        this.code += '<i>...</i><a>' + this.size + '</a>';
    }

    // add first page with separator
    first() {
        this.code += '<a>1</a><i>...</i>';
    }



    // --------------------
    // Handlers
    // --------------------

    // change page
    click(e) {
        this.page = +e.target.innerHTML;
        this.start();
        this.onPageChange(this.page);
    }

    // previous page
    prev() {
        this.page--;
        if (this.page < 1) {
            this.page = 1;
        }
        this.start();
        this.onPageChange(this.page);
    }

    // next page
    next() {
        this.page++;
        if (this.page > this.size) {
            this.page = this.size;
        }
        this.start();
        this.onPageChange(this.page);
    }



    // --------------------
    // Script
    // --------------------

    // binding pages
    bind() {
        var a = this.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === this.page) a[i].className = 'current';
            a[i].addEventListener('click', this.click.bind(this), false);
        }
    }

    // write pagination
    finish() {
        this.e.innerHTML = this.code;
        this.code = '';
        this.bind();
    }

    // find pagination type
    start() {
        if (this.size < this.step * 2 + 6) {
            this.add(1, this.size + 1);
        }
        else if (this.page < this.step * 2 + 1) {
            this.add(1, this.step * 2 + 4);
            this.last();
        }
        else if (this.page > this.size - this.step * 2) {
            this.first();
            this.add(this.size - this.step * 2 - 2, this.size + 1);
        }
        else {
            this.first();
            this.add(this.page - this.step, this.page + this.step + 1);
            this.last();
        }
        this.finish();
    }



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    buttons(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', this.prev.bind(this), false);
        nav[1].addEventListener('click', this.next.bind(this), false);
    }

    // create skeleton
    create(e) {
        var html = [
            '<a>&#9668;</a>', // previous button
            '<span></span>',  // pagination container
            '<a>&#9658;</a>'  // next button
        ];

        e.innerHTML = html.join('');
        this.e = e.getElementsByTagName('span')[0];
        this.buttons(e);
    }

    // init
    init(e) {
        this.create(e);
        this.start();
    }
}



/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

