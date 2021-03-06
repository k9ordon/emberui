widthsupport = Em.Mixin.create
  attributeBindings: ['computedWidth:style']

  computedWidth: Em.computed ->
    widths =
      tiny: '100px'
      small: '150px'
      medium: '200px'
      large: '250px'

    width = @get('width') or widths[@get('size')] or widths['medium']
    return "width: #{width};"
  .property 'size', 'width'

`export default widthsupport`
