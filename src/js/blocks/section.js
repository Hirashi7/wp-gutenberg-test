const { registerBlockType } = wp.blocks;

registerBlockType('arkonsoft/section', {
    title: 'Section',
    description: 'Simple section',
    icon: 'format-image',
    category: 'layout',

    edit: function() {
        return <div>Default text</div>;
    },

    save: function() {
        return <div>Default text</div>;
    }
});