/*
 * @Autor: ylhuang
 * @Date: 2020-01-08 19:44:39
 * @LastEditTime : 2020-01-14 17:51:29
 */
const gulf = require('gulf')
    , richtextOT = require('ot-text').type

class QuillDocument extends gulf.EditableDocument {
    constructor(opts) {
        opts.ottype = opts.ottype || richtextOT
        super(opts)
        if (!opts.editorInstance) throw new Error('No Quill instance was passed')
        this.quill = opts.editorInstance;
        this.quill.on('text-change', (changes, source) => {
            console.log(changes, source, "hhhh")
            // if (source !== 'user') return
            console.log('我变更啦啦啦')
            this.submitChange(changes)
        })
    }

    _setContent(contents) {
        console.log('11111', contents);
        debugger
        this.quill.setContents(contents)
        // return Promise.resolve()
    }

    _onChange(changes) {
        console.log('2222');

        this.quill.updateContents(changes)
        return Promise.resolve()
    }

    _onBeforeChange() {
        return Promise.resolve()
    }

}
export default QuillDocument;