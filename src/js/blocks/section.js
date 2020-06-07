const { registerBlockType } = wp.blocks;
const { 
    RichText,
    InspectorControls,
    ColorPalette,
} = wp.blockEditor;

const { PanelBody } = wp.components;

registerBlockType('arkonsoft/section', {
    title: 'Section',
    description: 'Simple section',
    icon: 'format-image',
    category: 'layout',

    attributes: {
        heading: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        bgColor: {
            type: 'string',
            default: 'transparent'
        }
    },

    edit({ attributes, setAttributes }) {
        const {
            heading, 
            body,
            bgColor
        } = attributes;

        function onChangeHeading(val) {
            setAttributes( { heading: val } );
        }

        function onChangeBody(val) {
            setAttributes( { body: val } );
        }

        function onChangeBgColor(val) {
            setAttributes( { bgColor: val } );
        }

        return ([
            <InspectorControls style={{marginBottom: '40px'}}>
                <PanelBody title={ 'Colors' }>
                <p><strong>Choose background color</strong>:</p>
                <ColorPalette 
                    value={bgColor}
                    onChange={onChangeBgColor}
                 />
                 </PanelBody>
            </InspectorControls>,
            <div style={{backgroundColor: bgColor}}>
                <RichText
                    key="editable"
                    tagName="h2"
                    placeholder="Type heading text here"
                    value={ heading }
                    onChange={ onChangeHeading }
                />
                <RichText
                    key="editable"
                    tagName="p"
                    placeholder="Type body here"
                    value={ body }
                    onChange={ onChangeBody }
                />
            </div>
        ])
    },

    save( { attributes } ) {
        const {
            heading, 
            body,
            bgColor
        } = attributes;
        
        return (
            <section style={{backgroundColor: bgColor}}>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                        <RichText.Content tagName="h2" value={heading} />
                        <RichText.Content tagName="p" value={body} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});