const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;

const { PanelBody, IconButton, TextControl } = wp.components;

const INNER_BLOCKS_TEMPLATE = [
    [ 'core/heading', { placeholder: 'Treść nagłówka'} ],
    [ 'core/paragraph', { placeholder: 'Treść sekcji'}],
    [ 'core/button', {}]
];

registerBlockType('arkonsoft/cta', {
    title: 'CTA',
    description: 'Sekcja CTA',
    icon: 'megaphone',
    category: 'arkonsoft-blocks',
    attributes: {
        bgColor: {
            type: 'string',
            default: 'transparent'
        },
        bgImage: {
            type: 'object',
            default: null
        },
        padding: {
            type: 'string',
            default: '0px'
        },
        margin: {
            type: 'string',
            default: '0px'
        }
    },
    edit: ( { attributes, setAttributes } ) => {

        const {
            bgColor,
            bgImage,
            padding,
            margin
        } = attributes;

        function onBgColorChange( val ) {
            setAttributes( { bgColor: val } );
        }

        function onBgImageChange( val ) {
            setAttributes( { bgImage: val } );
        }

        function onBgImageRemove() {
            setAttributes( { bgImage: null } );
        }

        function onMarginChange( val ) {
            setAttributes( { margin: val } );
        }

        function onPaddingChange( val ) {
            setAttributes( { padding: val } );
        }

        return ([
            <InspectorControls >
                <PanelBody title={ 'Marginesy' }>
                    <p><strong>Wpisz wartości:</strong></p>
                    <TextControl 
                        label="Margin"
                        value={ margin }
                        onChange={ onMarginChange }
                    />
                    <TextControl 
                        label="Padding"
                        value={ padding }
                        onChange={ onPaddingChange }
                    />
                </PanelBody>
                <PanelBody title={ 'Kolor tła' }>
                    <p><strong>Wybierz kolor tła sekcji:</strong></p>
                    <ColorPalette
                        value={ bgColor }
                        onChange={ onBgColorChange } />
                </PanelBody>
                <PanelBody title={ 'Obraz tła' }>
                {
                    !!bgImage
                    ? <img src={bgImage.sizes.thumbnail.url} style={{marginBottom: '5px'}} />
                    : ''
                }
                    <MediaUpload 
                        onSelect={ onBgImageChange }
                        type="image"
                        value={ bgImage }
                        render={ ({ open }) => {
                            if(!!bgImage) {
                                btn = <IconButton
                                    onClick={ onBgImageRemove }
                                    icon="trash"
                                    className="editor-media-placeholder__button is-button is-default is-large">
                                    Usuń obraz
                                </IconButton>
                            } else {
                                btn = <IconButton
                                        onClick={ open }
                                        icon="upload"
                                        className="editor-media-placeholder__button is-button is-default is-large">
                                        Wybierz obraz
                                </IconButton>
                            }

                            return (btn);
                        }}
                    />
                </PanelBody>
            </InspectorControls>,
           <section style={{
            backgroundColor: bgColor, 
            backgroundImage: bgImage ? `url(${bgImage.sizes.full.url})`: 'none',
            padding,
            margin
           }}>
                <InnerBlocks template={ INNER_BLOCKS_TEMPLATE } templateLock="all"/>
            </section>
        ]);
    },
    save: ( { attributes } ) => {
        const {
            bgColor,
            bgImage,
            padding,
            margin
        } = attributes;

        return (
            <section style={{
                backgroundColor: bgColor, 
                backgroundImage: bgImage ? `url(${bgImage.sizes.full.url})`: 'none',
                padding,
                margin
            }}>
                <InnerBlocks.Content />
            </section>
        );
    },
})