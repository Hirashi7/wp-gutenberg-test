const { registerBlockType } = wp.blocks;
const { 
    RichText,
    InspectorControls,
    ColorPalette,
    MediaUpload
} = wp.blockEditor;

const { PanelBody, IconButton } = wp.components;

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
        },
        bgImage: {
            type: 'string',
            default: null,
        }
    },

    edit({ attributes, setAttributes }) {
        const {
            heading, 
            body,
            bgColor,
            bgImage
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

        function onChangeBgImage(image) {
            setAttributes( { bgImage: image.sizes.full.url } );
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
                 <PanelBody title={ 'Background image' }>
                    <p><strong>Choose background image</strong>:</p>
                    <MediaUpload 
                        onSelect={ onChangeBgImage }
                        type="image"
                        value={ bgImage }
                        render={ ({ open }) => (
                            <IconButton
                                onClick={ open }
                                icon="upload"
                                className="editor-media-placeholder__button is-button is-default is-large"
                            >
                                Background Image 
                            </IconButton>
                         ) }    
                    />
                 </PanelBody>
            </InspectorControls>,
            <div style={
                {
                    backgroundColor: bgColor, 
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
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
            bgColor,
            bgImage             
        } = attributes;
        
        return (
            <section style={
                    {
                        backgroundColor: bgColor, 
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }
                }>
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