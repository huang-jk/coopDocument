/*
 * @Autor: ylhuang
 * @Date: 2020-01-08 19:44:39
 * @LastEditTime : 2020-01-14 17:51:29
 */
const gulf = require('gulf')
    , richtextOT = require('rich-text')

class QuillDocument extends gulf.EditableDocument {
    constructor(opts) {
        opts.ottype = opts.ottype || richtextOT
        super(opts)
        if (!opts.editorInstance) throw new Error('No Quill instance was passed')
        this.quill = opts.editorInstance;
        this.quill.on('text-change', (changes, source) => {
            console.log(changes, source, "hhhh")
            //if (source !== 'user') return
            
            this.submitChange(changes)
        })
    }

    _setContent(contents) {
        this.quill.setContents(contents)
        return Promise.resolve()
    }

    _onChange(changes) {
        this.quill.updateContents(changes)
        return Promise.resolve()
    }

    _onBeforeChange() {
        return Promise.resolve()
    }

}
export default QuillDocument;