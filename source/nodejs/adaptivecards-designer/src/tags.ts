
export class TagList {
    selectedTags: string[] = [];
    tags: string[];
    code = '';
    e: HTMLElement;
    onTagSelected: (selectedTags) => void;

    constructor(tags: string[], selectedTags: string[], onTagSelected: (selectedTags) => void) {
        this.e = document.getElementById('tag-picker');
        this.tags = tags;
        this.selectedTags = selectedTags;
        this.onTagSelected = onTagSelected;
        this.reRender();
    }

    scrollTo() {
        this.e.scrollIntoView({behavior: 'smooth'});
    }

    onClick(e) {
        var tag = e.target.innerHTML;
        if (this.selectedTags.indexOf(tag) !== -1) {
            this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
        } else {
            this.selectedTags.push(tag);
        }
        this.reRender();
        this.onTagSelected(this.selectedTags);
    }

    reRender() {
        this.code = '<ul>';
        for (let tag of this.tags) {
            let classAdd = 'class="tag-element"';
            if (this.selectedTags.indexOf(tag) !== -1) {
                classAdd = 'class="tag-element selected"';
            }
            this.code += '<li ' + classAdd + '>' + tag + '</li>';
        }
        this.code += '</ul>';
        this.e.innerHTML = this.code;
        var elements = document.getElementsByClassName('tag-element');
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', this.onClick.bind(this), false);
        }
    }
}
